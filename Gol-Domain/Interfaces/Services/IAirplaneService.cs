using Gol_Domain.Entities;
using System.Collections.Generic;

namespace Gol_Domain.Interfaces.Services
{
    public interface IAirplaneService : IService<Airplane>
    {
        new IList<Airplane> Get();
        new Airplane Get(int id);
    }
}
