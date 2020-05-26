using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Wchter.Entities.UsersData
{
    public partial class UsersDataContext : DbContext
    {
        public UsersDataContext()
        {
        }

        public UsersDataContext(DbContextOptions<UsersDataContext> options)
            : base(options)
        {
        }

        public virtual DbSet<User> User { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.EmailPersonal)
                    .HasName("User_EmailUk")
                    .IsUnique();

                entity.HasIndex(e => e.Username)
                    .HasName("User_UsernameUk")
                    .IsUnique();

                entity.Property(e => e.UserId).HasMaxLength(10);

                entity.Property(e => e.EmailPersonal)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FirstSurname)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.PasswordHash).HasMaxLength(128);

                entity.Property(e => e.PasswordSalt).HasMaxLength(128);

                entity.Property(e => e.ProfilePicture).HasColumnType("image");

                entity.Property(e => e.SecondName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.SecondSurname)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
