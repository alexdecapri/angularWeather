app.directive('weatherForecast', function() {

  return {
    restrict: 'E',
    templateUrl: './app/directives/templates/weatherForecast.html',
    scope: {
      locationName: '@',
      weather: '=',
      weatherSummery: '&'
    }
  };

});
