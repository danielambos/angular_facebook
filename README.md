angular_facebook
================

Angular Facebook model, with commons services, based in promise events. To do that you need to insert the javascript sdk facebook synchronously.

Insert 

<script src="//connect.facebook.net/en_US/all.js"></script>

in your master view, change the language en_US to your default if needed, please visit https://developers.facebook.com/docs/reference/javascript/ for more information about Facebook javascript sdk.

To use the services you have to include de $facebook service dependencies to your controller or other model and wait the then() callback, see the exemple:

function loginCtrl($scope, $facebook) {

	$scope.login = function() {

		$facebook.login().then(function(response) {
			
			console.log(response)

		})

	}

}