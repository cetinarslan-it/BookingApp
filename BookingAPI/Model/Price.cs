using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace BookingAPI.Model;
public class Price
{
        [Key]
        [JsonIgnore]
        public int Id { get; set; }
       
        [JsonProperty("currency")]
        public String Currency { get; set; }
        
        [JsonProperty("adult")]
        public int AdultPrice { get; set; }
        
        [JsonProperty("child")]
        public int ChildPrice { get; set; }


       /* [JsonIgnore]
        public int ItineraryId { get; set; }   

        [JsonIgnore]
        public Itinerary Itinerary { get; set; }*/
}