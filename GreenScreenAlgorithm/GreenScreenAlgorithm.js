/**
 * 
 */

 var fgImage;
 var bgImage;
function uploadForegroundImage(){
	var canvas = document.getElementById("fgImage");
	var fileName = document.getElementById("fgInput");
	fgImage = new SimpleImage(fileName);
	fgImage.drawTo(canvas);
}

function uploadBackgroundImage(){
	var canvas = document.getElementById("bgImage");
	var fileName = document.getElementById("bgInput");
	bgImage = new SimpleImage(fileName);
	bgImage.drawTo(canvas);
}

function createComposite(){
	if(fgImage == null || !fgImage.complete()){
		alert("ForeGroundImage Not loaded");
	}
	
	if(bgImage == null || !bgImage.complete()){
		alert("Background Image not loaded");
	}
	else{
		var canvas = document.getElementById("fgImage");
		var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
	
		for (var pixel of fgImage.values()){
		    if(pixel.getGreen() >  pixel.getRed() + pixel.getBlue()){
		        var x = pixel.getX();
		        var y = pixel.getY();
		        var bgPixel = bgImage.getPixel(x, y);
		        output.setPixel(x, y, bgPixel);
		    }
		    else{
		         output.setPixel(pixel.getX(), pixel.getY(), pixel);
		    }
		}
		output.drawTo(canvas);
	}
}

function clearCanvas(){
	var canvas = document.getElementById("fgImage");
	var context = canvas.getContext("2d");
	context.clearRect(0,0,canvas.width, canvas.height);
	canvas = document.getElementById("bgImage");
	context = canvas.getContext("2d");
	context.clearRect(0,0,canvas.width, canvas.height);
	
}