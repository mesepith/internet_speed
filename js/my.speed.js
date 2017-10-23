function myspeed(options) {
		console.log("options");
		console.log(options);
        
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
                download.src = stest.fileUrl + cacheBuster;
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
                   console.log(speedMbps);
                   return speedMbps;
               };
                return p;
                
                for(var i=0; i<10; i++){
					var g = foo();
            // TODO: make the speed extension as a variable to fit user needs
					$(this).text(g).append("&nbsp; Mbps");
					
					console.log("g");
					console.log(g);
				}
       
        
	}
