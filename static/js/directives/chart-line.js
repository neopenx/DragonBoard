/**
 * Widget Directive
 */

angular
    .module('DragonBoard')
    .controller("LineCtrl", ['$scope', LineCtrl])

function LineCtrl($scope) {
   $scope.options = {
     scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        }
      ]
    }
  };
};
