using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace Dashboard
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                "~/Scripts/jquery.unobtrusive*",
                "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include());
                //"~/Scripts/knockout-{version}.js",
                //"~/Scripts/knockout.validation.js"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/sammy-{version}.js",
                "~/Scripts/app/common.js",
                "~/Content/vis-4.18.1/dist/vis.js",
                "~/Content/vis-4.18.1/dist/angular-vis.js"));//,
                //"~/Scripts/app/app.datamodel.js",
                //"~/Scripts/app/app.viewmodel.js",
                //"~/Scripts/app/home.viewmodel.js",
                //"~/Scripts/app/_run.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/bootstrap.js",
                "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                 "~/Content/bootstrap.css",
                 "~/Content/Site.css",
                "~/Content/vis-4.18.1/dist/vis.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angular/angular.js",
                "~/Scripts/angular/angular-route.js",
                "~/Scripts/angular/angular-ui-router.js"));
            bundles.Add(new ScriptBundle("~/bundles/angular-scripts").Include(
                "~/Scripts/app/app.js",
                "~/Scripts/app/angular-scripts/web-service.js",
                "~/Scripts/app/angular-scripts/translator.js",
                "~/Scripts/app/angular-scripts/home-controller.js"));
        }
    }
}
