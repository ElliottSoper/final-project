$(document).on("ready", function(){
	
	var modalNew = function(state, htmlString){
		// hide all content first
		$('.modal-content').hide();
		if(state === "open"){
			// get htmlString, and display it before opening
			$('#modal-content-' + htmlString).show();

	   $('.modal-wrapper').fadeIn(function(){
	   	$("body").addClass("modal-on")
	   });
	} else if (state === "close"){
	   $('.modal-wrapper').fadeOut(function(){
	   	$("body").removeClass("modal-on")
	   });
	  }
	};

	$(".js-modal-open").on("click", function(){
		// get data-content attribute
		// which will tell us which modal-content to use
		var modalContent = $(this).data('modal-content');
		console.log(modalContent);
		modalNew("open", modalContent);
	});

	$(".js-modal-close").on("click", function(){
		modalNew("close");
	});

});


