$(document).ready(function(){
	resizer();
});
/*
var resizeEventChecker = function(){
	var width = $(window).width();
	var height = $(window).height();
	setInterval( function(){
		var nowWidth = $(window).width();
		var nowHeight = $(window).height();
		if(( width != nowWidth ) || ( height != nowHeight )){
			if(nowWidth >= 1120 && nowHeight >= 630){
				var ratio = parseFloat(nowHeight/nowWidth);
				if( ratio >= parseFloat(9/16) ){
					console.log(parseFloat(ratio));
					$('.photo img').css({'height':nowHeight});
				}
				else{
					console.log("2");
					$('.photo img').css({'width':nowWidth});
				}
			}
		}

	},300);
}*/
var resizer = function(){
	var width = $(window).width();
	var height = $(window).height();
	var bodyHeight = $(document.body).height();
	var bodyWidth = $(document.body).width();
	var albumDOM = $('body');
	var ratio = parseFloat(bodyHeight/bodyWidth);

		if( ratio >= parseFloat(9/16) ){
			console.log(parseFloat(ratio));
			$('.photo img').css({'height':bodyHeight});
		}
		else{
			console.log("2");
			$('.photo img').css({'width':bodyWidth});
		}
	console.log(width + ' ' + height + ' ' + bodyHeight + ' ' + bodyWidth);
	console.log();
}
