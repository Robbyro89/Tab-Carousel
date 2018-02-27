// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .

$(document).ready(function(){

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

/*
$(document).ready(function() {

	//rotation speed and timer
	var speed = 5000;
	var run = setInterval('rotate()', speed);

	//grab the width and calculate left value
	var item_width = $('#slides li').outerWidth();
	var left_value = item_width * (-1);

    //move the last item before first item, just in case user click prev button
	$('#slides li:first').before($('#slides li:last'));

	//set the default item to the correct position
	$('#slides ul').css({'left' : left_value});

    //if user clicked on prev button
	$('#prev').click(function() {

		//get the right position
		var left_indent = parseInt($('#slides ul').css('left')) + item_width;

		//slide the item
		$('#slides ul').animate({'left' : left_indent}, 200,function(){

            //move the last item and put it as first item
			$('#slides li:first').before($('#slides li:last'));

			//set the default item to correct position
			$('#slides ul').css({'left' : left_value});

		});

		//cancel the link behavior
		return false;

	});


    //if user clicked on next button
	$('#next').click(function() {

		//get the right position
		var left_indent = parseInt($('#slides ul').css('left')) - item_width;

		//slide the item
		$('#slides ul').animate({'left' : left_indent}, 200, function () {

            //move the first item and put it as last item
			$('#slides li:last').after($('#slides li:first'));

			//set the default item to correct position
			$('#slides ul').css({'left' : left_value});

		});

		//cancel the link behavior
		return false;

	});

	//if mouse hover, pause the auto rotation, otherwise rotate it
	$('#slides').hover(

		function() {
			clearInterval(run);
		},
		function() {
			run = setInterval('rotate()', speed);
		}
	);

});

//a simple function to click next link
//a timer will call this function, and the rotation will begin :)
function rotate() {
	$('#next').click();
}
*/
// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});
