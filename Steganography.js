/**
 * 
 */

// write your code here
var show = new SimpleImage("chapel.png");
var hide = new SimpleImage("palm-and-beach.png");
var cropImage = crop(hide, show.width, show.height);
show = chop2Hide(show);
hide = shift(hide);
var answer = combine(show, hide);
print(show);

print(hide);
print(answer);

answer = extract(answer);
print(answer);

function crop(image, width, height){
    var newImage = new SimpleImage(width, height);
    for(var pixel of newImage.values()){
        var x = pixel.getX();
        var y = pixel.getY();
        var oldPixel = image.getPixel(x, y);
        pixel.setRed(oldPixel.getRed());
        pixel.setGreen(oldPixel.getGreen());
        pixel.setBlue(oldPixel.getBlue());
    }
    return newImage;
}

function clearBits(val){
    return Math.floor(val/16) * 16;
}

function chop2Hide(image){
    for(var pixel of image.values()){
        pixel.setRed(clearBits(pixel.getRed()));
        pixel.setGreen(clearBits(pixel.getGreen()));
        pixel.setBlue(clearBits(pixel.getBlue()));
    }
    return image;
}

function shift(image){
    for(var pixel of image.values()){
        pixel.setRed(pixel.getRed()/16);
        pixel.setGreen(pixel.getGreen()/16);
        pixel.setBlue(pixel.getBlue()/16);
    }
    return image;
}

function combine(show, hide){
    var finalImage = new SimpleImage(show.width, show.height);
    for (var pixel of finalImage.values()){
        var x = pixel.getX();
        var y = pixel.getY();
        var showPixel = show.getPixel(x, y);
        var hidePixel = hide.getPixel(x, y);
        pixel.setRed(showPixel.getRed() + hidePixel.getRed());
        pixel.setGreen(showPixel.getGreen() + hidePixel.getGreen());
        pixel.setBlue(showPixel.getBlue() + hidePixel.getBlue());
    }
    return finalImage;
}

function shiftBits(val){
    return Math.floor(val % 16) * 16;
}

function extract(image){
    var show = new SimpleImage(image.width, image.height);
    var hide = new SimpleImage(image.width, image.height);
    for(var pixel of hide.values()){
        var px = image.getPixel(pixel.getX(), pixel.getY());
        pixel.setRed(shiftBits(px.getRed()));
        pixel.setGreen(shiftBits(px.getGreen()));
        pixel.setBlue(shiftBits(px.getBlue()));
    }
    return hide;
}