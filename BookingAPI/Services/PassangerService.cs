using Microsoft.EntityFrameworkCore;
using BookingAPI.Model;
using BookingAPI.Services;

public class PassangerService : IPassangerService
{
    private readonly FlightBookingDbContext _context;

    public PassangerService(FlightBookingDbContext context)
    {
        _context = context;
    }

    public async Task<Passanger> CreateNewPassangerAsync(Passanger passanger)
    {

        var newPassanger = _context.Add(passanger);
        await _context.SaveChangesAsync();

        return passanger;

    }

    public async Task<Passanger> DeletePassangerAsync(int id)
    {
        if (id == null || _context.Passangers == null)
        {
            return null;
        }

        var passanger = await _context.Passangers
            .FirstOrDefaultAsync(p => p.Id == id);

        if (passanger == null)
        {
            return null;
        }

        var deletedPassanger = _context.Entry(passanger);

        deletedPassanger.State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
        _context.SaveChanges();

        return passanger;
    }

    public async Task<List<Passanger>> GetAllPassangersAsync()
    {
        var passangers = await _context.Passangers
                .ToListAsync();

        if (passangers == null)
        {
            return null;
        }
        return passangers;
    }

    public async Task<Passanger> GetPassangerByIdAsync(int id)
    {
        if (id == null || _context.Passangers == null)
        {
            return null;
        }

        var passanger = await _context.Passangers
            .FirstOrDefaultAsync(p => p.Id == id);

        if (passanger == null)
        {
            return null;
        }
        return passanger;
    }
}
