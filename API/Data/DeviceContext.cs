using System;
using API.Data.Entities.Users;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DeviceContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<EmployeeMaster> EmployeeMaster { get; set; }
    public DbSet<UserMaster> UserMaster { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<EmployeeMaster>(entity =>
        {
            entity.HasKey(e => e.Id);
        });

        modelBuilder.Entity<UserMaster>(entity =>
        {
            entity.HasKey(e => e.Id); 
        });
    }
}