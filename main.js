 Status = "";
 
 function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 480, 380);
}

function start_detection()
{
     objectDetector = ml5.objectDetector('cocossd', modelLoaded);
     document.getElementById("status").innerHTML = "Status : Detecting Objects";
     document.getElementById("text_input").value;
}

function modelLoaded()
{
    console.log("Model Loaded!");
    Status = true;
    
}