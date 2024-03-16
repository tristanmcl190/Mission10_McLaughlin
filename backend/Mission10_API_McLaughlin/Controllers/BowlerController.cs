using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10_API_McLaughlin.Data;
using System.Linq;

namespace Mission10_API_McLaughlin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlerRepository _bowlerRepository {  get; set; }

        public BowlerController(BowlerRepository temp) {
            _bowlerRepository = temp;
        }

        [HttpGet]
        public IEnumerable<Bowler> Get()
        {
            var bowlerData = _bowlerRepository.Bowlers.ToArray();

            return bowlerData;
        }
    }
}
