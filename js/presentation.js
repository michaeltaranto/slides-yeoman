(function() {
	document.addEventListener('DOMContentLoaded', function() {
		bespoke.from('article');

  	var video = document.getElementById("slate");
    if (video) {
    	video.playbackRate = 10.0;
    	video.muted = true;
    	var playing = false;

    	video.addEventListener("mouseover", function() {
    		video.paused ? video.play() : video.pause();
    	});
    }
	});
}());