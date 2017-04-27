/**
 * 
 */

var image;
var grayImage;

function upload(){
	var canvas = document.getElementById("image");
	var fileName = document.getElementById("fileInput");
	image = new SimpleImage(fileName);
	image.drawTo(canvas);
}

function makeGray(){
	for(var pixel of image.values()){
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
		
	}
	var canvas = document.getElementById("grayImage");
	image.drawTo(canvas);
	
}