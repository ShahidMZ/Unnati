using System;

namespace API.Data.DTOs.Account;

public class UserDTO
{
    public int Id { get; set; }
    public required string EmployeeID { get; set; }
    public bool IsActive { get; set; } = true;
    public required string DisplayName { get; set; }
    public required string Email { get; set; }
    public DateTime? LastLogin { get; set; }
    public required string Token { get; set; }
}
