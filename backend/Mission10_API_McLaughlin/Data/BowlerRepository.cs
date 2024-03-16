namespace Mission10_API_McLaughlin.Data
{
    public interface BowlerRepository
    {
        IEnumerable<Bowler> Bowlers { get; }
        IEnumerable<Team> Teams { get; }
    }
}
