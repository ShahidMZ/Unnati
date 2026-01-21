using System;

namespace API.Data.Entities.Users;

public class UserMaster
{
    public int Id { get; set; }
    
    public int EmployeeMasterID { get; set; }
    public required EmployeeMaster EmployeeMaster { get; set; }

    
    public bool IsActive { get; set; } = true;
    public required byte[] PasswordHash { get; set; }
    public required byte[] PasswordSalt { get; set; }
    public DateTime? LastLogin { get; set; }
}
