// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/IMG_0492.JPG", 
	 		 "images/IMG_0493.JPG",
			 "images/IMG_0494.png"
	 			], 	{duration: 3200, fade: 1300});
		});
})