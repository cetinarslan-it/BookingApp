using BookingAPI.Model;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new FlightBookingDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<FlightBookingDbContext>>()))
            {
                
                if (context.Flights.Any())
                {
                    return;   
                } 
                
                var env = serviceProvider.GetRequiredService<IWebHostEnvironment>();
                var path = Path.Combine(env.ContentRootPath,"Data","data.json");
             
                var jsonString = System.IO.File.ReadAllText(path);
                if (jsonString != null)
                {    
                    var flights  = JsonConvert.DeserializeObject<List<Flight>>(jsonString);
 
                    if (flights != null)
                    {
                        flights.ForEach(flight => context.Flights.Add(flight));
                        context.SaveChanges();
                    } 
                } 
            }
        }
}