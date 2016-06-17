app.controller('weatherCtrl', function($scope, weatherService) {

  init();

  $scope.getWeatherForAnyLocation = function() {
    $scope.loadingForAnyLocation = true;

    weatherService.getWeather($scope.location)
      .then(function(weatherForecastForAnyLocation) {
        if (weatherForecastForAnyLocation.message) {
          updatePropsForAnyLocation(false, true, false, {}, weatherForecastForAnyLocation.message, '');
        } else {
          updatePropsForAnyLocation(false, false, true, weatherForecastForAnyLocation, '', '');
        }
      })
      .catch(function(err) {
        updatePropsForAnyLocation(false, true, false, {}, err.message, '');
      });
  };

  function init() {
    updatePropsForAnyLocation(false, false, false, {}, '', '');
    $scope.weatherSummery = weatherService.weatherSummery;
  }

  function updatePropsForAnyLocation(loadingForAnyLocation, isErrorForAnyLocation, isWeatherForAnyLocation, weatherForecastForAnyLocation, errorMessageForAnyLocation, location) {
    $scope.loadingForAnyLocation = loadingForAnyLocation;
    $scope.isErrorForAnyLocation = isErrorForAnyLocation;
    $scope.isWeatherForAnyLocation = isWeatherForAnyLocation;
    $scope.weatherForecastForAnyLocation = weatherForecastForAnyLocation;
    $scope.errorMessageForAnyLocation = errorMessageForAnyLocation;
    $scope.location = location;
  }

});
