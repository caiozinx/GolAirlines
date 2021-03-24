using Gol_Domain.Entities;
using System.Collections.Generic;

namespace Gol_Domain.Interfaces.Repository
{
    public interface IAirplaneRepository : IRepository<Airplane>
    {
        new IList<Airplane> SelectAll();
        new Airplane Select(int id);
    }
}
