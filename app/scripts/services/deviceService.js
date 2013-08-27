/**
 * This service provides functionality related to the device, and uses some
 * of the PhoneGap functionality
 * 
 * @param  {[type]} $location [description]
 * @param  {[type]} $timeout  [description]
 * @return {[type]}           [description]
 */
app.factory('deviceService', function ($q) {

	return{
		/**
		 * Returns reather the app is running on a device or a non-device browser
		 * @return {Boolean} [description]
		 */
		isDevice: function(){
		 if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		        return true;
		    }else{
		    	return false;
		    }
		},



		/**
		 * Enables tap events to behave like browser-click events,
		 * you should run this function only once after the device is 
		 * ready.
		 * @return {[type]} [description]
		 */
	    enableTapEvents:function () {
	        var mouseEventTypes = {
	            touchstart: "mousedown",
	            touchmove: "mousemove",
	            touchend: "mouseup",
	            tap: "click"
	        };

	        for (originalType in mouseEventTypes) {
	            document.addEventListener(originalType, function (originalEvent) {
	                event = document.createEvent("MouseEvents");
	                touch = originalEvent.changedTouches[0];
	                event.initMouseEvent(mouseEventTypes[originalEvent.type], true, true,
	                    window, 0, touch.screenX, touch.screenY, touch.clientX,
	                    touch.clientY, touch.ctrlKey, touch.altKey, touch.shiftKey,
	                    touch.metaKey, 0, null);
	                originalEvent.target.dispatchEvent(event);
	            });
	        }
	    },



		/**
		 * [Exits the app - Androrid only]
		 * @return {[type]} [description]
		 */
		exitApp: function(){
			navigator.app.exitApp();
		},


		/**
		 * [Disables the back-button - Android only]
		 * @return {[type]} [description]
		 */
		disableBackButton:function(){
	        document.addEventListener("backbutton", function (e) {
	            e.preventDefault();
	        },false);
		},




		getUserLang: function(){
			var deferred = $q.defer();
			try{
				  navigator.globalization.getPreferredLanguage(function (lang) {
				  	deferred.resolve(lang);
				  });
	           }catch(ex){
	           		deferred.reject(ex);
	           }
	          
              return deferred.promise;
		} 

	}
});