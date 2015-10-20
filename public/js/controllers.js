(function(){
    "use strict";

angular.module("boutique.controllers",["boutique.services"])
.controller("HomeCtrl",function($scope,Goods){
    $scope.goods = Goods.all();
});

})();
