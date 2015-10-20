(function(){
    "use strict";

angular.module("boutique.controllers",["boutique.services"])
.controller("HeaderCtrl",function($scope,Goods){

})
.controller("HomeCtrl",function($scope,Goods){
    $scope.goods = Goods.all();
})
.controller("GoodsCtrl",function($scope,Goods,$stateParams){
    $scope.goodName = $stateParams.name;
})
;

})();
