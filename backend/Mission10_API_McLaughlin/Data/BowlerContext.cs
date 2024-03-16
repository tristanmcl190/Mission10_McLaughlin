using Microsoft.EntityFrameworkCore;

namespace Mission10_API_McLaughlin.Data
{
    public class BowlerContext : DbContext
    {
        public BowlerContext(DbContextOptions<BowlerContext> options) : base(options) { }

        public DbSet<Bowler> Bowlers {get; set;}

        public DbSet<Team> Teams { get; set;}
    }
}
