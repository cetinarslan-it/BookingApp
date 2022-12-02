using System;
using Microsoft.EntityFrameworkCore;
using BookingAPI.Model;

    public class FlightBookingDbContext : DbContext
    {
        public FlightBookingDbContext (DbContextOptions<FlightBookingDbContext> options)
            : base(options)
        {
        }

        public DbSet<BookingAPI.Model.Flight> Flights { get; set; }
        public DbSet<BookingAPI.Model.Itinerary> Itineraries { get; set; } 
        public DbSet<BookingAPI.Model.Price> Prices { get; set; }
         public DbSet<BookingAPI.Model.Passanger> Passangers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Flight>().HasKey(f => f.Id);
            modelBuilder.Entity<Itinerary>().HasKey(i => i.Id);
            modelBuilder.Entity<Price>().HasKey(p => p.Id);
            modelBuilder.Entity<Passanger>().HasKey(g=>g.Id);

            modelBuilder.Entity<Passanger>().HasData(
                new Passanger
                {
                    Id = 1,
                    FirstName = "Cetin",
                    LastName = "Arslan",
                    Mobile = "072 777 77 77",
                    Email = "cetin@gmail.com",
                    Gender = "Male",
                    AgeGroup = "Adult",
                },
                 new Passanger
                {
                    Id = 2,
                    FirstName = "Metin",
                    LastName = "Arslan",
                    Mobile = "072 888 88 88",
                    Email = "metin@gmail.com",
                    Gender = "Male",
                    AgeGroup = "Child",
                }
            );
        }
    }
