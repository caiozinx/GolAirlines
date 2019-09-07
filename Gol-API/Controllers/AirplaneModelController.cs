using Gol_Domain.Entities;
using Gol_Service.Services;
using Gol_Service.Validator;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Gol_API.Controllers
{
    [Produces("application/json")]
    [Route("api/AirplaneModel")]
    [ApiController]
    public class AirplaneModelController : ControllerBase
    {
        private BaseService<AirplaneModel> service = new BaseService<AirplaneModel>();

        public IActionResult Post([FromBody] AirplaneModel item)
        {
            try
            {
                service.Post<AirplaneModelValidator>(item);

                return new ObjectResult(item.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        public IActionResult Put([FromBody] AirplaneModel item)
        {
            try
            {
                service.Put<AirplaneModelValidator>(item);

                return new ObjectResult(item);
            }
            catch (ArgumentNullException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        public IActionResult Delete(int id)
        {
            try
            {
                service.Delete(id);

                return new NoContentResult();
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        public IActionResult Get()
        {
            try
            {
                return new ObjectResult(service.Get());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        public IActionResult Get(int id)
        {
            try
            {
                return new ObjectResult(service.Get(id));
            }
            catch (ArgumentException ex)
            {
                return NotFound(ex);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

    }
}