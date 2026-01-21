using System;

namespace API.Data.Entities.Users;

public class EmployeeMaster
{
    public int Id { get; set; }
    
    public required string EmployeeID { get; set; }
    public bool IsActive { get; set; } = true;
    public required string DisplayName { get; set; }
    public required string Email { get; set; }

    public UserMaster? UserMaster{ get; set; }
}