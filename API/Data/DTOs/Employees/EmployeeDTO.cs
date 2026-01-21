using System;

namespace API.Data.DTOs.Employees;

public class EmployeeDTO
{
    public required string EmployeeID { get; set;}
    public required string DisplayName { get; set;}
    public required string Email { get; set; }
    public bool IsActive { get; set; }
}
