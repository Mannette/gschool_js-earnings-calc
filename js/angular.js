var myApp = angular.module('myApp', []);

myApp.controller('charges', function($scope, $filter) {
  var tips = [];
  var meals = [];
  var mealPrice = document.getElementById('mealPrice');
  var mealTax = document.getElementById('mealTax');
  var mealTip = document.getElementById('mealTip');

  $scope.totalCharges = function() {

    $scope.subtotal = mealPrice.value * (1 + mealTax.value);

    $scope.tip = mealPrice.value * mealTip.value;

    $scope.total = $scope.subtotal + $scope.tip;

    tips.push($scope.tip);
    meals.push($scope.total);

    $scope.totalEarnings(tips, meals);

  };

  $scope.totalEarnings = function(tipArr, mealArr) {
    $scope.totalTips = tipArr.length;
    $scope.mealCount = mealArr.length;
    var tipTotals = 0;
    for (var i = 0; i < tipArr.length; i++) {
      tipTotals += tipArr[i];
    }
    var tip = tipTotals / tipArr.length;
    $scope.averageTip = $filter('currency')(tip);
  };

    $scope.clear = function() {
      mealPrice.value = '';
      mealTax.value = '';
      mealTip.value = '';
    };

    $scope.reset = function() {
      $scope.totalTips = '';
      $scope.mealCount = '';
      $scope.averageTip = '';
    };

});
