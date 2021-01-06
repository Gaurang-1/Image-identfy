Webcam.set({
    height:300,
    width:310,
    image_format:'png',
    png_quality:90,

    constraints: {
        facingMode : "enviorment"
    }
}
);

camera=document.getElementById("camera");

Webcam.attach("#camera");