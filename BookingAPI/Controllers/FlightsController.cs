using Microsoft.AspNetCore.Mvc;
using BookingAPI.Services;
using BookingAPI.Model;

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

        [HttpPost]
        public async Task<IActionResult> GetSearchedListAsync(SearchRequest request)
        {
            var flights = await _flightService.GetSearchedFlightListAsync(request);

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

