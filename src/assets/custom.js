$(window).load(function () {
	$('.sidemenu').show();
	$('.menu').click(function(){
		$('ion-router-outlet').toggleClass('menu-active');
		$('.bottom-menu').toggleClass('menu-active');	
		$('.menu').toggleClass('active');	
	});
});