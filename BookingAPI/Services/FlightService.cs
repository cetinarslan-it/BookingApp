using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BookingAPI.Model;

namespace BookingAPI.Services;

public class FlightService : IFlightService
{
    private readonly FlightBookingDbContext _context;

    public FlightService(FlightBookingDbContext context)
    {
        _context = context;
    }

    public async Task<List<Flight>> GetAllFlightsAsync()
    {
        var flights = await _context.Flights
            .Include(f => f.Itineraries)
            .ThenInclude(i => i.Prices)
            .ToListAsync();
        if (flights == null)
        {
            return null;
        }
        return flights;
    }

    public async Task<List<Flight>> GetSearchedFlightListAsync(string departure, string arrival, string departureAt, string? returnAt, int adultCount, int childCount)
    {
        var flight = await _context.Flights
            .Where(f => f.Departure == departure)
            .Where(f => f.Arrival == arrival)
            .Include(f => f.Itineraries
                .Where(i => DateTime.Parse(departureAt) == i.DepartureAt.Date ||
                            DateTime.Parse(returnAt) == i.DepartureAt.Date)
                .Where(i => i.AvailableSeats >= adultCount + childCount))
            .ThenInclude(i => i.Prices)
            .ToListAsync();

        if (flight == null)
        {
            return null;
        }

        return flight;
    }

    public async Task<Flight> GetFlightByIdAsync(string id)
    {
        if (id == null || _context.Flights == null)
        {
            return null;
        }

        var flight = await _context.Flights
            .Include(f => f.Itineraries)
            .ThenInclude(i => i.Prices)
            .FirstOrDefaultAsync(f => f.Id == id);

        if (flight == null)
        {
            return null;
        }

        return flight;
    }


}

