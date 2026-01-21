using API.Data;
using API.Data.DTOs.Account;
using API.Data.DTOs.Employees;
using API.Data.Entities.Users;
using API.Data.Extensions.Account;
using API.Services.Interfaces.Account;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers.Account
{
    public class AccountController(DeviceContext context, ITokenService tokenService) : BaseController
    {
        // api/account/register
        [HttpPost("register")]
        public async Task<ActionResult<UserDTO>> Register(RegisterDTO registerDTO)
        {
            // Check if email already exists
            if (await context.EmployeeMaster.AnyAsync(x => 
                x.Email.ToLower() == registerDTO.Email.ToLower() && x.IsActive == true))
            {
                return BadRequest("Email is already in use!");
            }

            // Generate EmployeeID
            string latestEmployeeID = context.EmployeeMaster.OrderByDescending(x => x.EmployeeID)
                .Take(1).FirstOrDefault()?.EmployeeID ?? "10000";
            if (latestEmployeeID == null || latestEmployeeID.Length == 0)
            {
                latestEmployeeID = "10000";
            }

            string newEmployeeID = (int.Parse(latestEmployeeID) + 1).ToString();

            // Create new EmployeeMaster entry
            EmployeeMaster employee = new()
            {
                EmployeeID = newEmployeeID,
                DisplayName = registerDTO.DisplayName,
                Email = registerDTO.Email
            };

            var entity = context.EmployeeMaster.Add(employee).Entity;
            await context.SaveChangesAsync();

            // Create new UserMaster entry
            using var hmac = new HMACSHA512();

            UserMaster user = new()
            {
                EmployeeMasterID = entity.Id,
                EmployeeMaster = entity,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDTO.Password)),
                PasswordSalt = hmac.Key
            };

            context.UserMaster.Add(user);
            await context.SaveChangesAsync();

            return employee.ToDTO(tokenService);
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO)
        {
            EmployeeMaster? employee = await context.EmployeeMaster.FirstOrDefaultAsync(x => x.EmployeeID == loginDTO.EmployeeID && x.IsActive == true);

            if (employee == null)
            {
                return Unauthorized("Invalid Employee ID!");
            }

            UserMaster? user = await context.UserMaster.FirstOrDefaultAsync(x => x.EmployeeMasterID == employee.Id);

            if (user == null)
            {
                return Unauthorized("No user found!");
            }

            using HMACSHA512 hmac = new(user.PasswordSalt);
            byte[] computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDTO.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i])
                {
                    return Unauthorized("Invalid Password!");
                }
            }

            user.LastLogin = DateTime.Now;
            context.UserMaster.Update(user);
            await context.SaveChangesAsync();

            return employee.ToDTO(tokenService);
        }
    }
}
