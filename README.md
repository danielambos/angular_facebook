Angular Facebook
================

Angular Facebook model, with commons services, based in promise events.

## Initializing js skd api.

You need to insert the javascript sdk facebook synchronously:

Insert an script tag to your master view with src="//connect.facebook.net/en_US/all.js", change the language en_US to your default if needed, please visit https://developers.facebook.com/docs/reference/javascript/ for more information about Facebook javascript sdk.

## Usage

To use the services you have to include de $facebook service dependencies to your controller or other model and wait the then() callback, see the exemple:

	function loginCtrl($scope, $facebook) {
	
		$scope.login = function() {
	
			$facebook.login().then(function(response) {
				
				console.log(response)
	
			})
	
		}
	
	}
