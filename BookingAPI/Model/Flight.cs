using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using BookingAPI.Model;
using Newtonsoft.Json;

namespace BookingAPI.Model;
    public class Flight
    {
        [Key]
        [JsonProperty("flight_id")]
        [Column(Order = 0)]
        public String Id { get; set; }
       
        [JsonProperty("depatureDestination")]
        public String Departure { get; set; }
        
        [JsonProperty("arrivalDestination")]
        public String Arrival{ get; set; }  
       
        [JsonProperty("itineraries")]  
        public List<Itinerary> Itineraries { get; set; }
    }