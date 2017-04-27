/**
 * 
 */

function onChange(val){
	var choice = confirm("You pressed " + val);
	if(choice == true){
		alert("You confirmed");
	}
	else{
		alert("You cancelled");
	}
}

function changeColor(){
	var purpleback = document.getElementById('purpleback');
	purpleback.className = 'greenback';
	document.getElementById('greenback').className = "purpleback";
}

function changeText(){
	document.getElementById('purpleback').innerHTML = "Tomato";
	document.getElementById('greenback').innerHTML = "Potato";
}

function changeButtonValue(){
	document.getElementById('thirdButton').value = "Changed";
}