using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookingAPI.Model
{
    [Table("SearchRequest")]
    public class SearchRequest
    { 
        [Required]
        public string Departure { get; set; }
        [Required]       
        public string Arrival { get; set; } 
        public string DepartureAt { get; set; } 
        public string? ReturnAt { get; set; } 
        public int AdultCount { get; set; }
        public int ChildCount { get; set; }
    }
}