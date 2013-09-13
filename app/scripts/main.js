'use strict';
var checkInput = function(inputId, type){
	var errorMsg = 'Please enter a valid city name';
	if(type === 'date'){
		errorMsg =  'Please enter a valid date';
	}
	if(document.getElementById(inputId).value === '')	{
		document.getElementById(inputId + 'Error').innerHTML =  errorMsg;
		document.getElementById(inputId).style.border = '1px solid red';
	}else{
		document.getElementById(inputId + 'Error').innerHTML = '' ;
		document.getElementById(inputId).style.border = '';
	}
};
 
var validate = function(){
	checkInput('inputFromCity', 'city');
	checkInput('inputToCity', 'city');
	checkInput('inputDateOfJourney', 'date');
	return false;
};
