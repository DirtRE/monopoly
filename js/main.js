$(document).ready(function(){
	/////////////////////////////////////////////////////////////////////////////////////
    
    $(".stat_bg").css("width", 0);
	
    /////////////////////////////////////////////////////////////////////////////////////
    $.fn.equivalent = function (){
        var $blocks = $(this),
            maxH    = $blocks.eq(0).height(); 
        $blocks.each(function(){
            maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
        });
        $blocks.height(maxH);
    };
    $('.nav').equivalent();
    ///////////////////////////////////////////////////////////////////////////////////////
	// Modal
	$(function() {
            $('.modal_button').bind('click', function(e) {
				var modal= $(this).attr("href");
                e.preventDefault();
                $(modal).bPopup({
				closeClass:'close',
				modalClose: true,

			});
        });
    });
	////////////////////////////////////////////////////////////////////////////////////////////
	$(".play_button").children(".play").hover(
		function(){		
			$(".play_button").addClass("in");
			$(".play_button").removeClass("out");
			$(".play_button").addClass("on");
		},
		function(){
			
		}
	);
	$(".play_button").hover(
		function(){		
			
			
		},
		function(){
			$(".play_button").addClass("out");
			$(".play_button").removeClass("in");
			$(".play_button").removeClass("on");
		}
	);
	$(".spincrement").spincrement({
		from: 0,
		thousandSeparator: "",
		duration: 3000        
	});
	$('.results').find(".reg").each(function(i) {
		var w = $('.results').find(".reg").find(".stat_line").width()/100*$('.results').find(".reg").eq(i).find(".stat_bg").data("width");
		console.log(w);
		$('.results').find(".reg").eq(i).find(".stat_bg").css("width",w);
	});
////////////////////////////////////////////////////////////////////////////////////////////////
if($('ul').is(".bxslider")){
    $('.bxslider').bxSlider({
      nextText:'',
      prevText:'',
      auto: true,
      pause: 3000,
    });
  }
////////////////////////////////////////////////////////////////////////////////////////////////
	$(".hide_menu").click(function(){
		$(".head_menu").find("ul").slideToggle("slow");
		$("html, body").animate({
			scrollTop: $(".head_menu").offset().top + "px"
		}, {
			duration: 700
		});
	});
	$(".formbutton").click(function(){	
		//$(this).next(".downform").slideToggle("slow");
		if($(this).hasClass("buttonI")){
			$(".enter_form").slideUp("slow");
			$(".reg_form").slideToggle("slow");
			$(".enter_form").css("z-index",101);
			$(".reg_form").css("z-index",102);
		}
		if($(this).hasClass("buttonII")){
			$(".enter_form").slideToggle("slow");
			$(".reg_form").slideUp("slow");
			$(".enter_form").css("z-index",102);
			$(".reg_form").css("z-index",101);
		}
	});
	
});
$(window).load(function(){
	$(".layout").css("min-height", $(window).height());
	var footer = $("footer").outerHeight(true);
	$(".layout").css("margin-bottom", footer*-1);
	$(".footer-push").css("height", footer);
});
$(window).resize(function(){
	$(".layout").css("min-height", $(window).height());
	var footer = $("footer").outerHeight(true);
	$(".layout").css("margin-bottom", footer*-1);
	$(".footer-push").css("height", footer);
});


