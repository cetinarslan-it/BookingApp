using BookingAPI.Model;

namespace BookingAPI.Services;

public interface IFlightService
{
    Task<List<Flight>> GetAllFlightsAsync();
    Task<List<Flight>> GetSearchedFlightListAsync(SearchRequest request);
    Task<Flight> GetFlightByIdAsync(string id);
}