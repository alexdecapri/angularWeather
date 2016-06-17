app.factory('weatherService', function($http, $q) {

  function getWeather(location) {
    var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' +
			encodedLocation +
			'&units=metric' +
			'&appid=d894acc28f662e400190b627c986910c';
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: url
    }).then(function(res) {
      // console.log('res.data', res.data);
      deferred.resolve(res.data);
    }, function(err) {
      deferred.reject({
        message: 'Unable to fetch the weather forecast!'
      });
    });

    return deferred.promise;
  }

  function weatherSummery(temperature) {
    switch(true) {
      case temperature > 30:
        return 'It is hot outside!';
      case temperature > 20:
        return 'It is warm outside!';
      case temperature > 10:
        return 'It is chilly outside!';
      case temperature > 0:
        return 'It is cold outside!';
      case temperature <= 0:
        return 'It is freezing cold outside!';
    }
  }

  return {
    getWeather: getWeather,
    weatherSummery: weatherSummery
  };

});
