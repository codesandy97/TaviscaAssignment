using System.Collections.Generic;

namespace Entities.Models
{
    public class Pizzas: Product
    {
        public int SmallPrice { get; set; }
        public int MediumPrice { get; set; }
        public int LargePrice { get; set; }
        public List<Topping> Toppings { get; set; }
        public AddOn AddOn { get; set; }
    }
}
