/**
 * 
 */

function changeColor(){
	var canvas1 = document.getElementById('canvas1');
	
	canvas1.style.backgroundColor = 'red';
}

function doColor(){
	var canvas1 = document.getElementById('canvas1');
	
	var colorPicker = document.getElementById('secondButton');
	
	canvas1.style.backgroundColor = colorPicker.value;
}

function drawSquare(){
	var context1 = document.getElementById('canvas1').getContext("2d");
	var sliderLen = document.getElementById('thirdButton').value;
	
	context1.clearRect(0,0,canvas1.width,canvas1.height);
	context1.fillStyle = 'green';
	context1.fillRect(40,40,sliderLen,sliderLen);
}