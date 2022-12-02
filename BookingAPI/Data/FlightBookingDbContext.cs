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
        }
    }
