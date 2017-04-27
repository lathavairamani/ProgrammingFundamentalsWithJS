/**
 * 
 */

var image;
var canvas;
function upload(){
	canvas = document.getElementById("image");
	var fileName = document.getElementById("fileInput");
	image = new SimpleImage(fileName);
	image.drawTo(canvas);
}

function makeGrayScale(){
	if(image == null || !image.complete()){
		alert("Image is  not loaded");
	}else{
		for(var pixel of image.values()){
			var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
			pixel.setRed(avg);
			pixel.setBlue(avg);
			pixel.setGreen(avg);
		}
		image.drawTo(canvas);
	}
}

function makeRed(){
	if(image == null || !image.complete()){
		alert("Image is  not loaded");
	}else{
		for(var pixel of image.values()){
			var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
			if(avg < 128){
				pixel.setRed(2 * avg);
				pixel.setBlue(0);
				pixel.setGreen(0);
			}
			else{
				pixel.setRed(255);
				pixel.setBlue(2 * avg -255);
				pixel.setGreen(2 * avg - 255);
			}
		}
		image.drawTo(canvas);
	}
}

function reset(){
	if(image == null || !image.complete()){
		alert("Image is  not loaded");
	}else{
		var context = canvas.getContext("2d");
		context.clearRect(0,0,image.width, image.height);
		image = null;
	}
}

function makeRainbow(){
	if(image == null || !image.complete()){
		alert("Image is  not loaded");
	}else{
		for(var pixel of image.values()){
			var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
			// make red
			if(pixel.getY() < image.height / 7){
				if(avg < 128){
					pixel.setRed(2 * avg);
					pixel.setBlue(0);
					pixel.setGreen(0);
				}
				else{
					pixel.setRed(255);
					pixel.setBlue(2 * avg -255);
					pixel.setGreen(2 * avg - 255);
				}
			}
			//make orange
			else if(pixel.getY() > image.height / 7 && pixel.getY() < 2 * (image.height / 7)){
				if(avg < 128){
					pixel.setRed(2 * avg);
					pixel.setBlue(0);
					pixel.setGreen(0.8*avg);
				}
				else{
					pixel.setRed(255);
					pixel.setBlue(2 * avg -255);
					pixel.setGreen(1.2 * avg - 51);
				}
			}
			//make yellow
			else if(pixel.getY() > 2 * (image.height / 7) && pixel.getY() < 3 * (image.height / 7)){
				if(avg < 128){
					pixel.setRed(2 * avg);
					pixel.setBlue(0);
					pixel.setGreen(2*avg);
				}
				else{
					pixel.setRed(255);
					pixel.setBlue(2 * avg -255);
					pixel.setGreen(255);
				}
			}
			// make green
			else if(pixel.getY() > 3 * (image.height / 7) && pixel.getY() < 4 * (image.height / 7)){
				if(avg < 128){
					pixel.setRed(0);
					pixel.setBlue(0);
					pixel.setGreen(2*avg);
				}
				else{
					pixel.setRed(2*avg - 255);
					pixel.setBlue(2*avg - 255);
					pixel.setGreen(255);
				}
			}
			// make blue
			else if(pixel.getY() > 4 * (image.height / 7) && pixel.getY() < 5 * (image.height / 7)){
				if(avg < 128){
					pixel.setRed(0);
					pixel.setBlue(2*avg);
					pixel.setGreen(0);
				}
				else{
					pixel.setRed(2*avg - 255);
					pixel.setBlue(255);
					pixel.setGreen(2 * avg - 255);
				}
			}
			// make indigo
			else if(pixel.getY() > 5 * (image.height / 7) && pixel.getY() < 6 * (image.height / 7)){
				if(avg < 128){
					pixel.setRed(0.8 * avg);
					pixel.setBlue(2*avg);
					pixel.setGreen(0);
				}
				else{
					pixel.setRed(1.2*avg-51);
					pixel.setBlue(255);
					pixel.setGreen(2 * avg - 255);
				}
			}
			// make violet
			else{
				if(avg < 128){
					pixel.setRed(1.6 * avg);
					pixel.setBlue(1.6*avg);
					pixel.setGreen(0);
				}
				else{
					pixel.setRed(0.4*avg+153);
					pixel.setBlue(0.4*avg+153);
					pixel.setGreen(2 * avg - 255);
				}
			}
		}
		image.drawTo(canvas);
	}
}

function makeBlur(){
	for(var pixel of image.values()){
		if(Math.random() > 0.5){
			var randomVal = Math.floor(Math.random() * (10 - 3)) + 3;
			var randomPixel = new SimplePixel(image, pixel.getX() + randomVal, pixel.getY() + randomVal);
			if(randomPixel.getX() < image.width && randomPixel.getY() < image.height){
				pixel.setRed(randomPixel.getRed());
				pixel.setGreen(randomPixel.getGreen());
				pixel.setBlue(randomPixel.getBlue());
			}
		}
	}
	image.drawTo(canvas);
}

function makeBlackSquare(){
	var radius = 10;
	for(var pixel of image.values()){
		if((pixel.getX() == image.width /2 + 10 && (pixel.getY() <= image.height/2+10 && pixel.getY() >= image.height/2-10)) ){
			pixel.setRed(0);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
		if((pixel.getX() == image.width /2 - 10 && (pixel.getY() <= image.height/2+10 && pixel.getY() >= image.height/2-10)) ){
			pixel.setRed(0);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
		if((pixel.getY() == image.height /2 + 10 && (pixel.getX() <= image.width/2+10 && pixel.getX() >= image.width/2-10)) ){
			pixel.setRed(0);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
		if((pixel.getY() == image.height /2 - 10 && (pixel.getX() <= image.width/2+10 && pixel.getX() >= image.width/2-10)) ){
			pixel.setRed(0);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
	}
	image.drawTo(canvas);
//	var context = canvas.getContext("2d");
//	context.fillStyle = "black";
//	context.fillRect(100,100,50,50);
}
