// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


function scaleDemands() {
var myOuterHeight = 0;
var myInnerHeight = 0;
var scaleAmtY = 0; 

$('.scaled_demand-wrapper').each(function(){    
    myOuterHeight = $(this).height();
    myInnerHeight = $(this).find('.scaled_demand-content').height();
    $(this).find('.scaled_demand-content').css('transform', 'scale(1, 1)');
    scaleAmtY = myOuterHeight / myInnerHeight; 
    $(this).find('.scaled_demand-content').css('transform', 'scale(1, '+scaleAmtY+')');
 });
//console.log("scaled")
}

scaleDemands();

var rtime;
var timeout = false;
var delta = 200;
$(window).resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});

function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
        //console.log('Done resizing');
        scaleDemands();
    }               
}

document.fonts.ready.then(function () {
ftw_fit(".ftw_afsp", [{method:"font-variation-settings:wdth", min:50, max:150},"transform"]);
scaleDemands();
$('body').addClass('page_ready');
});


$(window).on('resize', function() {
$(".ftw_afsp").removeAttr("style");
ftw_fit(".ftw_afsp", [{method:"font-variation-settings:wdth", min:50, max:150},"transform"]);
scaleDemands();
});




$('body').on('click', '.nav_open', function() {
$('#top_bar-holder').removeClass('top_bar-hidden');
$('body').addClass('nav_opened');
$('body').removeClass('nav_closed');
$('#nav_toggle').addClass('nav_close');
$('#nav_toggle').removeClass('nav_open');
$(".ftw_afsp").removeAttr("style");
ftw_fit(".ftw_afsp", [{method:"font-variation-settings:wdth", min:50, max:150},"transform"]);
scaleDemands();
});

$('body').on('click', '.nav_close', function() {
$('#nav_toggle').prop('disabled', true);
$('body').removeClass('nav_opened');
//$('body').addClass('nav_closed');
$("body").addClass("nav_closed").delay(500).queue(function(next){
    $('#top_bar-holder').addClass('top_bar-hidden');
    $('#nav_toggle').prop('disabled', false);
    next();
});
$('#nav_toggle').removeClass('nav_close');
$('#nav_toggle').addClass('nav_open');
$(".ftw_afsp").removeAttr("style");
ftw_fit(".ftw_afsp", [{method:"font-variation-settings:wdth", min:50, max:150},"transform"]);
scaleDemands();
});