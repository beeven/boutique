(function(){
    "use strict";

    angular.module("boutique",["ngResource","ngAnimate","ngSanitize","ui.router","boutique.controllers","boutique.services"])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
        .state("home",{
            url:"/home",
            templateUrl: "templates/home.html",
            controller: "HomeCtrl"
        })
        .state("range",{
            url:"/range/:name",
            templateUrl:"templates/goods.html",
            controller: "GoodsCtrl"
        })
        .state("about",{
            url:"/about",
            templateUrl: "templates/about.html"
        })
        .state("feedback",{
            url:"/feedback",
            templateUrl: "templates/feedback.html"
        })
        .state("blog",{
            url:"/blog",
            templateUrl:"templates/blog.html"
        })
        .state("policy",{
            url:"/policy/:name",
            templateUrl:"templates/policy.html"
        })
        .state("faq",{
            url:"/faq",
            templateUrl:"templates/faq.html"
        })

        $urlRouterProvider.otherwise("/home");

    });
})();
