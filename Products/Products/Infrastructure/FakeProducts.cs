using System.Collections.Generic;
using Products.Models;

namespace Products.Infrastructure
{
    // TODO I'm not using business logic services with ninject or autofac for injection services to controller. All data just hardcoded for the simplicity.
    public static class FakeProducts
    {
        public static readonly List<CategoryModel> Categories = new List<CategoryModel>()
            {
                new CategoryModel() { Title = "Toys" },
                new CategoryModel() {  Title = "Planes" },
                new CategoryModel() { Title = "Railway" },
                new CategoryModel() { Title = "Plasma guns" }
            };

        public static readonly List<ProductModel> Products = new List<ProductModel>()
            {
                new ProductModel()
                {
                    Title = "Teddy bear",
                    Description = "This is the best teddy bear in the world for only 99.99$",
                    Img = "/images/tb.jpg",
                    Category = Categories[0]
                },
                new ProductModel()
                {
                    Title = "Whirligig",
                    Description = "Diego and Kicho shrink to bug size with the help of Kicho's magic flute and travel to the Whirligig Beetle Dance Show.",
                    Img = "/images/wh.jpg",
                    Category = Categories[0]
                },
                new ProductModel()
                {
                    Title = "Fighter",
                    Description = "This massive vehicle is an homage to a classic Kenner vehicle from the 1993 Predator toy line.",
                    Img = "/images/fighter.jpg",
                    Category = Categories[1]
                },
                new ProductModel()
                {
                    Title = "Cargo",
                    Description = "Airlift heavy loads with the high-powered 3-in-1 Cargo Heli! Taxi to the helipad and prepare for takeoff.",
                    Img = "/images/cargo.jpg",
                    Category = Categories[1]
                },
                new ProductModel()
                {
                    Title = "Train",
                    Description = "Whiff has a look and a smell all of his own! He's a cheery little tank engine with a very special job - he collects garbage!",
                    Img = "/images/train.jpg",
                    Category = Categories[2]
                },
                new ProductModel()
                {
                    Title = "E-11 (from starwars)",
                    Description = "The E-11 blaster from starwars movie.",
                    Img = "/images/e11.png",
                    Category = Categories[3]
                }
            }; 
    }
}