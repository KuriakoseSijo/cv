var i =0;
var images = [];
var time = 3500;

//image list 
images[0] = "images/Image1.JPG";
images[1] = "images/Image2.JPG";
images[2] = "images/Image3.JPG";
images[3] = "images/Image4.JPG";
images[4] = "images/Image5.JPG";
images[5] = "images/Image6.JPG";


function changeImg(){
    document.slide.src = images[i];


    if(i < images.length-1)
    {
        i++;
    }
    else
    {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;