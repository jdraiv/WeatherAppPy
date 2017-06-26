
function isDay(num, celestialBody, sky){

	if (num == 1){
		$(celestialBody).css('background-color', '#F4E755');

		$(sky).css('background-color', '#1768B5');
	}
	else if (num == 0){
		$(celestialBody).css('background-color', 'white');
		$(sky).css('background-color', '#141726');
		drawStars();
	}
	
}
