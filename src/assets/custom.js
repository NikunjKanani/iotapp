$(window).load(function () {
	$('.sidemenu').show();
	$('.menu').click(function(){
		$('ion-router-outlet').toggleClass('menu-active');
		$('.bottom-menu').toggleClass('menu-active');	
		$('.menu').toggleClass('active');	
	});
	$('.faqs label').click(function(){
		$(this).parent().toggleClass('active').siblings().removeClass('active');
	});
	function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}});
