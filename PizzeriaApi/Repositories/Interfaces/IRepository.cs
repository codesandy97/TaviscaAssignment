using Entities.Models;
using System.Collections.Generic;

namespace Repositories.Interfaces
{
    public interface IRepository
    {
        public List<Pizzas> getDataforPizza();
        public List<Topping> getDataforToppings();
        public List<AddOn> getDataforAddOns();
        public List<SideItems> getDataforSideItems();
        public List<Order> getDataforOrders();
        public bool placeOrder(Order purchase);
    }
}
