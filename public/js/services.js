(function(){
"use strict";

angular.module("boutique.services",["ngResource"])
    .factory("Goods",function(){
        var goods = [
            {
                name: "Aroma",
                description: "",
                links: ["http://www.google.com","http://www.yahoo.com"],
                backgroundImage: "img/purple-candle.jpg",
                price: 100,
                pics: []
            },
            {
                name: "Beauty",
                description: "",
                links: ["http://www.google.com","http://www.yahoo.com"],
                backgroundImage: "img/interior_romance.jpg",
                price: 150,
                pics: []
            },
            {
                name: "Care",
                description: "",
                links: ["http://www.google.com","http://www.yahoo.com"],
                backgroundImage: "aromatherapy.jpg",
                price: 180,
                pics: []
            },
        ];

        return {
            all: function(){
                return goods;
            },
            get: function(name){
                var i;
                for(i in goods){
                    if(goods[i].name.toLowerCase === name){
                        return goods[i];
                    }
                }
            }
        };
    });

})();
