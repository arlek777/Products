using System.Web.Http;
using Products.Infrastructure;

namespace Products.Controllers
{
    // TODO I'm not using Authorization filter for the simplicity. 
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
