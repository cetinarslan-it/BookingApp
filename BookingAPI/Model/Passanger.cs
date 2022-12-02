using System.ComponentModel.DataAnnotations;

namespace BookingAPI.Model;
    public class Passanger
    {
        [Key]
        public int Id { get; set; }

        public String FirstName { get; set; }
        
        public String LastName { get; set; }
       
        public String Mobile { get; set; }

        public String Email { get; set; }

        public String Gender { get; set; }

        public String AgeGroup { get; set; }

    }