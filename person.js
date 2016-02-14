var nmApp = angular.module('nameApp', []);

nmApp.controller('NameController', ['$scope', function($scope) {
   $scope.name = {
      getFull: function() {
         return ( ($scope.name.first || '') +
                  ($scope.name.middle ? (' ' + $scope.name.middle) : '') +
                  ($scope.name.last ? (' ' + $scope.name.last) : '') +
                  ($scope.name.suffix ? (', ' + $scope.name.suffix) : '')
               );
      }
   };


}]);
