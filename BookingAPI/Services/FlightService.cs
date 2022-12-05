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

    public async Task<List<Flight>> GetSearchedFlightListAsync(SearchRequest request)
    {
        var flight = await _context.Flights
            .Where(f => f.Departure == request.Departure)
            .Where(f => f.Arrival == request.Arrival)
            .Include(f => f.Itineraries
                .Where(i => DateTime.Parse(request.DepartureAt) == i.DepartureAt.Date ||
                            DateTime.Parse(request.ReturnAt) == i.DepartureAt.Date)
                .Where(i => i.AvailableSeats >= request.AdultCount + request.ChildCount))
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

