using System.Collections.Generic;


namespace Entities.Models
{
    public class Order
    {
        public string OrderID { get; set; }
        public List<Pizzas> selectedpizzas { get; set; }
        public List<SideItems> sideItems { get; set; }
        public int TotalExpense { get; set; }
    }
}
