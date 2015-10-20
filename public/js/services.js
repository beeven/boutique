(function(){
"use strict";

angular.module("boutique.services",["ngResource"])
    .factory("Goods",function(){
        var goods = [
            {
                name: "Aroma",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis <i>cursus</i> sagittis ipsum. Praesent mauris. Fusce nec <i>diam.</i>",
                links: ["http://www.google.com","http://www.yahoo.com"],
                backgroundImage: "url('img/purple-candle.jpg')",
                price: 100,
                pics: []
            },
            {
                name: "Beauty",
                description: " Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.",
                links: ["http://www.google.com","http://www.yahoo.com"],
                backgroundImage: "url('img/interior_romance.jpg')",
                price: 150,
                pics: []
            },
            {
                name: "Care",
                description: "<i>Proin</i> Fusce ac <i>porttitor.</i> turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec <i>aptent</i> ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis <i>litora</i> turpis. Nulla facilisi. Ut <i>ante.</i> fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum <i>cursus</i> sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,",
                links: ["http://www.google.com","http://www.yahoo.com"],
                backgroundImage: "url('img/aromatherapy.jpg')",
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
    })
    .factory('Blogs',function($http){

    })
    ;

})();
