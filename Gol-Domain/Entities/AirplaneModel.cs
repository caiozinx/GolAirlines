using System;
using System.Collections.Generic;
using System.Text;

namespace Gol_Domain.Entities
{
    public class AirplaneModel : BaseEntity
    {
        public string Company { get; set; }
        public string Role { get; set; }
        public string Name { get; set; }
    }
}
