angular.module("ServiceModule",[])
.factory('Country',[
                    '$http',function($http){
                    	return {
                    		getCountry :function(){
                    			var promise=$http.get("http://localhost:8081/controller/show_country")
                    			.then( 			
                    					function(response){
                    						return response.data;
                    					},
                    					function(error){
                    						
                    					}
                    			)
                    			return promise;
                    		}
                    	}
                    }
                    ])
.factory('Pakege',[
                    '$http',function($http){
                    	return {
                    		getPakege :function(){
                    			var promise=$http.get("http://localhost:8081/controller/show_packeges")
                    			.then(function(response){return response.data;},function(error){})
                    			return promise;
                    		}
                    	}
                    }
                    ]);
