using System;
using backend.Data.Map;
using backend.Model;
using Microsoft.EntityFrameworkCore;


namespace backend.Data
{
    
    public class Context : DbContext
    {
         public Context(DbContextOptions<Context> options) : base(options)
        {

        }   

        public DbSet<ReminderModel> Reminders {get;set;}

          protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ReminderMap());
            base.OnModelCreating(modelBuilder);
        }

    }
}
