using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PizzeriaApi
{
    public static class Data
    {

        public static List<Pizzas> pizzas { get; set; }
        public static List<Topping> toppings { get; set; }
        public static List<AddOn> addons { get; set; }
        public static List<Order> orders { get; set; } = new List<Order>();
        public static List<SideItems> sideItems { get; set; }

        public static List<Pizzas> getDataforPizza()
        {
            pizzas = new List<Pizzas>();
            pizzas.Add(new Pizzas()
            {
                ID = 1,
                Name = "Magarita",
                SmallPrice = 150,
                MediumPrice = 175,
                ImageUrl = "pizza2.PNG",
                LargePrice = 185,
                TotalPrice = 150
            });
            pizzas.Add(new Pizzas()
            {
                ID = 1,
                Name = "Cheese loaded",
                ImageUrl = "Pizza1.PNG",
                SmallPrice = 180,
                MediumPrice = 195,
                LargePrice = 205,
                TotalPrice = 180
            }); ;
            pizzas.Add(new Pizzas()
            {
                ID = 1,
                Name = "Paneer loaded",
                SmallPrice = 200,
                MediumPrice = 215,
                ImageUrl = "Pizza3.PNG",
                LargePrice = 225,
                TotalPrice = 200
            });
            return pizzas;
        }

        public static List<Topping> getDataforToppings()
        {
            toppings = new List<Topping>();
            toppings.Add(new Topping()
            {
                ToppingID = 1,
                ToppingName = "corn",
                ToppingPrice = 15
            });
            toppings.Add(new Topping()
            {
                ToppingID = 1,
                ToppingName = "capsicum",
                ToppingPrice = 18
            });
            toppings.Add(new Topping()
            {
                ToppingID = 1,
                ToppingName = "olive",
                ToppingPrice = 20
            });
            return toppings;
        }

        public static List<AddOn> getDataforAddOns()
        {
            addons = new List<AddOn>();
            addons.Add(new AddOn()
            {
                AddOnID = 1,
                Name = "cheese",
                Price = 15
            });
            addons.Add(new AddOn()
            {
                AddOnID = 1,
                Name = "extra cheese",
                Price = 18
            });
            addons.Add(new AddOn()
            {
                AddOnID = 1,
                Name = "double cheese burst",
                Price = 20
            });
            return addons;
        }

        public static bool placeOrder(Order order)
        {
            orders.Add(order);
            return true;
        }

        public static List<SideItems> getDataforSideItems()
        {
            sideItems = new List<SideItems>();
            sideItems.Add(new SideItems()
            {
                ID = 1,
                Name = "Cheese Garlic Bread Stix",
                TotalPrice = 130,
                ImageUrl = "cheese-garlic-bread_130.jpg"
            });
            sideItems.Add(new SideItems()
            {
                ID = 2,
                Name = "Creamy Garlic Bread Stix",
                TotalPrice = 105,
                ImageUrl = "creamy-garlic-bread-stix_105.jpg"
            });
            sideItems.Add(new SideItems()
            {
                ID = 3,
                Name = "Garlic Bread Stix",
                TotalPrice = 99,
                ImageUrl = "Garlic_bread_stix_99.jpg"
            });
            sideItems.Add(new SideItems()
            {
                ID = 4,
                Name = "choco-sundae",
                TotalPrice = 29,
                ImageUrl = "choco-sundae_29.jpg"
            });
            sideItems.Add(new SideItems()
            {
                ID = 5,
                Name = "Magnum Truffle",
                TotalPrice = 29,
                ImageUrl = "magnum-truffle_76.jpg"
            });
            sideItems.Add(new SideItems()
            {
                ID = 6,
                Name = "Pepsi",
                TotalPrice = 57,
                ImageUrl = "pepsi_57.jpg"
            });
            sideItems.Add(new SideItems()
            {
                ID = 7,
                Name = "Mirinda",
                TotalPrice = 48,
                ImageUrl = "mirinda_48.jpg"
            });
            sideItems.Add(new SideItems()
            {
                ID = 7,
                Name = "7-up",
                TotalPrice = 50,
                ImageUrl = "7-up_50.jpg"
            });
            return sideItems;
        }

        public static List<Order> getDataforOrders()
        {
            return orders;
        }

    }
}
