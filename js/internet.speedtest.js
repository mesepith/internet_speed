
(function($) {
    $.fn._speedTest = function(options) {
		console.log("options");
		console.log(options);
        function foo(){
            var stest = $.extend({
                    fileSize: null,
                    fileType: null,
                    fileUrl: null,
                    waitingText: null,
                    errorText: null

                }, options),
                duration, download, startTime, endTime, bitsLoaded,cacheBuster,speedMbps,speedKbps,speedBps,p;

                // TODO: add more types to handle for download
                if (stest.fileType == "text") {
                    download = new Document();
                } else if (stest.fileType == "image") {
                    download = new Image();
                }

                if (stest.errorText) {
                    download.onerror = function(err, msg) {
                        $(this).text(stest.errorText);
                    };
                } //error if

                startTime = (new Date()).getTime();
                console.log(startTime);
                cacheBuster = "?spdt=" + startTime;
                
                console.log("cacheBuster");
                console.log(cacheBuster);
                
                download.src = stest.fileUrl + cacheBuster;
                var count = 0;
                 p = function see(){
                    // TODO: change the calculation to handle the error managment
                   endTime = (new Date()).getTime();
                   console.log(endTime);
                   duration = (endTime - startTime) / 1000;
                   console.log(duration);
                   bitsLoaded = stest.fileSize * 8;
                   speedBps = (bitsLoaded / duration).toFixed(2);
                   console.log(speedBps);
                   speedKbps = (speedBps / 1024).toFixed(2);
                   console.log(speedKbps);
                   speedMbps = (speedKbps / 1024).toFixed(2);
                   console.log("final speed : " + speedMbps);
                   count++;
					 console.log("count");
					 console.log(count);
                   return speedMbps;
               };
                return p;
                
        }// end of foo

		var numb = 0;
        return this.each(function() {
			console.log("thisz");
			console.log(this);
			numb++;
			console.log("numb");
			console.log(numb);
            //TODO: remove too many variable names
            var g = foo();
            // TODO: make the speed extension as a variable to fit user needs
            $(this).text(g).append("&nbsp; Mbps");
            
            
            
            console.log("g");
            console.log(g);
        }); //end of for each function

    }; //end of the main function
}(jQuery));
