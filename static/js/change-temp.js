
function changeTemp(tempC,tempF, buttonC, buttonF){

	$(buttonC).click(function(){
		$('#temp').text(tempC);
	});
	
	$(buttonF).click(function(){
		$('#temp').text(tempF);
	});
}