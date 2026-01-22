using API.Data;
using API.Data.DTOs.Employees;
using API.Data.Entities.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers.Employees
{
    // [Authorize]
    public class EmployeeMasterController(DeviceContext context) : BaseController
    {
        [HttpGet("GetEmployees")]
        public async Task<ActionResult<IReadOnlyList<EmployeeDTO>>> GetEmployees()
        {
            List<EmployeeMaster> employees = await context.EmployeeMaster.ToListAsync();

            List<EmployeeDTO> users = employees.Select(employee => new EmployeeDTO
            {
                EmployeeID = employee.EmployeeID,
                DisplayName = employee.DisplayName,
                Email =  employee.Email,
                IsActive = employee.IsActive
            }).ToList();

            return users;
        }

        [HttpGet("GetEmployeeById/{id}")]
        public async Task<ActionResult<EmployeeDTO>> GetEmployeeById(string Id)
        {
            EmployeeMaster? employee = await context.EmployeeMaster
                .FirstOrDefaultAsync(x => x.Id.ToString() == Id);

            if (employee == null)
            {
                return NotFound();
            }

            return new EmployeeDTO
            {
                EmployeeID = employee.EmployeeID,
                DisplayName = employee.DisplayName,
                Email = employee.Email,
                IsActive = employee.IsActive
            };
        }
    }
}
