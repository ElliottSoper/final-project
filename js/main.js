//modal


// Scrolling JS
$(document).on("ready", function(){
	var navHeight = $(".nav-wrapper").outerHeight(true);

	$("body").css("margin-top", navHeight);

	// default setup	
	// show first image by default
	// slideshow JS for starters
	$('img.starters').eq(0).show();
	// set the current SlidNum
	var currentSlideNum = 0;
	// how many slides does this have?
	var slideCount = $('img.starters').length;

	var doSlidesStarters = function(direction){
		// do slide stuff
		// hide currentSlideNum
		$('img.starters').eq(currentSlideNum).fadeOut();
		if (direction === 'next'){
			// increase currentSlideNum
			// because we don't use var below, it updates the global currentSlideNum
			currentSlideNum = currentSlideNum + 1;		
			console.log(currentSlideNum);
			// if i'm at the end of the slideshow, start at 0 again
			if(currentSlideNum === slideCount){
				currentSlideNum = 0;
			}
		} else {
			// Previous slide
			// decrease current slide
			if(currentSlideNum === 0){
				currentSlideNum = slideCount -1;
			} else {
				currentSlideNum = currentSlideNum -1;
			}
			console.log(currentSlideNum);
		}
		// show the new current slide
		$('img.starters').eq(currentSlideNum).fadeIn();
	};

	// invoke doSlides() via a click event on $('img'),
	$('img.starters, .js-pause-starters').on('click', function(){
		clearInterval(autoPlay);
	});
	// create an interval
	// stuff this into a button click event
	// when you do this, note that var autoPlay
	// is in the local scope (you'll need to hoist
	// it to global scope so your pause button can clear it)
	$('.js-play-starters').on('click', function(){
		autoPlay = setInterval(function(){			
			doSlidesStarters('next');
		}, 1500);
		console.log(autoPlay);
	});
	$('.js-reverse-starters').on('click', function(){
		autoPlay = setInterval(function(){			
			doSlidesStarters('reverse');
		}, 1500);
		console.log(autoPlay);
	});
	$('.js-pause-starters').on('click', function(){
		clearInterval(autoPlay);
	});
	



	// slideshow JS for entrees
	$('img.entrees').eq(0).show();
	// set the current SlidNum
	var currentSlideNum = 0;
	// how many slides does this have?
	var slideCount = $('img.entrees').length;

	var doSlidesEntrees = function(direction){
		// do slide stuff
		// hide currentSlideNum
		$('img.entrees').eq(currentSlideNum).fadeOut();
		if (direction === 'next'){
			// increase currentSlideNum
			// because we don't use var below, it updates the global currentSlideNum
			currentSlideNum = currentSlideNum + 1
			console.log(currentSlideNum);
			// if i'm at the end of the slideshow, start at 0 again
			if(currentSlideNum === slideCount){
				currentSlideNum = 0;
			}
		} else {
			// Previous slide
			// decrease current slide
			if(currentSlideNum === 0){
				currentSlideNum = slideCount -1;
			} else {
				currentSlideNum = currentSlideNum -1;
			}
			console.log(currentSlideNum);
		}

		// show the new current slide
		$('img.entrees').eq(currentSlideNum).fadeIn();

	};
	// invoke doSlides() via a click event on $('img'),
	$('img.entrees, .js-pause-entrees').on('click', function(){
		clearInterval(autoPlay);
	});
	// create an interval
	// stuff this into a button click event
	// when you do this, note that var autoPlay
	// is in the local scope (you'll need to hoist
	// it to global scope so your pause button can clear it)
	$('.js-play-entrees').on('click', function(){
		autoPlay = setInterval(function(){
			doSlidesEntrees('next');
		}, 1500);
		console.log(autoPlay);
	});

	$('.js-reverse-entrees').on('click', function(){
		autoPlay = setInterval(function(){
			doSlidesEntrees('reverse');
		}, 1500);
		console.log(autoPlay);
	});

	$('.js-pause-entrees').on('click', function(){
		clearInterval(autoPlay);
	});



	// slideshow JS for desserts
	$('img.desserts').eq(0).show();
	// set the current SlidNum
	var currentSlideNum = 0;
	// how many slides does this have?
	var slideCount = $('img.desserts').length;

	var doSlidesDesserts = function(direction){
		// do slide stuff
		// hide currentSlideNum
		$('img.desserts').eq(currentSlideNum).fadeOut();
		if (direction === 'next'){
			// increase currentSlideNum
			// because we don't use var below, it updates the global currentSlideNum
			currentSlideNum = currentSlideNum + 1
			console.log(currentSlideNum);
			// if i'm at the end of the slideshow, start at 0 again
			if(currentSlideNum === slideCount){
				currentSlideNum = 0;
			}
		} else {
			// Previous slide
			// decrease current slide
			if(currentSlideNum === 0){
				currentSlideNum = slideCount -1;
			} else {
				currentSlideNum = currentSlideNum -1;
			}
			console.log(currentSlideNum);
		}
		// show the new current slide
		$('img.desserts').eq(currentSlideNum).fadeIn();
	};

	// invoke doSlides() via a click event on $('img'),
$('img.desserts, .js-pause-desserts').on('click', function(){
		clearInterval(autoPlay);
	});
	// create an interval
	// stuff this into a button click event
	// when you do this, note that var autoPlay
	// is in the local scope (you'll need to hoist
	// it to global scope so your pause button can clear it)
	$('.js-play-desserts').on('click', function(){
		autoPlay = setInterval(function(){
			doSlidesDesserts('next');
		}, 1500);
		console.log(autoPlay);
	});
	$('.js-reverse-desserts').on('click', function(){
		autoPlay = setInterval(function(){
			doSlidesDesserts('reverse');
		}, 1500);
		console.log(autoPlay);
	});
	$('.js-pause-desserts').on('click', function(){
		clearInterval(autoPlay);
	});


	// JS for nav
	$(".nav-main a").on("click", function(e){
		console.log(e);
		e.preventDefault();

		$('.nav-main a').removeClass("is-current");
		$(this).addClass("is-current");

		console.log($(this).attr("href"));
		var whereToScroll = $(this).attr("href");
		
		$.scrollTo(whereToScroll, {
			duration: 800,
			offset: -navHeight,
		});
	});
});


