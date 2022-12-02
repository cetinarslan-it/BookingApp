using BookingAPI.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookingAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class PassangersController : ControllerBase
    {
        private readonly FlightBookingDbContext _context;

        public PassangersController(FlightBookingDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var passangers = await _context.Passangers
                .ToListAsync();
            return Ok(passangers);
        }

        [HttpGet]
        public async Task<IActionResult> GetById(int id)
        {
            if (id == null || _context.Passangers == null)
            {
                return NotFound();
            }

            var passanger = await _context.Passangers
                .FirstOrDefaultAsync(p => p.Id == id);

            if (passanger == null)
            {
                return NotFound();
            }

            return Ok(passanger);
        }

        [HttpPost]

        public async Task<IActionResult> CreatePassanger(Passanger passanger)
        {
            if (ModelState.IsValid)
            {
                _context.Add(passanger);
                await _context.SaveChangesAsync();

            }
            return Ok(passanger);
        }

        [HttpDelete]
        public async Task<IActionResult> DeletePassanger(int id)
        {
            if (id == null || _context.Passangers == null)
            {
                return NotFound();
            }

            var passanger = await _context.Passangers
                .FirstOrDefaultAsync(p => p.Id == id);

            if (passanger == null)
            {
                return NotFound();
            }

            _context.Entry(passanger).State = Microsoft.EntityFrameworkCore.EntityState.Deleted;
            _context.SaveChanges();

            return Ok(passanger);
        }
    }
}

