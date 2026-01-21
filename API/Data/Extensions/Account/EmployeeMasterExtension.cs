using System;
using API.Data.DTOs.Account;
using API.Data.Entities.Users;
using API.Services.Interfaces.Account;

namespace API.Data.Extensions.Account;

public static class EmployeeMasterExtension
{
    public static UserDTO ToDTO(this EmployeeMaster employee, ITokenService tokenService)
    {
        return new UserDTO
        {
            Id = employee.Id,
            EmployeeID = employee.EmployeeID,
            IsActive = employee.IsActive,
            DisplayName = employee.DisplayName,
            Email = employee.Email,
            LastLogin = employee.UserMaster?.LastLogin,
            Token = tokenService.CreateToken(employee)
        };
    }
}
