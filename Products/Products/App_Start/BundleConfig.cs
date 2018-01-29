using System.Web;
using System.Web.Optimization;

namespace Products
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/angularjs").Include(
                "~/Scripts/angularjs/angular.js",
                "~/Scripts/angularjs/angular-resource.js",
                "~/Scripts/angularjs/angular-cookies.js",
                "~/Scripts/angularjs/angular-route.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularapp").Include(
                "~/Scripts/app/app.js",
                "~/Scripts/app/app.routes.js",
                "~/Scripts/app/products/products.controller.js",
                "~/Scripts/app/products/products.service.js",
                "~/Scripts/app/cart/cart.service.js",
                "~/Scripts/app/cart/cart-controller.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
