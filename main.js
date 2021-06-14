song = "";

function preload()
{
	song = loadSound("music.mp3");
}
scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
rightWristY = 0;

function setup() {
	canvas = createCanvas(600,500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('PoseNet Is Initialized');
}

gotposes(results)
{
	if(results.length > 0)
	{
	  console.log(results);
	  scoreRightWrist = results[0].pose.key
	  points[10].score;
	  scoreLeftWrist = results[0].pose.keypoints[9].score;
	  console.log("scoreRightWright = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);

	  rightWristX = results[0].pose.leftWrist.x;
	  rightWristY = results[0].pose.rightWrist.y;
	  console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWistY);

	  leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
        
  }
}

