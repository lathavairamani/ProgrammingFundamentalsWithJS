/**
 * 
 */

// write your code here
var image = new SimpleImage("drewRobert.png");
print(image);

var bgImage = new SimpleImage("dinos.png");

var output = new SimpleImage(image.getWidth(), image.getHeight());

for (var pixel of image.values()){
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
print(output);