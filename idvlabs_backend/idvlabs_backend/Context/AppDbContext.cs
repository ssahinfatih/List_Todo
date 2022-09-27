using idvlabs_backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace idvlabs_backend.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
 
        public DbSet<Account> accounts { get; set; }
        public DbSet<Content> contents{ get; set; }

    }
}
