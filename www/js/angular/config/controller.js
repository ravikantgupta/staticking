angular.module('ControllerModule',[])
.controller('HomeCtrl',function($scope,Country){
	Country.getCountry().then(function(data){
		$scope.countrys=data;
		console.log(data);
	});
})
.controller('PakegeCtrl',function($scope,Pakege){
	Pakege.getPakege().then(function(data){
		$scope.pakeges=data;
		
	});
})