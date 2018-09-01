$(document).ready(function () {

$('h2').click(function () {
 	 $(this).toggleClass('red')
	});
$('.overlay-button').click(function () {
 	$('.overlay').show();
	});
$('.popup-close').click(function() {
	$('.overlay').hide();
	});


$('.menu-btn').on('click', function() {
	 $('.main-menu').toggleClass('menu_active');
	 $('.body-main').toggleClass('body-main_active');
	 $('.menu-btn').toggleClass('menu-btn_active');
});


$('.menu-btn').on('click', function() {
	$('.main-menu_spider-logo').toggleClass('main-menu_spider-logo_active');
 });

$('.main-menu_spider-logo').click(function() {
	$('.body-main').removeClass('body-main_active');
	$('.main-menu').removeClass('menu_active');
	$('.menu-btn').removeClass('menu-btn_active');

 });

 });