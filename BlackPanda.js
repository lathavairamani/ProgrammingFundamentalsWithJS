/**
 * 
 */
// write your code here
var img = new SimpleImage("smallpanda.png");
print (img);

function setBlack(pixel){
    pixel.setRed(0);
    pixel.setBlue(0);
    pixel.setGreen(0);
    return pixel;
}

for(var pixel of img.values()){
    if(pixel.getX() < 10 || pixel.getY() < 10 || img.getWidth() - pixel.getX() < 10 || img.getHeight() - pixel.getY() < 10){
        setBlack(pixel);
    }
}
print (img);