//menu icon animation
$("#wrapper").click( function() {
	$(".menu").toggleClass("close");
});

//logo animation
$('#info-click').click(function() {
    if($('#info-par').is(':visible')){
        $('#logo').css({'transform' : 'rotate(90deg)', });
    } else {
        $('#logo').css({'transform' : 'rotate(0deg)', });
    };         
   
    $('#info-par').slideToggle('slow')
    });

//background slider
var images=['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];
var c=0;
setInterval(function(){
   c++;
   if(c==4){
    c=0;
  }
  document.body.style.backgroundImage = 'url('+images[c]+')';
},6000);

//toggle menu slidebar
$('#menu-click').click(function() {
    $('.toggle-menu').toggleClass('menu-active');
    if($('.toggle-menu').hasClass('menu-active')) {
        $('#info-par').slideUp();
        $('#logo').css('transform', 'rotate(90deg)' );
    }
});
