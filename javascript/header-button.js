$(document).ready(function(){
	//Enable 'About' button.
	var aboutButton = document.getElementById('button1');
	$(aboutButton).bind('click',aboutClick);
});

var aboutClick = function(){
	var aboutButton = document.getElementById('button1');
	var homeButton = document.getElementById('button2');
	var escapeBox = document.getElementById('escape-box');
	var aboutDOM = document.getElementById('about');

	//Prevent reClicking about button and enable 'home' button and escape box.
	$(aboutButton).unbind('click',aboutClick);
	$(homeButton).bind('click',homeClick);
	$(escapeBox).bind('click',homeClick);

	//Handle rapid home<->about button click.
	//$(aboutDOM).stop(true,true,true).slideDown({duration:1300,queue:false,easing:'easeInOutExpo'});
	$(aboutDOM).stop(true,true,true).css({'top':'-100%'}).animate({'top':'0'},{duration:1300,queue:false,easing:'easeInOutExpo'});
	$('#button2 a').css({'cursor':'pointer'});
	$('#button1 a').css({'cursor':'initial'});
	$('#button2 p').css({'color':'black'});
	$('#button1 p').css({'color':'grey'});
}

var homeClick = function(){
	var aboutButton = document.getElementById('button1');
	var homeButton = document.getElementById('button2');
	var escapeBox = document.getElementById('escape-box');
	var aboutDOM = document.getElementById('about');

	//Prevent reClicking home button and escape box. Enable 'About' button.
	$(homeButton).unbind('click',homeClick);
	$(escapeBox).unbind('click',homeClick);
	$(aboutButton).bind('click',aboutClick);

	//Handle rapid home<->about button click.
	//$(aboutDOM).stop(true,true,true).slideUp({duration:1300,queue:false,easing:'easeInOutExpo'});
	$(aboutDOM).stop(true,true,true).css({'top':'0'}).animate({'top':'-100%'},{duration:1300,queue:false,easing:'easeInOutExpo'});
	$('#button2 a').css({'cursor':'initial'});
	$('#button1 a').css({'cursor':'pointer'});
	$('#button2 p').css({'color':'grey'});
	$('#button1 p').css({'color':'black'});
}