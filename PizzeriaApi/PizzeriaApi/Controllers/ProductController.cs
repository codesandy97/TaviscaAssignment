using Microsoft.AspNetCore.Mvc;
using Entities.Models;
using Repositories.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PizzeriaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IRepository _repo;
        public ProductController(IRepository repo)
        {
            _repo = repo;
        }
        // GET: api/<ProductController>
        [HttpGet]
        [Route("get/pizza")]
        public IActionResult GetPizza()
        {
            var pizzas = _repo.getDataforPizza();
            return Ok(pizzas);
        }

        // GET: api/<ProductController>
        [HttpGet]
        [Route("get/toppings")]
        public IActionResult GetToppings()
        {
            var toppings = _repo.getDataforToppings();
            return Ok(toppings);
        }

        // GET: api/<ProductController>
        [HttpGet]
        [Route("get/addons")]
        public IActionResult GetAddOn()
        {
            var data = _repo.getDataforAddOns();
            return Ok(data);
        }

        // GET: api/<ProductController>
        [HttpGet]
        [Route("get/orders")]
        public IActionResult GetOrders()
        {
            var data = _repo.getDataforOrders();
            return Ok(data);
        }

        // GET: api/<ProductController>
        [HttpGet]
        [Route("get/sideItems")]
        public IActionResult GetSideItems()
        {
            var data = _repo.getDataforSideItems();
            return Ok(data);
        }

        // POST api/<ProductController>
        [HttpPost]
        [Route("post/order")]
        public IActionResult PurchaseItem([FromBody] Order purchaseitems)
        {
           bool orderPlaced = _repo.placeOrder(purchaseitems);
            return Ok(purchaseitems);
        }

    }
}
