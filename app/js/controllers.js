//controllers for the Browse, Favorites, Search, and Gene pages

myApp.controller('BrowseController', function($scope, Data) {
    //load the data from the json file
    $scope.items = {};
	Data.gdb().then(function (response) {
    $scope.items = response.data.comps;
    }, function (error) {
    	console.error(error);
    });    
 	
 	//when a gene is clicked, show its page
    $scope.showDetail = function(item){
        var selectedItem = item;
        Data.selectedItem = selectedItem;
        $scope.ons.navigator.pushPage('gene.html');
    }    
})

myApp.controller('FavesController', function($scope, Data, Favorites) {
    $scope.items = Favorites.items;
 	
 	//when a gene is clicked, show its page
    $scope.showDetail = function(item){
        var selectedItem = item;
        Data.selectedItem = selectedItem;
        $scope.ons.navigator.pushPage('gene.html');
    }    
})

myApp.controller('SearchController', function($scope, Data) {
    $scope.items = {};
	Data.gdb().then(function (response) {
    $scope.items = response.data.comps;
    }, function (error) {
    	console.error(error);
    }); 
    
    $scope.searchText = '';
 	
 	$scope.showDetail = function(item){
        var selectedItem = item;
        Data.selectedItem = selectedItem;
        $scope.ons.navigator.pushPage('gene.html');
    }    
})

myApp.controller('GeneController', function($scope, Data, Favorites) {
    //show data from only clicked gene
    $scope.item = Data.selectedItem; 
    
    //get the image url to display for the favorite, this depends on
    //the feature
    $scope.imgURL = function(item){
    	var selectedItem = item;
    	
    	var index = Favorites.items.indexOf(selectedItem);
    	
    	//if the item is not a favorite
    	if (index < 0) {
    		return "img/e.png";
    	}
    	else { //the item must be a favorite
    		return "img/f.png";
    	}
    }
    
    //changes the favorite and saves the json file
    $scope.changeFavorite = function(item){
    	var selectedItem = item;
    	
    	var index = Favorites.items.indexOf(selectedItem);
    	
    	//if the item is not a favorite, add it to the end of the list
    	if (index < 0) {
    		Favorites.items.push(selectedItem);
    	}
    	else { //the item must be a favorite, so remove it
    		Favorites.items.splice(index, 1);
    	}
    } 
	
	

})