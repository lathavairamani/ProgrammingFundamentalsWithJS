/**
 * 
 */

function displayText(){
	var context1 = document.getElementById('canvas1').getContext("2d");
	var context2 = document.getElementById('canvas2').getContext("2d");
	
	context1.font = '20px Arial';
	context2.font = '20px Arial';
	
	context1.fillText('Latha', 20, 20);
	context2.fillText('Rajesh', 20, 20);
}

function changeColor(){
	var canvas1 = document.getElementById('canvas1');
	var canvas2 = document.getElementById('canvas2');
	
	canvas1.style.backgroundColor = 'red';
	canvas2.style.backgroundColor = 'yellow';
}

function makeRectangle(){
	var context1 = document.getElementById('canvas1').getContext("2d");
	var context2 = document.getElementById('canvas2').getContext("2d");
	
	context1.fillStyle = 'green';
	context1.fillRect(40,40,40,40);
	
	context2.fillStyle = 'green';
	context2.fillRect(40,40,40,40);
}

function clearRectangle(){
	var context1 = document.getElementById('canvas1').getContext("2d");
	var context2 = document.getElementById('canvas2').getContext("2d");
	
	context1.clearRect(40,40,document.getElementById('canvas1').width,document.getElementById('canvas1').height);
	context2.clearRect(40,40,document.getElementById('canvas2').width,document.getElementById('canvas2').height);
}