using System.ComponentModel.DataAnnotations.Schema;

namespace Gol_Domain.Entities
{
    public class Airplane : BaseEntity
    {
        public string Code { get; set; }
        public int NumberOfPassengers { get; set; }
        public int AirplaneModelId { get; set; }

        [ForeignKey("AirplaneModelId")]
        public AirplaneModel AirplaneModel { get; set; }
    }
}
