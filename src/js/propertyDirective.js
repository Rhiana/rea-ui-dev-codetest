app.directive('property', function() {
  return {
    restrict: 'E',
    scope: {
        house: '='
    },
    templateUrl: 'templates/property.html',
    link: function(scope, element, attrs) {

    },
  }
});