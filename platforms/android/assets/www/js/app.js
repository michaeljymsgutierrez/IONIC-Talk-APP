var app = angular.module('talktomyface', ['ionic','ngCordova'])

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});


app.controller('PredictionController', function ($scope,$timeout,$window) {

	var predictionList = [
		"Oo, ang itinuturo ng mga senyales",
		"Oo",
		"Sagot hazy -_- subukan ulit",
		"Walang kaduda duda",
		"Ayon sa aking nakalap, Hindi",
		"Ayon sa aking nakikita, Oo",
		"Maaari kang dumepende dito",
		"Magpokus at itanong ulit",
		"Hindi maganda ang kalalabasan",
		"Napag desisyonan na",
		"Mabuting di na muna sabihin sayo",
		"Talagang nakakapag duda",
		"Oo,Sigurado",
		"Ito ay tiyak na",
		"Hindi masasabi sa ngayon",
		"Kadalasan Oo",
		"Itanong ulit sa susunod na pag kakataon",
		"Ang aking sagot ay hindi",
		"Mukhang maganda ang kalalabasan",
		"Wag kang umasa"
	];

	$scope.prediction = 'Tanungin mo ako ng kahit "ANO" ';
   

    
    
    $scope.answered=true;
    
    
    $scope.question=function(){
        $scope.answered=false;
        //Set some -_- weird animations
        $scope.prediction="Tinatanong pa ang manghuhula..."; 
        
        $timeout(function(){
                //random values now can be outputted
                
                $scope.prediction=predictionList[Math.floor(Math.random() * predictionList.length)];
                $scope.answered=true;
        }),2000;
        
        
        if($window.cordova){
            
            var src;
            
            if(ionic.Platform.is('android')){
                src='/android_asset/wwww/sound/laugh.mp3';
                ionic.Platform.ready(function(){
                    $scope.media= new $window.Media(src);
                    $scope.media.play();


                });
            }
            

            
            
        }
        else{
         
            var aud = document.getElementById('sound');
            aud.play();   
        }

 
    };
    
    
    
    



});

