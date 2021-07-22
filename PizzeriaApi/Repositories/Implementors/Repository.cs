using Entities.Models;
using PizzeriaApi;
using Repositories.Interfaces;
using System.Collections.Generic;

namespace Repositories.Implementors
{
    public class Repository : IRepository
    {
        public List<AddOn> getDataforAddOns()
        {
            return Data.getDataforAddOns();
        }

        public List<Order> getDataforOrders()
        {
            return Data.getDataforOrders();
        }

        public List<Pizzas>  getDataforPizza()
        {
            return Data.getDataforPizza();
        }

        public List<SideItems> getDataforSideItems()
        {
            return Data.getDataforSideItems();
        }

        public List<Topping>  getDataforToppings()
        {
            return Data.getDataforToppings();
        }

        public bool placeOrder(Order purchase)
        {
            return Data.placeOrder(purchase);
        }
    }
}
