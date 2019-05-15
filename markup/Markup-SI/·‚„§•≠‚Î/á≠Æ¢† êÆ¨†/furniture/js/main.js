$('document').ready(function () {
  $('div.image').hover(function(){
    $(this).toggleClass('active');
  });
//
  $('.top').hover(function(){
    $(this).toggleClass('active');
    $(this).children().toggleClass('active');
  });
//
$('#menu-tabs li').click(function () {
  var abc = this.className.slice(0, 2);
  $('div.t1').hide();
  $('div.t2').hide();
  $('div.t3').hide();
  $('div.' + abc).fadeIn();
  $('#menu-tabs li').removeClass('active');
  $(this).addClass('active');
  return false;
});
$('li.t1').click();
//
$('#menu-tabs li').click(function () {
  var abc = this.className.slice(0, 2);
  $('div.s1').hide();
  $('div.s2').hide();
  $('div.s3').hide();
  $('div.s4').hide();
  $('div.' + abc).fadeIn();
  $('#menu-tabs li').removeClass('active');
  $(this).addClass('active');
  return false;
});
$('li.s1').click();

//
  $('.bxslider').bxSlider({
      captions: true
    });
});
