namespace Mission10_API_McLaughlin.Data
{
    public class EFBowlerRepository : BowlerRepository
    {
        private BowlerContext _bowlerContext;

        public EFBowlerRepository(BowlerContext temp) { 
            _bowlerContext = temp;
        }
        
        public IEnumerable<Bowler> Bowlers => _bowlerContext.Bowlers  ;
        public IEnumerable<Team> Teams => _bowlerContext.Teams;
    }
}
