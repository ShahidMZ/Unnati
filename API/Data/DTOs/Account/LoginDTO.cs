using System;
using System.ComponentModel.DataAnnotations;

namespace API.Data.DTOs.Account;

public class LoginDTO
{
    [Required]
    public string EmployeeID { get; set; } = "";
    [Required]
    public string Password { get; set; } = "";
}
