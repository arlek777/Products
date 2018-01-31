using System.Net.Mail;
using System.Web.Http;
using Products.Models;

namespace Products.Controllers
{
    public class OrderController : ApiController
    {
        [HttpPost]
        public IHttpActionResult ConfirmOrder([FromBody] ConfirmOrderModel model)
        {
            using (var client = new SmtpClient("localhost"))
            {
                var message = new MailMessage()
                {
                    From = new MailAddress("products@test.com"),
                    Subject = "New Order",
                    Body = $"Hi, {model.FullName}. " +
                           $"You have confirmed order at products.com site. " +
                           $"Your address: {model.Address}. " +
                           $"Total price: {model.TotalPrice}"
                };
                message.To.Add(model.Email);
                client.Send(message);
            }

            return Ok();
        }
    }
}