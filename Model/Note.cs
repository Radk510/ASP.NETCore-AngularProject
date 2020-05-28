using System.ComponentModel.DataAnnotations;

namespace FrontEnd.Model
{
    public class Note
    {
        public int Id { get; set; }

        [Required]
        public string StringNote { get; set; }
    }
}