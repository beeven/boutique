(function(){
    "use strict";

    angular.module("boutique",["ngResource","ngAnimate","ngSanitize","ui.router","boutique.controllers","boutique.services",'slick'])
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
            templateUrl:"templates/blog.html",
            controller: "BlogCtrl"
        })
        .state("policy",{
            url:"/policy",
            abstract: true
        })
        .state("policy.return",{
            url:"/return",
            views:{
                "@":{
                    templateUrl:"templates/return_policy.html"
                }
            }

        })
        .state("policy.delivery",{
            url:"/delivery",
            views: {
                "@":{
                    templateUrl:"templates/delivery.html"
                }
            }

        })
        .state("faq",{
            url:"/faq",
            templateUrl:"templates/faq.html"
        })

        $urlRouterProvider.otherwise("/home");

    });
})();
