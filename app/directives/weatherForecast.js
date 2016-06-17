app.directive('weatherForecast', function() {

  return {
    restrict: 'E',
    templateUrl: 'app/directives/templates/weatherForecast.html',
    replace: true,
    scope: {
      locationName: '@',
      weather: '=',
      weatherSummery: '&'
    }
  };

});
