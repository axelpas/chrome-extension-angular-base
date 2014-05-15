angular.module('popup')
  .controller('MainController', ['$scope', function($scope) {
      $scope.welcomeMsg = "This is your first chrome extension";

      $scope.contribute = function() {
        chrome.tabs.create({
          url: 'http://github.com'
        })
      }
  }])
;
