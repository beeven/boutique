(function(){
    "use strict";

angular.module("boutique.controllers",["boutique.services"])
.controller("HeaderCtrl",function($scope,Goods){

})
.controller("HomeCtrl",function($scope,Goods){
    $scope.goods = Goods.all();
    $scope.selected = $scope.goods[0];
    $scope.select = function(item){
        $scope.selected = item;
    };
})
.controller("GoodsCtrl",function($scope,Goods,$stateParams){
    $scope.goodName = $stateParams.name;
})
.controller("BlogCtrl",function($scope, Blog){
    Blog.get().then(function(data){
        $scope.posts = data.posts;
        console.log(data);
    })
})
;

})();
