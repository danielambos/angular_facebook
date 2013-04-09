'use strict';

/* Facebook Services */

angular.module('fbService', ['ngResource']).

    factory('$facebook', function($rootScope, $q) {

    	var appId 		= "Facebook appId",
    		channelUrl 	= "Url of your appId";

		FB.init({
			appId      : appId,
			channelUrl : channelUrl,
			status     : true,
			cookie     : true,
			xfbml      : true
		});

		/* If needed you can set the height of your app in init

		window.fbAsyncInit = function() {

	        FB.Canvas.setSize({
	            height: 1000
	        });

	        FB.Canvas.getPageInfo(function(info) {
	            FB.Canvas.setSize();
	        })
	    }

	    */

		return {

			loginStatus : function() {

				var resp = $q.defer();

				FB.getLoginStatus(function (response) {
					
					if(!$rootScope.$$phase) {
						$rootScope.$apply(function() {
					        resp.resolve(response);
					    });
					}else{
						resp.resolve(response);
					}

				})	

				return resp.promise;

			},
			login : function() {

				var resp = $q.defer();

				FB.login(function (response) {

					if(response.authResponse) {

						$rootScope.$apply(function() {
							resp.resolve(response);
						});

					} else {
						
						$rootScope.$apply(function(){
							resp.reject();
						});

					}

				}, {scope: 'email'});

				return resp.promise;

			},
			api: function(resource) {

				var resp = $q.defer();

				FB.api(resource, function(response){
					
					$rootScope.$apply(function(){
						resp.resolve(response);
					});

				});

				return resp.promise;

			},
			getFriends: function() {

				var resp = $q.defer();

				FB.api('/me/friends', function(response){
					
					$rootScope.$apply(function(){
						resp.resolve(response);
					});

				});

				return resp.promise;

			},
			getAlbums: function() {

				var resp = $q.defer();

				FB.api('/me/albums', function(response){
					
					$rootScope.$apply(function(){
						resp.resolve(response);
					});

				});

				return resp.promise;

			},
			getAlbumName: function(album_id){

				var resp = $q.defer();

				FB.api('/' + album_id +'?fields=name', function(response){
					
					$rootScope.$apply(function(){
						resp.resolve(response);
					});

				});

				return resp.promise;

			},
			getPhotos: function(album_id){

				var resp = $q.defer();

				FB.api('/' + album_id + '/photos?fields=picture,source&limit=500', function(response){
					
					$rootScope.$apply(function(){
						resp.resolve(response);
					});

				});

				return resp.promise;

			},
			savePhoto: function(url, message) {

				var resp = $q.defer();

				FB.api('/me/photos', 'post', {
					message: message,
					url: url
				}, function(response){
					$rootScope.$apply(function(){
						resp.resolve(response);
					});
				});

				return resp.promise;

			},
			sendRequest: function(title, message, user_ids) {

				var resp = $q.defer();

				FB.ui({
					method: 'apprequests',
					title: title,
					message: message,
					to: user_ids
				}, function(response){

					$rootScope.$apply(function(){
						resp.resolve(response);
					});

				});

				return resp.promise;

			}

		}

	});