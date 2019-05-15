$(function() {

	$('#tabs li').click(function(){
		var thisClass = this.className.slice(0,2);
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.t3').hide();
		$('div.' + thisClass).fadeIn(500);
		$('#tabs li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('li.t1').click();

	$('.bxslider').bxSlider({
    mode: 'fade',
    captions: 'false'
  });


	// $(".nav-mob").hide();
	// $(".menu").click(function(){
	// 	$(".nav").show();
	// 	$(this).removeClass("open");
	// 	$(this).addClass("open");
	// });
	// $(".menu.open").click(function(){
	// 	$(".nav").hide();
	// 	$('.menu').removeClass("open");
	// });


});
