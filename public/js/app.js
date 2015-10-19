"use strict";

angular.module("boutique",["ngResource","ngAnimate","ngSanitize","ui.router","boutique.controllers","boutique.services"])
.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state("home",{
        url:"/home",
        templateUrl: "templates/home.html"
    })
    .state("range",{
        url:"/range",
        abstract: true
    })
    .state("range.aroma",{
        url:"/aroma"
    })
    .state("range.beauty",{

    })
    .state("range.care",{

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

    $urlRouterProvider.otherwise("/home");

});
