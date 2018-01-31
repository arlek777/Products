namespace Products.Models
{
    public class ProductModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Img { get; set; }
        public double Price { get; set; }

        public CategoryModel Category { get; set; }
    }
}