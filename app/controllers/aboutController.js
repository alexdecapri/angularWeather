app.controller('aboutCtrl', function($scope, locationService, weatherService) {

  init();

  function init() {
    updatePropsForCurrentLocation(false, false, false, {}, '');
    $scope.weatherSummery = weatherService.weatherSummery;
    getWeatherForCurrentLocation();
  }

  function getWeatherForCurrentLocation() {
    $scope.loadingForCurrentLocation = true;

    locationService.getLocation()
      .then(function(city) {
        return weatherService.getWeather(city);
      })
      .then(function(weatherForecastForCurrentLocation) {
        updatePropsForCurrentLocation(false, false, true, weatherForecastForCurrentLocation, '');
      })
      .catch(function(err) {
        updatePropsForCurrentLocation(false, true, false, {}, err.message);
      });
  }

  function updatePropsForCurrentLocation(loadingForCurrentLocation, isErrorForCurrentLocation, isWeatherForCurrentLocation, weatherForecastForCurrentLocation, errorMessageForCurrentLocation) {
    $scope.loadingForCurrentLocation = loadingForCurrentLocation;
    $scope.isErrorForCurrentLocation = isErrorForCurrentLocation;
    $scope.isWeatherForCurrentLocation = isWeatherForCurrentLocation;
    $scope.weatherForecastForCurrentLocation = weatherForecastForCurrentLocation;
    $scope.errorMessageForCurrentLocation = errorMessageForCurrentLocation;
  }

});
