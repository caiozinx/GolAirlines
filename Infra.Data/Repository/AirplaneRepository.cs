using Gol_Domain.Entities;
using Gol_Domain.Interfaces.Repository;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Infra.Data.Repository
{
    public class AirplaneRepository : BaseRepository<Airplane>, IAirplaneRepository
    {
        new public IList<Airplane> SelectAll()
        {
            return context.Airplane.Include(i => i.AirplaneModel).ToList();
        }

        new public Airplane Select(int id)
        {
            return context.Airplane.Include(i => i.AirplaneModel).Where(w => w.Id == id).FirstOrDefault();
        }

    }
}
