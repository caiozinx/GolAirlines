using Gol_Domain.Entities;
using Gol_Domain.Interfaces.Repository;
using Gol_Domain.Interfaces.Services;
using Infra.Data.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Gol_Service.Services
{
    public class AirplaneService : BaseService<Airplane>, IAirplaneService
    {
        AirplaneRepository repository = new AirplaneRepository();
        public new IList<Airplane> Get() => repository.SelectAll();

        public new Airplane Get(int id)
        {
            if (id.Equals(0))
                throw new ArgumentException("Please tell me the airplane you want.");

            return repository.Select(id);
        }

    }
}
