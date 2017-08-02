angular.module('myApp')
.controller('galleryCtrl',function($scope){
	alert("helloooooooo");
	$scope.image="assets/images/g1.jpg";
		var i = 0;
		var images = ["assets/images/g1.jpg","assets/images/g2.jpg","assets/images/g3.jpg"];
		$scope.left = function(){
			if(i == 0)
			{
				i = images.length-1;
				$scope.image=images[i];
			}
			else{
				i--;
				$scope.image=images[i];
				
			}
		}
		$scope.right=function(){
			if(i==images.length-1){
				i=0;
				$scope.image=images[i];
			}
			else{
				i++;
				$scope.image=images[i];
			}
		}
	})
