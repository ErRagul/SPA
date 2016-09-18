(function () {
    'use strict'
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope', '$log'];

    function LunchCheckController($scope, $log) {
        $scope.food;
        $scope.count = 0;
        $scope.msg = "";

        $scope.splitNames = function () {
            var name = $scope.food;
            $log.log("Names", typeof name);
            if (typeof name != "undefined")
                var list = name.split(",");
            return list || [];
        }

        $scope.checkFoodLevel = function () {
            var names = $scope.splitNames();
            $log.log(names);
            var count = names.length;
            names.forEach(function (element, index, array) {
                if (element == " " || element == "")
                    count--;
                $log.log(typeof element);
            });
            if (count <= 3 && count > 0) {
                $scope.msg = "Enjoy";
            } else if (count == 0) {
                $scope.msg = "Please enter data first";
            } else {
                $scope.msg = "Too Much";
            }
            $log.log("Food Count", count);
        }

    }
})();