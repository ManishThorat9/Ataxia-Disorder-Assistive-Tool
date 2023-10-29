let video;
let poseNet;
let poses = [];
let angle;

function setup() {
  createCanvas(640, 480);  //Creates a canvas
  video = createCapture(VIDEO); // Captures video from the user's webcam
  video.size(width, height);

  poseNet = ml5.poseNet(video, modelReady); // Listens for pose detection results and updates the poses array with the detected keypoints and skeleton connections.
  poseNet.on('pose', function (results) {
    poses = results;
  });
  video.hide(); // Hides the video element 
}

function modelReady() {
  console.log('Model Loaded!'); // confirmation of model loading 
}

function draw() {
  background(0);
  image(video, 0, 0, width, height);  // Draws the video onto the canvas.

  if (poses.length > 0) {          //Checks if PoseNet detected any poses
    let pose = poses[0].pose;     
    let leftShoulder = pose.keypoints[5].position; // Accesses specific keypoints 
    let rightShoulder = pose.keypoints[6].position; //Accesses specific keypoints 
    let leftHip = pose.keypoints[11].position;   //Accesses specific keypoints 
    let rightHip = pose.keypoints[12].position;  // Accesses specific keypoints 

    // Calculate mid-shoulder and mid-hip positions
    let midShoulder = createVector((leftShoulder.x + rightShoulder.x) / 2, (leftShoulder.y + rightShoulder.y) / 2); //Creates vector objects for mid-shoulder and mid-hip positions.
    let midHip = createVector((leftHip.x + rightHip.x) / 2, (leftHip.y + rightHip.y) / 2);

    // Calculate angle between mid-shoulder and mid-hip
    let angleRadians = atan2(midHip.y - midShoulder.y, midHip.x - midShoulder.x); // first calculate the angle in radians 
    angle = degrees(angleRadians);     // convert the angle 

    // Draw keypoints
    for (let i = 0; i < pose.keypoints.length; i++) {
      let keypoint = pose.keypoints[i];
      if (keypoint.score > 0.2) {         // check confidence score is above 0.2
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);  //
      }
    }

    // Draw mid-shoulder and mid-hip points
    fill(0, 255, 0);
    ellipse(midShoulder.x, midShoulder.y, 15, 15);
    fill(0, 0, 255);
    ellipse(midHip.x, midHip.y, 15, 15);

    // Display angle between mid-shoulder and mid-hip
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Angle between mid of shoulder and mid of hip: " + nf(angle, 2, 2) + " degrees", width / 2, height - 20);
  }
}
