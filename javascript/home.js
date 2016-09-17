$(document).ready(function(){
	homeClick();

});
	
var homeClick = function(){
	var homeButton = document.getElementById('button2');
	var aboutDOM = document.getElementById('about');
	$(homeButton).click(function(){
		$(aboutDOM).slideUp({duration:1300,queue:false,easing:'easeInOutExpo'});
		$('#button2 a').css({'cursor':'initial'});
		$('#button1 a').css({'cursor':'pointer'});
		$('#button2 p').css({'color':'grey'});
		$('#button1 p').css({'color':'black'});
	});
}