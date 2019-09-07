namespace Gol_Domain.Entities
{
    public class Airplane : BaseEntity
    {
        public string Code { get; set; }
        public AirplaneModel Model { get; set; }
        public int NumberOfPassengers { get; set; }
    }
}
