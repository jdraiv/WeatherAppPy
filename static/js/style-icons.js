


function isDay(num, celestialBody, sky){

	if (num == 1){
		console.log('Day')
		$(celestialBody).css('background-color', '#F4E755');

		$(sky).css('background-color', '#1768B5');
	}
	else{
		drawStars();
		$(celestialBody).css('background-color', 'white');
		$(sky).css('background-color', '#141726');
	}

}
