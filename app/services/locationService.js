app.service('locationService', function($http, $q) {

  this.getLocation = function() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: 'http://ipinfo.io'
    }).then(function(res) {
      // console.log('res.data: ', res.data);
      deferred.resolve(res.data.city);
    }, function(err) {
      deferred.reject({
        message: 'Unable to fetch the location!'
      });
    });

    return deferred.promise;
  };

});
