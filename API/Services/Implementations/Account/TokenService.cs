using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Data.Entities.Users;
using API.Services.Interfaces.Account;
using Microsoft.IdentityModel.Tokens;

namespace API.Services.Implementations.Account;

public class TokenService(IConfiguration config) : ITokenService
{
    public string CreateToken(EmployeeMaster employee)
    {
        string tokenKey = config["TokenKey"] ?? throw new Exception("Token key not found in configuration!");

        if (tokenKey.Length < 64)
        {
            throw new Exception("Token key must be at least 64 characters long.");
        }

        SymmetricSecurityKey key = new(Encoding.UTF8.GetBytes(tokenKey));

        List<Claim> claims =
        [
            new(ClaimTypes.NameIdentifier, employee.Id.ToString()),
            new(ClaimTypes.Name, employee.DisplayName.ToString()),
            new("EmployeeID", employee.EmployeeID),
            new(ClaimTypes.Email, employee.Email)
        ];

        SigningCredentials creds = new(key, SecurityAlgorithms.HmacSha512Signature);
        SecurityTokenDescriptor tokenDescriptor = new()
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.Now.AddMinutes(60),
            NotBefore = DateTime.Now,
            SigningCredentials = creds
        };
        JwtSecurityTokenHandler tokenHandler = new();
        SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(token);
    }
}
