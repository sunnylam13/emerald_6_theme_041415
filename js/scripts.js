jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES


//////////////////////////////////////////////////
// FUNCTIONS

function midnightEnable () {
	// for the Midnight JS
	$('nav.mainNav').midnight();
}

function portfolioImageShader042615a () {

	$('section.portfolioUnit').hover(function() {
		// Stuff to do when the mouse enters the element 
		$(this).find('.imgShaderScreen1').css('display', 'flex');
	}, function() {
		// /* Stuff to do when the mouse leaves the element */
		$(this).find('.imgShaderScreen1').css('display', 'none');
	});
}

function portfolioNav042615a () {

	// interesting challenge:  the use of flexbox means that if there's only a single element shown or revealed then it expands to fill the page... however the image is limited in size... 
	// I would have to write a conditional that checks if there's only a single element on the page and then adjusts the flexbox property of the child to a min size?
	// or make sure that the child has a flex: 1 0 min-size where min-size is the key to keeping it a certain size;

	// ALL CLICK
	$('.portfolioNavigation1 a#all').click(function(event) {
		$('.portfolioNavigation1 a').css('color', '#B4ABBC');
		$(this).css('color', 'rgba(0, 171, 138,1)');
		$('.portfolioUnit').show('slow');
	});

	// APPLICATIONS CLICK
	$('.portfolioNavigation1 a#applications').click(function(event) {
		$('.portfolioNavigation1 a').css('color', '#B4ABBC');
		$(this).css('color', 'rgba(0, 171, 138,1)');
		$('.portfolioUnit').hide();
		$('section.animated').show('slow');
	});

	// ILLUSTRATION CLICK
	$('.portfolioNavigation1 a#illustration').click(function(event) {
		$('.portfolioNavigation1 a').css('color', '#B4ABBC');
		$(this).css('color', 'rgba(0, 171, 138,1)');
		$('.portfolioUnit').hide();
		$('section.photography').show('slow');
	});

	// LOGO CLICK
	$('.portfolioNavigation1 a#logo').click(function(event) {
		$('.portfolioNavigation1 a').css('color', '#B4ABBC');
		$(this).css('color', 'rgba(0, 171, 138,1)');
		$('.portfolioUnit').hide();
		$('section.marketing').show('slow');
	});

	// MUSIC CLICK
	$('.portfolioNavigation1 a#music').click(function(event) {
		$('.portfolioNavigation1 a').css('color', '#B4ABBC');
		$(this).css('color', 'rgba(0, 171, 138,1)');
		$('.portfolioUnit').hide();
		$('section.webdesign').show('slow');
	});

	// PRINT CLICK
	$('.portfolioNavigation1 a#print').click(function(event) {
		$('.portfolioNavigation1 a').css('color', '#B4ABBC');
		$(this).css('color', 'rgba(0, 171, 138,1)');
		$('.portfolioUnit').hide();
		$('section.business').show('slow');
	});

	// VIDEO CLICK
	$('.portfolioNavigation1 a#video').click(function(event) {
		$('.portfolioNavigation1 a').css('color', '#B4ABBC');
		$(this).css('color', 'rgba(0, 171, 138,1)');
		$('.portfolioUnit').hide();
		$('section.fashion').show('slow');
	});
}

// function portfolioNav042615b () {
// 	// STATUS:  not functioning
// 	// GOAL: code reduction

// 	var buttonIDs = ['all','applications','illustration','logo','music','print','video'];

// 	for (var i = 0; i < buttonIDs.length; i++) {
// 		$('.portfolioNavigation1 a').css('color', '#B4ABBC');
// 		$(this).css('color', 'rgba(0, 171, 138,1)');

// 		var targetName = '.portfolioNavigation1' +  ' ' + 'a' + '#' + buttonIDs[i];
// 		console.log(targetName);

// 		var $targetObj = $(targetName);
// 		console.log($targetObj);

// 		$targetObj.click(function(event) {
// 			$('.portfolioNavigation1 a').css('color', '#B4ABBC');
// 			$(this).css('color', 'rgba(0, 171, 138,1)');
			
// 			switch(buttonIDs[i]) {
// 				case "all":
// 					// $('.portfolioNavigation1 a').css('color', '#B4ABBC');
// 					// $(this).css('color', 'rgba(0, 171, 138,1)');
// 					$('.portfolioUnit').show('slow');
// 					break;
// 				case "applications":
// 					// $('.portfolioNavigation1 a').css('color', '#B4ABBC');
// 					// $(this).css('color', 'rgba(0, 171, 138,1)');
// 					$('.portfolioUnit').hide();
// 					$('section.animated').show('slow');
// 					break;
// 				case "illustration"
// 					// $('.portfolioNavigation1 a').css('color', '#B4ABBC');
// 					// $(this).css('color', 'rgba(0, 171, 138,1)');
// 					$('.portfolioUnit').hide();
// 					$('section.photography').show('slow');
// 					break;
// 				case "logo":
// 					// $('.portfolioNavigation1 a').css('color', '#B4ABBC');
// 					// $(this).css('color', 'rgba(0, 171, 138,1)');
// 					$('.portfolioUnit').hide();
// 					$('section.marketing').show('slow');
// 					break;
// 				case "music":
// 					// $('.portfolioNavigation1 a').css('color', '#B4ABBC');
// 					// $(this).css('color', 'rgba(0, 171, 138,1)');
// 					$('.portfolioUnit').hide();
// 					$('section.webdesign').show('slow');
// 					break;
// 				case "print":
// 					// $('.portfolioNavigation1 a').css('color', '#B4ABBC');
// 					// $(this).css('color', 'rgba(0, 171, 138,1)');
// 					$('.portfolioUnit').hide();
// 					$('section.business').show('slow');
// 					break;
// 				case "video":
// 					// $('.portfolioNavigation1 a').css('color', '#B4ABBC');
// 					// $(this).css('color', 'rgba(0, 171, 138,1)');
// 					$('.portfolioUnit').hide();
// 					$('section.fashion').show('slow');
// 					break;
// 			}
// 		});
		
// 	}
// }

function titleBlockAnimation042615a () {
	TweenMax.fromTo($('section.titleBlock'), 3, {opacity:0,ease:Power1.easeInOut}, {opacity:1,ease:Power1.easeInOut});
}

function titleBlockPulseRed042615a () {

	// create a new Timeline instance... which holds the animation sequence
	// set repeat:-1 for infinite repeat
	var tm = new TimelineMax({repeat:-1});

	tm.to($('section.titleBlock span.pulseRed'),5,{color:'white',ease:Power1.easeInOut});

	tm.to($('section.titleBlock span.pulseRed'),5,{color:'red',ease:Power1.easeInOut});

	tm.play();
}

function enableSmoothScroll () {
	$('a').smoothScroll();
}

function aboutUsImageAnimation042615a () {

	// create the sequence instances
	var tm = new TimelineMax();
	var tk = new TimelineMax();
	var timelineArray = [tm,tk];

	$.each($('section.aboutus div.flex img'), function(index, val) {

		var tz = timelineArray[index];

		$(this).hover(function() {
			/* Stuff to do when the mouse enters the element */
			tz.to($(this),1.2, {rotationY:360, scaleX:1.2, scaleY:1.2,ease:Power1.easeIn});
			tz.play();
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			tz.reverse();
		});
	});

	// $('section.aboutus div.flex img:first-child').hover(function() {
	// 	/* Stuff to do when the mouse enters the element */
		
	// 	tm.to($(this),1.2, {rotationY:360, scaleX:1.2, scaleY:1.2,ease:Power1.easeInOut});
	// 	tm.play();

	// }, function() {
	// 	/* Stuff to do when the mouse leaves the element */
	// 	tm.reverse();
	// });	


	// $('section.aboutus div.flex img:nth-child(2)').hover(function() {
	// 	/* Stuff to do when the mouse enters the element */
		
	// 	tk.to($(this),1.2, {rotationY:360, scaleX:1.2, scaleY:1.2,ease:Power1.easeInOut});
	// 	tk.play();

	// }, function() {
	// 	/* Stuff to do when the mouse leaves the element */
	// 	tk.reverse();
	// });	

	$('section.aboutus .copy').hover(function() {
		/* Stuff to do when the mouse enters the element */
		tm.to($('section.aboutus div.flex img:first-child'),1.2, {rotationY:360, scaleX:1.2, scaleY:1.2,ease:Power1.easeInOut});
		tk.to($('section.aboutus div.flex img:nth-child(2)'),1.2, {rotationY:360, scaleX:1.2, scaleY:1.2,ease:Power1.easeIn});
		tm.play();
		tk.play();
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		tm.reverse();
		tk.reverse();
	});
}

function benefitZoneAnimation042615a () {

	// setup all the TimelineMax instances outside of the loop for storing the sequences
	var ta = new TimelineMax();
	var tb = new TimelineMax();
	var tc = new TimelineMax();
	var td = new TimelineMax();
	var timelineArray = [ta,tb,tc,td];

	$.each($('section.benefits div.benefitZone .benefit'), function(index, val) {
		// I could have just used timelineArray[index] to reference the correct instance however that drains processing speed... better to use a temporary local variable to hold it for quick use
		var tm = timelineArray[index];

		$(this).hover(function() {
			/* Stuff to do when the mouse enters the element */
			tm.to($(this),0.4, {scaleX:2, scaleY:2,ease:Power1.easeIn});
			tm.play();
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			tm.reverse();
		});
	});
}

function featuresZone1Animation042615a () {

	// $('section.leftBullet').hide();
	// $('section.rightBullet').hide();

	var waypoints = $('section#featuresA1').waypoint({
	  handler: function(direction) {
	  	// alert("We've reached the Features Zone.");
	  	
	  	$('section.leftBullet').css('left', '-500%');
	  	$('section.rightBullet').css('right', '-500%');
	  	// weirdly bottom only takes pixel px values and not ems or percentages %... it won't work
	  	$('section.features .center img').css({
	  		opacity: 0,
	  		bottom: '-20000px'
	  	});

	  	$('section.features .center .copy').css({
	  		opacity: 0,
	  		bottom: '-20000px'
	  	});


	  	TweenMax.to($('section.leftBullet'), 2, {left:0,ease:Power1.easeIn});
	  	TweenMax.to($('section.rightBullet'), 2, {right:0,ease:Power1.easeIn});
	  	TweenMax.to($('section.features .center img'), 2, {opacity: 1, bottom:0,ease:Power1.easeIn});
	  	TweenMax.to($('section.features .center .copy'), 2, {opacity: 1, bottom:0,ease:Power1.easeIn});
	  }
	})
}

function pricingEntryAnimation042615a () {

	// setup all the TimelineMax instances outside of the loop for storing the sequences
	var ta = new TimelineMax();
	var tb = new TimelineMax();
	var tc = new TimelineMax();
	// var td = new TimelineMax();
	var timelineArray = [ta,tb,tc];

	$.each($('div.pricingEntry'), function(index, val) {
		var tm = timelineArray[index];

		$(this).hover(function() {
			/* Stuff to do when the mouse enters the element */
			tm.to($(this),0.4, {scaleX:1.4, scaleY:1.4,ease:Power1.easeIn});
			tm.to($(this),0,{backgroundColor:'lightyellow',ease:Power1.easeIn});
			tm.play();
		}, function() {
			/* Stuff to do when the mouse leaves the element */
			tm.reverse();
		});
	});
}

//////////////////////////////////////////////////
// EXECUTION CODE

enableSmoothScroll();
midnightEnable();
portfolioImageShader042615a();

portfolioNav042615a();
titleBlockAnimation042615a();
titleBlockPulseRed042615a();
aboutUsImageAnimation042615a();
benefitZoneAnimation042615a();

featuresZone1Animation042615a();
pricingEntryAnimation042615a();

//////////////////////////////////////////////////

});  //end doc.onready function
