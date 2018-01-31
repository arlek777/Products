using System.Web.Http;
using Products.Infrastructure;

namespace Products.Controllers
{
    public class ProductsController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetProducts()
        {
            return Ok(FakeProducts.Products);
        }

        [HttpGet]
        public IHttpActionResult GetCategories()
        {
            return Ok(FakeProducts.Categories);
        }
    }
}
