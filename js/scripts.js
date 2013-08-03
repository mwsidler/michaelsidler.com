$(function(){
					 
//JQUERY FOR EASY SCROLLING THROUGH PAGE
$.localScroll( {
   offset: -145//This accounts for the fixed header on the site
});
//CLOSE JQUERY FOR EASY SCROLLING THROUGH PAGE

//JQUERY FOR SPOTLIGHT SCROLLING
var spotlight_buttons = [];
spotlight_buttons = $('#spotlight-list li');
spotlight_buttons.click(function(){
	$('#spotlight-ad').stop( [ false ], [ true ] );
	$('#spotlight-ad').animate(
		{top: (-386 * $(this).index())}, 500, 'swing');
});

//CLOSE JQUERY FOR SPOTLIGHT SCROLLING

//JQUERY FOR SORTING PORTFOLIO
var portfolio_nav = $("ul#portfolio-nav li");
	portfolio_nav.click(function(){
														 
		$("ul#portfolio-list li").hide("fade");
    $("ul#portfolio-list li." + $(this).attr('id')).show("fade");
			 
});
//CLOSE JQUERY FOR SORTING PORTFOLIO 

//JQUERY FOR ABOUT ME MENU SORTING PORTFOLIO
var aboutmeMenu = function(meMenuClass) {
	
	$("#aboutme ul li#" + meMenuClass).click(function(){
		
		$("ul#portfolio-list li:not("+ meMenuClass +")").hide("slide");
		$("ul#portfolio-list li." + meMenuClass).show("fade");
		
	});

};

aboutmeMenu ('brand');
aboutmeMenu ('motion');
aboutmeMenu ('web');
//CLOSE JQUERY FOR ABOUT ME MENU SORTING PORTFOLIO 

//JAVASCRIPT FOR DISPLAYING YOUTUBE VIDEOS
	window._uds_vbw_donotrepair = true;
	function LoadVideoBar() {

	var videoBar;
	var options = {
			largeResultSet : !true,
			horizontal : true,
			autoExecuteList : {
				cycleTime : GSvideoBar.CYCLE_TIME_MEDIUM,
				cycleMode : GSvideoBar.CYCLE_MODE_LINEAR,
				executeList : ["ytchannel:michaelsidler"]
			}
		}

	videoBar = new GSvideoBar(document.getElementById("videoBar-bar"),
														GSvideoBar.PLAYER_ROOT_FLOATING,
														options);
	}
	// arrange for this function to be called during body.onload
	// event processing
	GSearch.setOnLoadCallback(LoadVideoBar);
//CLOSE JAVASCRIPT FOR DISPLAYING YOUTUBE VIDEOS

//JQUERY FOR DISPLAYING LASTFM IMAGES

		var _config = {username: 'mwsidler',   	// last.fm username
		placeholder: 'lastfmrecords',       		// id of the div in HTML to use for cd covers
		defaultthumb: 'images/lastfm_logo.jpg', // image to show when no cd cover or artist image was found
		period: 'lovedtracks',              		// which period/type of data do you want to show? you can choose from recenttracks, 7day, 3month, 6month, 12month, overall, topalbums and lovedtracks
		count: 4,                         			// number of images to show
		refresh: 5,                         		// when to get new data from last.fm (in minutes)
		offset: 1                          			// difference between your timezone and GMT.
		};

		lastFmRecords.debug();                  // log to console
		lastFmRecords.init(_config);

//CLOSE JQUERY FOR DISPLAYING LASTFM IMAGES

//JQUERY FOR CYCLING THROUGH QUOTES   

$('#quote-wrapper').cycle({
	fx: 'fade',
	speed: 500,
	timeout: 12000
});

//CLOSE JQUERY FOR CYCLING THROUGH QUOTES

//JQUERY FOR BOTTOM NAV DISPLAY
$("#bottom-nav ul").hide();

/*$("#bottom-nav h1").mouseenter(function(){
	$("#bottom-nav ul").slideDown("fast");
});

$("#bottom-nav").mouseleave(function(){
	$("#bottom-nav ul").slideUp("fast");																			
});*/

$('#bottom-nav').hover(
  function () {
    $(this).find('ul').stop(true, true).slideDown('fast');
		return false;
  }, 
  function () {
    $(this).find('ul').stop(true, true).slideUp('fast');
		return false;
  }
);


//CLOSE JQUERY FOR BOTTOM NAV DISPLAY

//FOR DISPLAYING SUCCESS OR FAILURE EMAIL SEND MESSAGE
$("input#send").click(function(){
	if($("#emailForm #Name").val() == "" || $("#emailForm #Name").val() == "Name (required)"){
		$('#response header h3').attr('id', 'error-message').html('Opps! You forgot to include your name.');
	} else if($("#emailForm #Email").val() == "" || $("#emailForm #Email").val() == "Email (required)"){
		$('#response header h3').attr('id', 'error-message').html('Opps! You forgot to include your email');
	} else if($("#emailForm #Subject").val() == "" || $("#emailForm #Subject").val() == "Subject (required)"){
		$('#response header h3').attr('id', 'error-message').html('Opps! You forgot to include the subject');
	} else if($("#emailForm #Message").val() == "" || $("#emailForm #Message").val() == "So whats on your mind?"){
		$('#response header h3').attr('id', 'error-message').html('Please include a message for me to read.');
	} else {
		$.post(
			"php/mail.php",
			$("#emailForm").serialize(),
			function(data){
				if(data == "success"){
					$('#response header h3').attr('id', 'success-message').html('Your message was sent successfully! Thank you!');
					$(':input','#emailForm').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
					$(':input','#emailForm').not(':button, :submit, :reset, :hidden').each(function(){$(this).blur();});
				} else {
					$('#response header h3').attr('id', 'error-message').html('I\'m sorry, something went wrong, can you please try that again?');
				}
			}
		);
	}
	return false;
});

//CLOSE FOR DISPLAYING SUCCESS OR FAILURE EMAIL SEND MESSAGE

//LIGHTBOX FANCYBOX
$("a.lightbox").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'				:	400, 
		'speedOut'			:	300, 
		'overlayShow'		:	true,
		'easingIn'			: 'easeOutBack',
		'easingOut'			: 'easeInBack',
		'titlePosition'	:	'outside',
		'overlayColor'	:	'#000',
		'overlayOpacity':	'.8',
		'centerOnScroll':	true,
		'autoDimensions':	false,
		'height'				:	401,
		'width'					:	660
});

$("a.fancyweb").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'				:	400, 
		'speedOut'			:	300, 
		'overlayShow'		:	true,
		'easingIn'			: 'easeOutBack',
		'easingOut'			: 'easeInBack',
		'titlePosition'	:	'outside',
		'overlayColor'	:	'#000',
		'overlayOpacity':	'.8',
		'centerOnScroll':	true,
		'autoDimensions':	false,
		'height'				:	'75',
		'width'					:	'75'
});


//CLOSE LIGHTBOX FANCYBOX

//JQUERY FOR DISPLAYING PORTFOLIO TEXT 
$('#portfolio-list li a').hover(
  function () {
    $(this).find('.description').stop(true, false).animate({
			'bottom' : '22px',
			'opacity' : '.85'
			}, 'fast');
		return false;
  }, 
  function () {
    $(this).find('.description').stop(true, false).animate({
			'bottom' : '0',
			'opacity' : '0'
			}, '300');
		return false;
  }
);
//CLOSE JQUERY FOR DISPLAYING PORTFOLIO TEXT 

//JQUERY FOR DISPLAYING SPOTLIGHT INFORMATION TEXT 
$('ul#spotlight-ad li').hover(
  function () {
    $(this).find('span').stop(true, true).fadeIn('slow');
		return false;
  }, 
  function () {
    $(this).find('span').stop(true, true).fadeOut('slow');
		return false;
  }
);
//CLOSE JQUERY FOR DISPLAYING SPOTLIGHT INFORMATION TEXT 

}); 