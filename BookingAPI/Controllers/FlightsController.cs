using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace flightFinderApi.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class FlightsController : ControllerBase
    {
        private readonly FlightBookingDbContext _context;

        public FlightsController(FlightBookingDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var flights = await _context.Flights
                .Include(f => f.Itineraries)
                .ThenInclude(i => i.Prices)
                .ToListAsync();
            return Ok(flights);
        }

        [HttpGet]
        public async Task<IActionResult> GetById(string id)
        {
            if (id == null || _context.Flights == null)
            {
                return NotFound();
            }

            var flight = await _context.Flights
                .Include(f => f.Itineraries)
                .ThenInclude(i => i.Prices)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (flight == null)
            {
                return NotFound();
            }

            return Ok(flight);
        }
      
    }    
}

