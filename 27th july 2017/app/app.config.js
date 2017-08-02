angular.module('myApp',['ui.router'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('home',{
		url : '/home',
		templateUrl : 'viewpage/home.html'
		//controller : 'homeCtrl'
		})

	.state('about',{
		url : '/about',
		templateUrl : 'viewpage/about.html'
		//controller : 'aboutCtrl'
		})
	
	.state('contact',{
		url : '/contact',
		templateUrl : 'viewpage/contact.html'
		//controller : 'contactCtrl'
		})

	.state('gallery',{
		url : '/gallery',
		templateUrl : 'viewpage/gallery.html',
		controller : 'galleryCtrl'
	})

	$urlRouterProvider.otherwise('/home');
	}])
