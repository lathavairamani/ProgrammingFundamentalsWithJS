/**
 * 
 */

function upload(){
	var canvas = document.getElementById("image");
	var fileName = document.getElementById("fileInput");
	var image = new SimpleImage(fileName);
	image.drawTo(canvas);
}