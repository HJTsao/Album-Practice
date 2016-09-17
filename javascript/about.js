$(document).ready(function(){
	aboutClick();

});

var aboutClick = function(){
	var aboutButton = document.getElementById('button1');
	var aboutDOM = document.getElementById('about');
	$(aboutButton).click(function(){
		$(aboutDOM).slideDown({duration:1300,queue:false,easing:'easeInOutExpo'});
		$('#button2 a').css({'cursor':'pointer'});
		$('#button1 a').css({'cursor':'initial'});
		$('#button2 p').css({'color':'black'});
		$('#button1 p').css({'color':'grey'});
	});
}