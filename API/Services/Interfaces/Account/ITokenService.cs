using System;
using API.Data.Entities.Users;

namespace API.Services.Interfaces.Account;

public interface ITokenService
{
    string CreateToken(EmployeeMaster user);
}
