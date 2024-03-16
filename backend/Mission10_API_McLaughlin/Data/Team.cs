using System.ComponentModel.DataAnnotations;

namespace Mission10_API_McLaughlin.Data
{
    public class Team
    {
        [Key]
        public int TeamID { get; set; }
        public string? TeamName { get; set; }
        public string? TeamCaptainID { get; set; }

        public ICollection<Bowler> Bowlers { get; set; }
    }
}
