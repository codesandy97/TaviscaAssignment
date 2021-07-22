namespace Entities.Models
{
    public abstract class Product
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public decimal TotalPrice { get; set; }
        public int Quantity { get; set; }
        public int Size { get; set; }
        public string ImageUrl { get; set; }

    }
}
