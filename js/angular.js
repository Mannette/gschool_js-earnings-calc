var myApp = angular.module('myApp', []);

myApp.controller('charges', ['$scope', function($scope) {

  $scope.totalCharges = function() {

    var mealPrice = document.getElementById('mealPrice').value;
    var mealTax = document.getElementById('mealTax').value;
    var mealTip = document.getElementById('mealTip').value;

    $scope.subtotal = mealPrice * (1 + mealTax);

    $scope.tip = mealPrice * mealTip;

    $scope.total = subtotal + tip;

  };

}]);
