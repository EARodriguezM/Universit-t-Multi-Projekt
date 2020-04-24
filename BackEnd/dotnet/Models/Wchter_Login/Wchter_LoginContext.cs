using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace w_chter.Models.Wchter_Login
{
    public partial class Wchter_LoginContext : DbContext
    {
        public Wchter_LoginContext()
        {
        }

        public Wchter_LoginContext(DbContextOptions<Wchter_LoginContext> options)
            : base(options)
        {
        }

        public virtual DbSet<UserLogin> UserLogin { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=earodriguezm;Initial Catalog=W-chter_Login;User iD=sa;Password=qwzx25ERcv80;Trusted_Connection=False;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserLogin>(entity =>
            {
                entity.HasIndex(e => e.Username)
                    .HasName("UserLoginUsernameUk")
                    .IsUnique();

                entity.Property(e => e.UserLoginId).HasMaxLength(10);

                entity.Property(e => e.Password).HasMaxLength(128);

                entity.Property(e => e.Salt).HasMaxLength(128);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
