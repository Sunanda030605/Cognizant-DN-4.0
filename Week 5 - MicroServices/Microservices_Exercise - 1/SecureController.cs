using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JWTAuthentication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecureController : ControllerBase
    {
        [Authorize]
        [HttpGet("protected")]
        public IActionResult GetSecret()
        {
            return Ok("This is a protected endpoint. You are authenticated.");
        }
    }
}
