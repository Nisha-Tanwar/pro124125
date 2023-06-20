leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup(){

        canvas=createCanvas(540,480);
        canvas.position(900,220);
        video=createCapture(VIDEO);
        video.position(200,220);
        video.size(540,480);
    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#a2a3a2");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#eb38df");
    text('Radhe-Radhe',50,100);
}

function modelDone(){
    console.log("PoseNet Is Initialized");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}