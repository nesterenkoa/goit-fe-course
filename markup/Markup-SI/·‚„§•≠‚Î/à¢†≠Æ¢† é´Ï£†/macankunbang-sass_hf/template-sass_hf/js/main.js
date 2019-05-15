$(function() {

	$('.bxslider1').bxSlider({
			auto: true,
			mode: 'vertical',
	  	speed: 500,
		});
	$('.bxslider2').bxSlider({
			auto: true,
			mode: 'fade',
		  speed: 100
		});
	$('#tabs li').click(function(){
		  var thisClass = this.className.slice(0,2);
		  $('div.t1').hide();
		  $('div.t2').hide();
		  $('div.t3').hide();
		  $('div.' + thisClass).fadeIn(1);
		  $('#tabs li').removeClass('active');
		  $(this).addClass('active');
		 });
		 $('#tabs li.t1').click();


});
