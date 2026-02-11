using Microsoft.AspNetCore.Mvc;

namespace API.Controllers.Errors
{
    public class BuggyController : BaseController
    {
        [HttpGet("auth")]
        public IActionResult GetAuth()
        {
            return Unauthorized();
        }

        [HttpGet("not-found")]
        public IActionResult GetNotFoundAuth()
        {
            return NotFound();
        }

        [HttpGet("server-error")]
        public IActionResult GetServerError()
        {
            throw new Exception("This is a server error!");
        }

        [HttpGet("bad-request")]
        public IActionResult GetBadRequest()
        {
            return BadRequest("This was not a good request!");
        }
    }
}
