$(document).ready(function(){
	console.log('start autoshift');
	pageShifter();
});


/* Add or remove photo -> change the value of photoAmount */
var counter = 0;
var photoAmount = 4;

// Get all photo
var photo = [];
for(var i=0; i<photoAmount; i++){
	var photoID = "p" + (i+1);
	photo[i] = document.getElementById(photoID);
};

var cyclePager = $('#cycle-pager span')
var refreshIntervalId;

var pageShifter = function(){

	//Function declare:
	//Funciton 'autoShift' will auto shift every 4 second.
	var autoShift = function(){
		refreshIntervalId = setInterval(function(){
			//Prepare next photo at right side.
			var currentPhoto = counter;
			var nextPhoto = counter + 1;
			if(nextPhoto >=  photoAmount) nextPhoto = 0;
			counter++;
			if(counter >= photoAmount) counter = 0;
			$(photo[nextPhoto]).css({"left":"100%","display":"block"});
			//Wait 0.5 sec due to the css change before.
			setTimeout(function(){
				$(cyclePager[currentPhoto]).removeClass('cycle-pager-active');
				$(cyclePager[nextPhoto]).addClass('cycle-pager-active');
				$(photo[currentPhoto]).animate({left:"-100%"},{duration:1300,queue:false,easing:'easeInOutExpo'});
				$(photo[nextPhoto]).animate({left:'0%'},{duration:1300,queue:false,easing:'easeInOutExpo',complete:function(){
					//After shift complete remove old photo.
					$(photo[currentPhoto]).css({'display':'none'});
					}
				});
			},500);

		},4000);
	};

	//Function declare:
	//Function 'cyclePagerShifter' shift to specified page according to the pager which been clicked.
	var cyclePagerShifter = function(fromPhoto,toPhoto){
		$(photo[toPhoto]).css({"left":"100%","display":"block"});

		//Wait 0.05 sec due to the css change before.
		setTimeout(function(){

			//Cancel the animation which is now playing and jump to the end.
			var stopAnimateOut = fromPhoto;
			var stopAnimateIn = fromPhoto + 1;
			if(stopAnimateIn === 4) stopAnimateIn = 0;
			$(photo[stopAnimateIn]).stop(true,true,true);
			$(photo[stopAnimateOut]).stop(true,true,true);

			//Start pager shift.
			//Decide shift direction.
			if(toPhoto > fromPhoto){
				//Change active pager. 
				$(cyclePager[fromPhoto]).removeClass('cycle-pager-active');
				$(cyclePager[toPhoto]).addClass('cycle-pager-active');

				//Check photo display and position before animate.
				$(photo[fromPhoto]).css({'display':'block','left':'0%'}).animate({left:"-100%"},{duration:1300,queue:false,easing:'easeInOutExpo'});
				$(photo[toPhoto]).css({'display':'block','left':'100%'}).animate({left:'0%'},{duration:1300,queue:false,easing:'easeInOutExpo',complete:function(){
				//After shift complete remove old photo.
						$(photo[fromPhoto]).css({'display':'none'});
					}
				});
			}
			else{
				//Change active pager. 
				$(cyclePager[fromPhoto]).removeClass('cycle-pager-active');
				$(cyclePager[toPhoto]).addClass('cycle-pager-active');

				//Check photo display and position before animate.
				$(photo[fromPhoto]).css({'display':'block','left':'0%'}).animate({left:"100%"},{duration:1300,queue:false,easing:'easeInOutExpo'});
				$(photo[toPhoto]).css({'display':'block','left':'-100%'}).animate({left:'0%'},{duration:1300,queue:false,easing:'easeInOutExpo',complete:function(){
				//After shift complete remove old photo.
						$(photo[fromPhoto]).css({'display':'none'});
					}
				});
			}
		},50);
	}

	//Initial autoShift.
	autoShift();

	//Handle pager click event.
	$('#cycle-pager span').click(function(){
		
		//Stop autoshift interval.
		clearInterval(refreshIntervalId);

		//Check clicked pager.
		switch($(this)[0]){
			case cyclePager[0]:
				if(counter != 0)
				cyclePagerShifter(counter,0);
				counter = 0;
				break;
			case cyclePager[1]:
				if(counter != 1)
				cyclePagerShifter(counter,1);
				counter = 1;
				break;
			case cyclePager[2]:
				if(counter != 2)
				cyclePagerShifter(counter,2);
				counter = 2;
				break;
			case cyclePager[3]:
				if(counter != 3)
				cyclePagerShifter(counter,3);
				counter = 3;
				break;
		}
		//Restart autoshift interval.
		autoShift();
	});

};

