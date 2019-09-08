using Gol_Domain.Entities;
using Infra.Data.Mapping;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace Infra.Data.Context
{
    public class SqlServerContext : DbContext
    {
        public DbSet<Airplane> Airplane { get; set; }
        public DbSet<AirplaneModel> AirplaneModel { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
                optionsBuilder.UseSqlServer("Data Source=192.168.99.100,11433;Initial Catalog=GolAirlines;User Id=SA;Password=#CaioCarneiro;", b => b.MigrationsAssembly("Infra.Data"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Airplane>(new AirplaneMap().Configure);
            modelBuilder.Entity<AirplaneModel>(new AirplaneModelMap().Configure);
        }

        public override int SaveChanges()
        {
            foreach (var data in ChangeTracker.Entries().Where(w => w.Entity.GetType().GetProperty("CreatedAt") != null || w.Entity.GetType().GetProperty("UpdatedAt") != null))
            {
                if (data.State == EntityState.Added)
                    data.Property("CreatedAt").CurrentValue = DateTime.Now;

                if (data.State == EntityState.Modified)
                    data.Property("UpdatedAt").CurrentValue = DateTime.Now;
            }

            return base.SaveChanges();
        }
    }
}
