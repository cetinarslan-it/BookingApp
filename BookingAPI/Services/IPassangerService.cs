using BookingAPI.Model;

namespace BookingAPI.Services;

public interface IPassangerService
{
    Task<List<Passanger>> GetAllPassangersAsync();
    Task<Passanger> GetPassangerByIdAsync(int id);
    Task<Passanger> CreateNewPassangerAsync(Passanger passanger);
    Task<Passanger> DeletePassangerAsync(int id);
}
