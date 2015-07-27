var myApp = angular.module('myApp');

//get the database from json file 
myApp.factory('Data', function ($q, $http) {
	return {
		gdb: function () {
			var deferred = $q.defer(),
          	httpPromise = $http.get('js/datanew.json');
 
        	httpPromise.then(function (response) {
          		deferred.resolve(response);
        	}, function (error) {
          		console.error(error);
        	});
        	return deferred.promise;
      	}
	};
});


myApp.factory('Favorites', function(){
		var favorites = {};
		
		favorites.items = [
		
		];
 
    return favorites;
});