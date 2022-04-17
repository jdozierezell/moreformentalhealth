
$(window).bind("load", function() {

$('#project_holder').addClass('shown');

  ftw_fit(".ftw, .myftwclass", [
    { method: "font-variation-settings:wdth", min:50, max:150 },
  ]);
       
});

document.fonts.ready.then(function () {

  ftw_fit(".ftw, .myftwclass", [
    { method: "font-variation-settings:wdth", min:50, max:150 },
  ]);
  
});

function checkProject() {
var errorCount = 0;
var screen1Count = 0;
var screen2Count = 0;
var checkText = "";
checkText = $("#line1").html() + $("#line2").html() + $("#line3").html();

$('#generator_holder').removeClass('project_button-error');
$('#project_mobilenav').removeClass('project_button-error');
$('#project_mobilenav').removeClass('project_mobilenav-error');

if (!checkText) {
errorCount = errorCount + 1;
screen1Count = screen1Count + 1;
}

if (!$(".project_bg-choice:checked").val()) {
errorCount = errorCount + 1;
screen2Count = screen2Count + 1;
}

if (!$(".project_demandfont-choice:checked").val()) {
errorCount = errorCount + 1;
screen2Count = screen2Count + 1;
}

if (!$(".project_sloganfont-choice:checked").val()) {
errorCount = errorCount + 1;
screen2Count = screen2Count + 1;
}

if (screen2Count > 0) {
$('#project_mobilenav-next2').prop('disabled', true);
$('#project_mobilenav-nav2').addClass('project_mobilenav-next-disabled');
}
else {
$('#project_mobilenav-next2').prop('disabled', false);
$('#project_mobilenav-nav2').removeClass('project_mobilenav-next-disabled');
}
	
if (screen1Count > 0) {
$('#project_mobilenav-next1').prop('disabled', true);
$('#project_mobilenav-nav1').addClass('project_mobilenav-next-disabled');
}
else {
$('#project_mobilenav-next1').prop('disabled', false);
$('#project_mobilenav-nav1').removeClass('project_mobilenav-next-disabled');
}
	
	

if (errorCount > 0) {
$('#project_button').prop('disabled', true);
$("#project_button-frame").addClass("project_button-disabled");
}
else {
$('#project_button').prop('disabled', false);
$("#project_button-frame").removeClass("project_button-disabled");
}

}



var myBGcolor = "#fff";
var myDemandFontColor = "#b3b3b3";
var mySloganFontColor = "#000";
var PreGenText = "no";
var myDemandFontArray = new Array("");
var mySloganFontArray = new Array("");




// Input name
$("#project_name-field").on("keyup change blur", function (e) {

if (!$("#project_name-field").val()) {
$("#canvas_footer-name").html(""); 
}

else {
$("#canvas_footer-name").html("" + $("#project_name-field").val());
}

$('#canvas_footer-name').profanityFilter({
customSwears: ['ass'],
replaceWith:'#',
externalSwears: 'js/swearWords.json'
}) 
checkProject();
});


// Input Text Choose
$(".project_controls-field").on("keyup change blur", function (e) {
var myCount = 0;
var checkFields = $('#project_controls-field1').val() + $('#project_controls-field2').val() + $('#project_controls-field3').val();
var updateCanvas = "yes";

if (PreGenText === "yes" && !checkFields ) {
updateCanvas = "no";
}

if (updateCanvas === "yes") {

PreGenText = "no";

$(".canvas_line").addClass("hide_line");
$("#canvas_holder").removeClass (function (index, className) {
return (className.match (/(^|\s)canvas_holder\S+/g) || []).join(' ');
});

$(".canvas_line").removeAttr("style");

if ($("#project_controls-field1").val()) {
$("#line1").removeClass("hide_line");
$("#line1").html($("#project_controls-field1").val());          
$('#line1').profanityFilter({
customSwears: ['ass'],
replaceWith:'#',
externalSwears: 'js/swearWords.json'
})          
myCount = myCount + 1;
} else {
$("#line1").addClass("hide_line");
$("#line1").html("");
}

if ($("#project_controls-field2").val()) {
$("#line2").removeClass("hide_line");
$("#line2").html($("#project_controls-field2").val());          
$('#line2').profanityFilter({
customSwears: ['ass'],
replaceWith:'#',
externalSwears: 'js/swearWords.json'
})                    
myCount = myCount + 1;
} else {
$("#line2").addClass("hide_line");
$("#line2").html("");
}

if ($("#project_controls-field3").val()) {
$("#line3").removeClass("hide_line");
$("#line3").html($("#project_controls-field3").val());          
$('#line3').profanityFilter({
customSwears: ['ass'],
replaceWith:'#',
externalSwears: 'js/swearWords.json'
})          
myCount = myCount + 1;
} else {
$("#line3").addClass("hide_line");
$("#line3").html("");
}

if (myCount < 1) {
myCount = 1
};


$("#canvas_holder").addClass("canvas_holder" + myCount + "");

ftw_fit(".ftw", [
{ method: "font-variation-settings:wdth", min:50, max:150 },
]);

}

checkProject();

});


// Background Choose
$(".project_bg-choice").change(function() {
$('.project_demandfont-choice-holder').removeClass("hide_choice");
$('.project_sloganfont-choice-holder').removeClass("hide_choice");
$('.project_sloganfont-choice-holder').removeClass("hide_choice2");
$(".project_bg-choice").removeClass("project_bg-selected");
$(this).addClass("project_bg-selected");
var myBGchoice = $(this).attr("id");
$("#project_holder").removeClass (function (index, className) {
    return (className.match (/(^|\s)bgcolor-\S+/g) || []).join(' ');
});

switch(myBGchoice) {

case "project_bg-choice1":
$("#project_holder").addClass("bgcolor-1");
myBGcolor = "#FFFF00";
myDemandFontArray = new Array("project_demandfont-choice4", "project_demandfont-choice5", "project_demandfont-choice6", "project_demandfont-choice7");
mySloganFontArray = new Array("project_sloganfont-choice4", "project_sloganfont-choice5", "project_sloganfont-choice6", "project_sloganfont-choice7");
break;

case "project_bg-choice2":
$("#project_holder").addClass("bgcolor-2");
myBGcolor = "#A2FF00";
myDemandFontArray = new Array("project_demandfont-choice4", "project_demandfont-choice5", "project_demandfont-choice6", "project_demandfont-choice7");
mySloganFontArray = new Array("project_sloganfont-choice4", "project_sloganfont-choice5", "project_sloganfont-choice6", "project_sloganfont-choice7");
break;

case "project_bg-choice3":
$("#project_holder").addClass("bgcolor-3");
myBGcolor = "#00FFFF";
myDemandFontArray = new Array("project_demandfont-choice4", "project_demandfont-choice5", "project_demandfont-choice6", "project_demandfont-choice7");
mySloganFontArray = new Array("project_sloganfont-choice4", "project_sloganfont-choice5", "project_sloganfont-choice6", "project_sloganfont-choice7");
break;

case "project_bg-choice4":
$("#project_holder").addClass("bgcolor-4");
myBGcolor = "#3347FF";
myDemandFontArray = new Array("project_demandfont-choice1", "project_demandfont-choice2", "project_demandfont-choice3", "project_demandfont-choice6", "project_demandfont-choice8");
mySloganFontArray = new Array("project_sloganfont-choice1", "project_sloganfont-choice2", "project_sloganfont-choice3", "project_sloganfont-choice6", "project_sloganfont-choice8");
break;

case "project_bg-choice5":
$("#project_holder").addClass("bgcolor-5");
myBGcolor = "#CB30FF";
myDemandFontArray = new Array("project_demandfont-choice1", "project_demandfont-choice2", "project_demandfont-choice3", "project_demandfont-choice8");
mySloganFontArray = new Array("project_sloganfont-choice1", "project_sloganfont-choice2", "project_sloganfont-choice3", "project_sloganfont-choice8");
break;

case "project_bg-choice6":
$("#project_holder").addClass("bgcolor-6");
myBGcolor = "#FF66FF";
myDemandFontArray = new Array("project_demandfont-choice1", "project_demandfont-choice2", "project_demandfont-choice3", "project_demandfont-choice4");
mySloganFontArray = new Array("project_sloganfont-choice1", "project_sloganfont-choice2", "project_sloganfont-choice3", "project_sloganfont-choice4");
break;

case "project_bg-choice7":
$("#project_holder").addClass("bgcolor-7");
myBGcolor = "#FF396D";
myDemandFontArray = new Array("project_demandfont-choice1", "project_demandfont-choice2", "project_demandfont-choice3", "project_demandfont-choice8");
mySloganFontArray = new Array("project_sloganfont-choice1", "project_sloganfont-choice2", "project_sloganfont-choice3", "project_sloganfont-choice8");
break;

case "project_bg-choice8":
$("#project_holder").addClass("bgcolor-8");
myBGcolor = "#FEBE01";
myDemandFontArray = new Array("project_demandfont-choice4", "project_demandfont-choice5", "project_demandfont-choice6");
mySloganFontArray = new Array("project_sloganfont-choice4", "project_sloganfont-choice5", "project_sloganfont-choice6");
break;

default:
$("#project_holder").addClass("bgcolor-0");
myBGcolor = "#fff";
myDemandFontArray = new Array("project_demandfont-choice1","project_demandfont-choice2","project_demandfont-choice3","project_demandfont-choice4", "project_demandfont-choice5", "project_demandfont-choice6","project_demandfont-choice7", "project_demandfont-choice8");
mySloganFontArray = new Array("project_sloganfont-choice1","project_sloganfont-choice2","project_sloganfont-choice3","project_sloganfont-choice4", "project_sloganfont-choice5", "project_sloganfont-choice6","project_sloganfont-choice7", "project_sloganfont-choice8");
} 

var myFontchoiceID1 = "";
var myFontchoiceID2 = "";

$('.project_demandfont-choice').each(function() {
myFontchoiceID1 = $(this).attr("id");
if(jQuery.inArray(myFontchoiceID1, myDemandFontArray) === -1) {
$(this).parent('.project_demandfont-choice-holder').addClass("hide_choice");

if ($(this).is(':checked')) {

myDemandFontColor = "#b3b3b3";
$(this).prop('checked', false);
$("#project_holder").removeClass (function (index, className) {
    return (className.match (/(^|\s)demandfontcolor-\S+/g) || []).join(' ');
});
$("#project_holder").addClass("demandfontcolor-0");

}


}
});

$('.project_sloganfont-choice').each(function() {
myFontchoiceID2 = $(this).attr("id");
if(jQuery.inArray(myFontchoiceID2, mySloganFontArray) === -1) {
$(this).parent('.project_sloganfont-choice-holder').addClass("hide_choice");

if ($(this).is(':checked')) {

mySloganFontColor = "#000";
$(this).prop('checked', false);
$("#project_holder").removeClass (function (index, className) {
    return (className.match (/(^|\s)sloganfontcolor-\S+/g) || []).join(' ');
});
$("#project_holder").addClass("sloganfontcolor-0");

}

}
});


if ($(".project_demandfont-choice").is(':checked')) {
var radioValue = $(".project_demandfont-choice:checked").val();

   
switch(radioValue) {

case "project_demandfont-choice1":
$('#project_sloganfont-choice1').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

case "project_demandfont-choice2":
$('#project_sloganfont-choice2').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

case "project_demandfont-choice3":
$('#project_sloganfont-choice3').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

case "project_demandfont-choice4":
$('#project_sloganfont-choice4').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

case "project_demandfont-choice5":
$('#project_sloganfont-choice5').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

case "project_demandfont-choice6":
$('#project_sloganfont-choice6').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

case "project_demandfont-choice7":
$('#project_sloganfont-choice7').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

case "project_demandfont-choice8":
$('#project_sloganfont-choice8').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

}  
   
}

checkProject();

});
// Background Choose


// Demand Font Color Choose
$(".project_demandfont-choice").change(function() {

$('.project_sloganfont-choice-holder').removeClass("hide_choice2");

$(".project_demandfont-choice").removeClass("project_demandfont-selected");
$(this).addClass("project_demandfont-selected");
var myDemandFontchoice = $(this).attr("id");

$("#project_holder").removeClass (function (index, className) {
    return (className.match (/(^|\s)demandfontcolor-\S+/g) || []).join(' ');
});

switch(myDemandFontchoice) {

case "project_demandfont-choice1":
$("#project_holder").addClass("demandfontcolor-1");
myDemandFontColor = "#FFFF00";
$('#project_sloganfont-choice1').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

case "project_demandfont-choice2":
$("#project_holder").addClass("demandfontcolor-2");
myDemandFontColor = "#A2FF00";
$('#project_sloganfont-choice2').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

case "project_demandfont-choice3":
$("#project_holder").addClass("demandfontcolor-3");
myDemandFontColor = "#00FFFF";
$('#project_sloganfont-choice3').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

case "project_demandfont-choice4":
$("#project_holder").addClass("demandfontcolor-4");
myDemandFontColor = "#3347FF";
$('#project_sloganfont-choice4').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

case "project_demandfont-choice5":
$("#project_holder").addClass("demandfontcolor-5");
myDemandFontColor = "#CB30FF";
$('#project_sloganfont-choice5').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

case "project_demandfont-choice6":
$("#project_holder").addClass("demandfontcolor-6");
myDemandFontColor = "#FF66FF";
$('#project_sloganfont-choice6').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

case "project_demandfont-choice7":
$("#project_holder").addClass("demandfontcolor-7");
myDemandFontColor = "#FF396D";
$('#project_sloganfont-choice7').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

case "project_demandfont-choice8":
$("#project_holder").addClass("demandfontcolor-8");
myDemandFontColor = "#FEBE01";
$('#project_sloganfont-choice8').parent('.project_sloganfont-choice-holder').addClass("hide_choice2");
break;

default:
$("#project_holder").addClass("demandfontcolor-0");
myDemandFontColor = "#b3b3b3";

} 

$(".project_sloganfont-choice").each(function() {

if ( $(this).parent('.project_sloganfont-choice-holder').is( ".hide_choice2" ) ) {
 

if ($(this).is(':checked')) {

mySloganFontColor = "#000";
$(this).prop('checked', false);
$("#project_holder").removeClass (function (index, className) {
    return (className.match (/(^|\s)sloganfontcolor-\S+/g) || []).join(' ');
});
$("#project_holder").addClass("sloganfontcolor-0");

}


 
}


});

checkProject();

});
// Demand Font Color Choose

// Slogan Font Color Choose
$(".project_sloganfont-choice").change(function() { 

$(".project_sloganfont-choice").removeClass("project_sloganfont-selected");
$(this).addClass("project_sloganfont-selected");
var mySloganFontchoice = $(this).attr("id");

$("#project_holder").removeClass (function (index, className) {
    return (className.match (/(^|\s)sloganfontcolor-\S+/g) || []).join(' ');
});

switch(mySloganFontchoice) {

case "project_sloganfont-choice1":
$("#project_holder").addClass("sloganfontcolor-1");
mySloganFontColor = "#FFFF00";
break;

case "project_sloganfont-choice2":
$("#project_holder").addClass("sloganfontcolor-2");
mySloganFontColor = "#A2FF00";
break;

case "project_sloganfont-choice3":
$("#project_holder").addClass("sloganfontcolor-3");
mySloganFontColor = "#00FFFF";
break;

case "project_sloganfont-choice4":
$("#project_holder").addClass("sloganfontcolor-4");
mySloganFontColor = "#3347FF";
break;

case "project_sloganfont-choice5":
$("#project_holder").addClass("sloganfontcolor-5");
mySloganFontColor = "#CB30FF";
break;

case "project_sloganfont-choice6":
$("#project_holder").addClass("sloganfontcolor-6");
mySloganFontColor = "#FF66FF";
break;

case "project_sloganfont-choice7":
$("#project_holder").addClass("sloganfontcolor-7");
mySloganFontColor = "#FF396D";
break;

case "project_sloganfont-choice8":
$("#project_holder").addClass("sloganfontcolor-8");
mySloganFontColor = "#FEBE01";
break;

default:
$("#project_holder").addClass("sloganfontcolor-0");
mySloganFontColor = "#000";

}

checkProject();

});
// Demand Font Color Choose






