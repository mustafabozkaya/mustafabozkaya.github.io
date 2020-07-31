		$(document).ready(function() {

		
		// Setting Up Our Variables
		var $filter;
		var $container;
		var $containerClone;
		var $filterLink;
		var $filteredItems
		
		$filter = $('.filter li.active a').attr('class');
		$filterLink = $('#filter li a');
		$container = $('ul.filterable-grid');
		$containerClone = $container.clone();
		
		$('ul#filter>li a').click(function(e) 
		{
			$('ul.filter li').removeClass('active');
			$filter = $(this).attr('class').split(' ');
			
			$(this).parent().addClass('active');
			
			if ($filter == 'all') {
				$filteredItems = $containerClone.find('li'); 
			}
			else {
				$filteredItems = $containerClone.find('li[data-type~=' + $filter + ']'); 
			}
			
			$('ul.filterable-grid').quicksand($filteredItems, 
			{
				duration: 750,
				easing: 'swing',
				adjustHeight: 'dynamic' 
			});
					
		});

	});
	
	
	$(document).ready(function(){
		$('.carousel').carousel({
			interval: 2000
		});
	});
	
	
	$(document).ready(function(){
		var width = jQuery(window).width();
		if(width > 767){
			$('#carousel').elastislide({
				imageW: 200,
				margin: 0,
				border: 0
			});
		}else{
			$('#carousel').elastislide({
				imageW: 310,
				margin: 0,
				border: 0
			});
		}

		$('.nav-toggole').click(function(){
				$('#phone-menu').slideToggle(600);
		});
	});
	$(document).ready(function() {
		$('.main-nav').onePageNav();
	});

	$(document).ready(function(){
		$(".scroll").click(function(event){

			event.preventDefault();

			var full_url = this.href;
			var parts = full_url.split("#");
			var trgt = parts[1];
			var target_offset = $("#"+trgt).offset();
			var target_top = target_offset.top - 70;
			$('html, body').animate({scrollTop:target_top}, 900);
		});
	});

	$(document).ready(function ($) {
		$('#formSubmit').click(function(){ 
			var error = false;

			var name = $('input#formName').val(); 
			if(name == "" || name == " ") {
				$('#error-name').fadeIn('slow');
				error = true;
			}else{
				$('#error-name').fadeOut('slow');
			}

			var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;
			var email = $('input#formEmail').val();
			if (email == "" || email == " ") {
				$('#error-email').fadeIn('slow');
				error = true;
			}else if (!email_compare.test(email)) {
				$('#error-email').fadeIn('slow');
				error = true;
			}else{
				$('#error-email').fadeOut('slow');
			}

			var message = $('textarea#message').val();
			if(message == "" || message == " ") {
				$('#error-sms').fadeIn('slow');
				error = true;
			}else{
				$('#error-sms').fadeOut('slow');
			}

			if(error == false){
				$.post("mail.php", $("#contactForm").serialize(),function(result){
					if(result == 'sent'){
						$('#contactForm').slideUp('slow');
						$('#success').slideDown('slow');
					}else{
						$('#failed').fadeIn('slow');
					}
				});
			}

			return false;
		});
	});

	$(document).ready(function(){
		$("#phone-menu select").change(function(event) {

			event.preventDefault();
			jQuery('#phone-menu').slideToggle(400);
			var full_url = $(this).find("option:selected").val();
			var parts = full_url.split("#");
			var trgt = parts[1];
			var target_offset = $("#"+trgt).offset();
			var target_top = target_offset.top - 70;
			$('html, body').animate({scrollTop:target_top}, 1400);
			
		});
	});

	$(document).ready(function(){"use strict";

		var map_lat = 39.173634; 	// add your location Latitude
		var map_lang = -96.7; 		// add your location Longitude

		var tlat = map_lat - 0.3;
		var tlang = map_lang + 1.9;

		var map;

		var twidth = $(window).width();

		if(twidth < 700)
		{
			map = new GMaps({
				disableDefaultUI: true,
				scrollwheel: false,
				el: '#map',
				lat: map_lat,
				lng: map_lang
			});

			map.addMarker({
			  lat: map_lat,
			  lng: map_lang
			});
		}else{
			map = new GMaps({
				disableDefaultUI: true,
				scrollwheel: false,
				el: '#map',
				lat: tlat,
				lng: tlang
			});
		}


		map.drawOverlay({
			lat: map.getCenter().lat(),
			lng: map.getCenter().lng(),
			layer: 'overlayLayer',
			content: '<div class="overlay"></div>',
			verticalAlign: 'bottom',
			horizontalAlign: 'center'
		});   
	});

	function workShow(link)
	{
		$('#work-view').css('display','block');
		var full_url = '#work-view';
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top - 70;
		$('html, body').animate({scrollTop:target_top}, 1400);
		
		$('#work-view').slideUp(1000, function(){
				$(this).load(link,function(){
					$(this).slideDown(1000);
				});
			});
		
	}

	
	$( "a.cross-button" ).live('click',function() {
		var full_url = '#aligncenter';
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top - 90;
		$('html, body').animate({scrollTop:target_top}, 1400);
		
		$("#work-view").slideUp(1000);
	});
	

$(document).ready(function(){
    var options = {
        autoPlay: true,
        nextButton: true,
        prevButton: true,
        preloader: true,
        navigationSkip: false
    };
    var sequence = $("#sequence").sequence(options).data("sequence");

    sequence.afterLoaded = function(){
        $(".sequence-prev, .sequence-next").fadeIn(500);
    }
});
//Parallax/
$(window).load(function(){
	$('#feature').parallax('50%',.2);
	$('#anotherClient').parallax('50%',.2);
	$('#client').parallax('50%',.2);
	$('.clientSpece').parallax('50%',.2);
	$('.clientSpece_a').parallax('50%',.2);
});