using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace BookingAPI.Model;
    public class Itinerary
    {
        [Key]
        [JsonIgnore]
        public int Id { get; set; }
        
        [JsonProperty("depatureAt")]
        public DateTime DepartureAt { get; set; }
        
        [JsonProperty("arriveAt")]
        public DateTime ArrivalAt { get; set; }
       
        [JsonProperty("avaliableSeats")]
        public int AvailableSeats { get; set; }

        
        [JsonProperty("prices")]
        public List<Price> Prices { get; set; }

    }