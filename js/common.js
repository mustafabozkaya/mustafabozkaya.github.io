	$(document).ready(function(){
		$('.nav-toggole').click(function(){
			$('#phone-menu').slideToggle(600);
		});
	});
	
	$(document).ready(function(){
		$("#phone-menu select").change(function(e) {
			e.preventDefault();
			window.location = $(this).find("option:selected").val();
		});
	});