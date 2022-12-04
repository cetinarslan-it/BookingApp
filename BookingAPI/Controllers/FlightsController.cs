using Microsoft.AspNetCore.Mvc;
using BookingAPI.Services;

namespace BookingAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class FlightsController : ControllerBase
    {
        private readonly IFlightService _flightService;

        public FlightsController(IFlightService flightService)
        {
            _flightService = flightService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var flights = await _flightService.GetAllFlightsAsync();

            if (flights == null)
            {
                return NotFound();
            }
            return Ok(flights);
        }

        [HttpGet]
        public async Task<IActionResult> GetSearchedListAsync(string departure, string arrival, string departureAt, string? returnAt, int adultCount, int childCount)
        {
            var flights = await _flightService.GetSearchedFlightListAsync(departure, arrival, departureAt, returnAt, adultCount, childCount);

            if (flights == null)
            {
                return NotFound();
            }

            return Ok(flights);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAsync(string id)
        {
            var flight = await _flightService.GetFlightByIdAsync(id);

            if (flight == null)
            {
                return NotFound();
            }

            return Ok(flight);
        }
    }
}

