using BookingAPI.Model;
using BookingAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace BookingAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class PassangersController : ControllerBase
    {
        private readonly IPassangerService _passangerService;

        public PassangersController(IPassangerService passangerService)
        {
            _passangerService = passangerService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var passangers = await _passangerService.GetAllPassangersAsync();

            if (passangers == null)
            {
                return null;
            }
            return Ok(passangers);
        }

        [HttpGet]
        public async Task<IActionResult> GetByIdAsync(int id)
        {
            var passanger = await _passangerService.GetPassangerByIdAsync(id);
            if (passanger == null)
            {
                return NotFound();
            }
            return Ok(passanger);
        }

        [HttpPost]

        public async Task<IActionResult> CreateNewAsync(Passanger passanger)
        {
            var newPassanger = await _passangerService.CreateNewPassangerAsync(passanger);

            return Ok(newPassanger);
        }

        [HttpDelete]
        public async Task<IActionResult> DeletePassangerAsync(int id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var passanger = await _passangerService.DeletePassangerAsync(id);

            if (passanger == null)
            {
                return NotFound();
            }

            return Ok(passanger);
        }
    }
}

