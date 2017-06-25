

function changeTemp(tempC,tempF, buttonC, buttonF){
	console.log(tempC,tempF)
	$(buttonC).click(function(){
		$('#temp').text(tempC);
	});
	$(buttonF).click(function(){
		$('#temp').text(tempF);
	});
}