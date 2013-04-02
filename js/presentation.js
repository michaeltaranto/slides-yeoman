(function() {
	document.addEventListener('DOMContentLoaded', function() {
		bespoke.vertical.from('article');

      	var video = document.getElementById("slate");
        if (video) {
        	video.playbackRate = 3.0;
        	video.muted = true;
        	video.addEventListener("mouseover", function() {
        		video.paused ? video.play() : video.pause();
        	});
        }
	});
}());