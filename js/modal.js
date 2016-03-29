//Starters
//Avocado Caprese Salad
$(document).on("ready", function(){
	var modal = function(state, htmlString){
		if(state === "open"){
	   $('.modal-wrapper-acs').fadeIn(function(){
	   	$("body").addClass("modal-on")
	   	$(".modal-content-acs").html(htmlString);
	   });
	} else if (state === "close"){
	   $('.modal-wrapper-acs').fadeOut(function(){
	   	$("body").removeClass("modal-on")
	   });
	  }
	};

	$("#js-modal-open-acs").on("click", function(){
		modal("open");
	});

	$(".js-modal-close-acs").on("click", function(){
		modal("close");
	});

});


//Buffalo Dip
$(document).on("ready", function(){
	var modal = function(state, htmlString){
		if(state === "open"){
	   $('.modal-wrapper-bd').fadeIn(function(){
	   	$("body").addClass("modal-on")
	   	$(".modal-content-bd").html(htmlString);
	   });
	} else if (state === "close"){
	   $('.modal-wrapper-bd').fadeOut(function(){
	   	$("body").removeClass("modal-on")
	   });
	  }
	};

	$("#js-modal-open-bd").on("click", function(){
		modal("open");
	});

	$(".js-modal-close-bd").on("click", function(){
		modal("close");
	});

});

//Corn
$(document).on("ready", function(){
	var modal = function(state, htmlString){
		if(state === "open"){
	   $('.modal-wrapper-corn').fadeIn(function(){
	   	$("body").addClass("modal-on")
	   	$(".modal-content-corn").html(htmlString);
	   });
	} else if (state === "close"){
	   $('.modal-wrapper-corn').fadeOut(function(){
	   	$("body").removeClass("modal-on")
	   });
	  }
	};

	$("#js-modal-open-corn").on("click", function(){
		modal("open");
	});

	$(".js-modal-close-corn").on("click", function(){
		modal("close");
	});

});

//Hummus
$(document).on("ready", function(){
	var modal = function(state, htmlString){
		if(state === "open"){
	   $('.modal-wrapper-hummus').fadeIn(function(){
	   	$("body").addClass("modal-on")
	   	$(".modal-content-hummus").html(htmlString);
	   });
	} else if (state === "close"){
	   $('.modal-wrapper-hummus').fadeOut(function(){
	   	$("body").removeClass("modal-on")
	   });
	  }
	};

	$("#js-modal-open-hummus").on("click", function(){
		modal("open");
	});

	$(".js-modal-close-hummus").on("click", function(){
		modal("close");
	});

});


//Entrees
//Chicken Veggie Skillet
$(document).on("ready", function(){
	var modal = function(state, htmlString){
		if(state === "open"){
	   $('.modal-wrapper-cvs').fadeIn(function(){
	   	$("body").addClass("modal-on")
	   	$(".modal-content-cvs").html(htmlString);
	   });
	} else if (state === "close"){
	   $('.modal-wrapper-cvs').fadeOut(function(){
	   	$("body").removeClass("modal-on")
	   });
	  }
	};

	$("#js-modal-open-cvs").on("click", function(){
		modal("open");
	});

	$(".js-modal-close-cvs").on("click", function(){
		modal("close");
	});

});

//Feta Turkey Bruger
$(document).on("ready", function(){
	var modal = function(state, htmlString){
		if(state === "open"){
	   $('.modal-wrapper-ftb').fadeIn(function(){
	   	$("body").addClass("modal-on")
	   	$(".modal-content-ftb").html(htmlString);
	   });
	} else if (state === "close"){
	   $('.modal-wrapper-ftb').fadeOut(function(){
	   	$("body").removeClass("modal-on")
	   });
	  }
	};

	$("#js-modal-open-ftb").on("click", function(){
		modal("open");
	});

	$(".js-modal-close-ftb").on("click", function(){
		modal("close");
	});

});

//Mustard Lemon Chicken
$(document).on("ready", function(){
	var modal = function(state, htmlString){
		if(state === "open"){
	   $('.modal-wrapper-mlc').fadeIn(function(){
	   	$("body").addClass("modal-on")
	   	$(".modal-content-mlc").html(htmlString);
	   });
	} else if (state === "close"){
	   $('.modal-wrapper-mlc').fadeOut(function(){
	   	$("body").removeClass("modal-on")
	   });
	  }
	};

	$("#js-modal-open-mlc").on("click", function(){
		modal("open");
	});

	$(".js-modal-close-mlc").on("click", function(){
		modal("close");
	});

});

//Shrimp and Grits
$(document).on("ready", function(){
	var modal = function(state, htmlString){
		if(state === "open"){
	   $('.modal-wrapper-sag').fadeIn(function(){
	   	$("body").addClass("modal-on")
	   	$(".modal-content-sag").html(htmlString);
	   });
	} else if (state === "close"){
	   $('.modal-wrapper-sag').fadeOut(function(){
	   	$("body").removeClass("modal-on")
	   });
	  }
	};

	$("#js-modal-open-sag").on("click", function(){
		modal("open");
	});

	$(".js-modal-close-sag").on("click", function(){
		modal("close");
	});

});

//Deserts
//berry-ricotta
$(document).on("ready", function(){
	var modal = function(state, htmlString){
		if(state === "open"){
	   $('.modal-wrapper-br').fadeIn(function(){
	   	$("body").addClass("modal-on")
	   	$(".modal-content-br").html(htmlString);
	   });
	} else if (state === "close"){
	   $('.modal-wrapper-br').fadeOut(function(){
	   	$("body").removeClass("modal-on")
	   });
	  }
	};

	$("#js-modal-open-br").on("click", function(){
		modal("open");
	});

	$(".js-modal-close-br").on("click", function(){
		modal("close");
	});

});

//Chocolate Banana
$(document).on("ready", function(){
	var modal = function(state, htmlString){
		if(state === "open"){
	   $('.modal-wrapper-cb').fadeIn(function(){
	   	$("body").addClass("modal-on")
	   	$(".modal-content-cb").html(htmlString);
	   });
	} else if (state === "close"){
	   $('.modal-wrapper-cb').fadeOut(function(){
	   	$("body").removeClass("modal-on")
	   });
	  }
	};

	$("#js-modal-open-cb").on("click", function(){
		modal("open");
	});

	$(".js-modal-close-cb").on("click", function(){
		modal("close");
	});

});

//Chocolate Mousse
$(document).on("ready", function(){
	var modal = function(state, htmlString){
		if(state === "open"){
	   $('.modal-wrapper-cm').fadeIn(function(){
	   	$("body").addClass("modal-on")
	   	$(".modal-content-cm").html(htmlString);
	   });
	} else if (state === "close"){
	   $('.modal-wrapper-cm').fadeOut(function(){
	   	$("body").removeClass("modal-on")
	   });
	  }
	};

	$("#js-modal-open-cm").on("click", function(){
		modal("open");
	});

	$(".js-modal-close-cm").on("click", function(){
		modal("close");
	});

});

//Baked Apple
$(document).on("ready", function(){
	var modal = function(state, htmlString){
		if(state === "open"){
	   $('.modal-wrapper-ba').fadeIn(function(){
	   	$("body").addClass("modal-on")
	   	$(".modal-content-ba").html(htmlString);
	   });
	} else if (state === "close"){
	   $('.modal-wrapper-ba').fadeOut(function(){
	   	$("body").removeClass("modal-on")
	   });
	  }
	};

	$("#js-modal-open-ba").on("click", function(){
		modal("open");
	});

	$(".js-modal-close-ba").on("click", function(){
		modal("close");
	});

});

