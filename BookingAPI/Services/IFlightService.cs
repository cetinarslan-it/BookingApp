using BookingAPI.Model;

namespace BookingAPI.Services;

public interface IFlightService
{
    Task<List<Flight>> GetAllFlightsAsync();
    Task<List<Flight>> GetSearchedFlightListAsync(string departure, string arrival, string departureAt, string? returnAt, int adultCount, int childCount);
    Task<Flight> GetFlightByIdAsync(string id);
}