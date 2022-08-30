fontX = 0;
fontY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 550);
    canvas.position(150, 560);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialized");
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        fontX = results[0].pose.font.x;
        fontY = results[0].pose.font.y;
        console.log("fontX = " + fontX + "fontY = " + fontY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}

function draw(){
background('#969A97');

    document.getElementById("square_side").innerHTML = "Width And Height of a Font Text will be = " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square(fontX, fontY, difference);
}
