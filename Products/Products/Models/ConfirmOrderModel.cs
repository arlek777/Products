namespace Products.Models
{
    public class ConfirmOrderModel
    {
        public string FullName { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public int TotalPrice { get; set; }
    }
}