using Gol_Domain.Entities;
using Gol_Service.Services;
using Gol_Service.Validator;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Gol_API.Controllers
{
  [Produces("application/json")]
  [Route("api/Airplane")]
  [ApiController]
  public class AirplaneController : ControllerBase
  {
    private BaseService<Airplane> service = new BaseService<Airplane>();
    private AirplaneService _service = new AirplaneService();

    [HttpPost]
    public IActionResult Post([FromBody] Airplane item)
    {
      try
      {
        service.Post<AirplaneValidator>(item);

        return new ObjectResult(item.Id);
      }
      catch (Exception ex)
      {
        return BadRequest(ex);
      }
    }

    [HttpPut]
    public IActionResult Put([FromBody] Airplane item)
    {
      try
      {
        service.Put<AirplaneValidator>(item);

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

    [HttpDelete]
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

    [HttpGet]
    public IActionResult Get()
    {
      try
      {
        return new ObjectResult(_service.Get());
      }
      catch (Exception ex)
      {
        return BadRequest(ex);
      }
    }

    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        try
        {
            return new ObjectResult(_service.Get(id));
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
