let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton;
let actor_img;
let leftShoulder, rightShoulder, leftHip, rightHip;
let specs,smoke;


function setup() { // canvas setup -> run as ones 
    createCanvas(800, 500);
    capture = createCapture(VIDEO) //store capture video 
    capture.hide(); // actual video is hide 

    posenet = ml5.poseNet(capture, modelLoaded); // deep learning model (send the captured video , keyword)
    posenet.on('pose',receivedPoses); // event listner 

    actor_img = loadImage('images/shahrukh.png');
    specs = loadImage('images/spects.png');
    smoke = loadImage('images/cigar.png');

}

function receivedPoses(poses){
    // console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        leftShoulder = poses[0].leftShoulder
        skeleton = poses[0].skeleton;
    }
    // console.log(noseX + " " + noseY );

}


function modelLoaded() {
    console.log('Model has loaded');
}

function draw() { // draw the (point,line , triangle ,rectangle,circle)skeleton

    // images and videos(webcam)
    image(capture, 0, 0);
    fill(255,0,0);   /// fill shape with color 

    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
        }
        stroke(255,255,255);         // outline color
        strokeWeight(5);             // thickness of outline 
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }

        //image(specs,singlePose.nose.x-35,singlePose.nose.y-50,80,80);
        //image(smoke,singlePose.nose.x-35,singlePose.nose.y+10,40,40);

        
    }

    

}


