$(document).ready(function(){
	//Do resize first for resolution support.
	resizer();
	resizeEventChecker();
});

var resizeEventChecker = function(){
	//Check every 0.3 sec.
	var width = $(window).width();
	var height = $(window).height();
	setInterval( function(){
		var nowWidth = $(window).width();
		var nowHeight = $(window).height();
		//If width or height of window change, call resizer.
		if(( width != nowWidth ) || ( height != nowHeight )){
			resizer();
		}
		//Record.
		width = nowWidth;
		height = nowHeight;
	},300);
}
var resizer = function(){
	//Always change with body size(Not window size).
	var bodyHeight = $(document.body).height();
	var bodyWidth = $(document.body).width();
	var albumDOM = $('body');
	var ratio = parseFloat(bodyHeight/bodyWidth);
	//If the ratio of body if above 16:9 (say, 21:9 or higher), take width. otherwise take height.
	if( ratio >= parseFloat(9/16) ){
		//Keep the ratio of photos.
		$('.photo img').css({'height':bodyHeight,'width':bodyHeight*(16/9)});
		$(document)[0].getElementById('photoHeight').innerHTML = bodyHeight;
	}
	else{
		//Keep the ratio of photos.
		$('.photo img').css({'height':bodyWidth*(9/16),'width':bodyWidth});
		$(document)[0].getElementById('photoWidth').innerHTML = bodyWidth ;
	}
}
