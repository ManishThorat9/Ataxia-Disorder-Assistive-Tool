# Ataxia-Disorder-Assistive-Tool
p5.js
()

p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, 
beginners, and anyone else! p5.js is free and open-source because we believe software, and the tools to learn it, should be accessible to everyone.

Using the metaphor of a sketch, p5.js has a full set of drawing functionality using the HTML5 canvas element. You’re not limited to the drawing 
canvas though. You can think of your whole browser page as your sketch, including HTML5 objects for text, input, video, webcam, and sound.

p5.js draws inspiration, wisdom, and guidance from its precursor Processing. However, it is a new interpretation, not an emulation or port.
 We don't aim to match Processing's set of functionality exactly, allowing ourselves space to deviate and grow in the context of the web.


 ml5 =ml5 is a JavaScript library that provides access to various machine learning and deep learning algorithms within the browser. It is 
 built on top of TensorFlow.js and aims to make machine learning accessible to a broad audience of artists, creative coders, and students 12.
  The library provides immediate access in the browser to pre-trained models for detecting human poses, generating text, styling an image with 
  another, composing music, pitch detection, and common English language word relationships, and much more 1. ml5.js is an open-source project 
  that values all contributions. Contributions often take the shape of workshops, design contributions, helping to answer people’s questions 
  on Github, flagging bugs in code, fixing bugs, adding new features, and more


  posenet

Pose estimation refers to computer vision techniques that detect human figures in images and video, so that one could determine, for example
where someone’s elbow, shoulder or foot show up in an image. PoseNet does not recognize who is in an image, it is simply estimating where key body joints are.

This repo contains a set of PoseNet models that are quantized and optimized for use on Coral's Edge TPU, together with some example code to
 shows how to run it on a camera stream.




 ataxia
 1. Understanding Ataxia and Posture Analysis:
Ataxia Disorders: These are neurological disorders that affect coordination, balance, and speech. People with Ataxia often have difficulties in maintaining proper posture and suffer from unsteady movements.
Posture Analysis: Monitoring key body positions (joints, shoulders, hips) can help diagnose and track the progression of Ataxia. Any deviation from the standard posture might indicate issues.
2. Using Pose Detection:
Pose Detection Library: Utilize PoseNet (or a similar library) to detect key body points. PoseNet can provide the coordinates of various body parts in real-time.
3. Building the Tool:
Video Input: Capture the user's video feed using their device's camera. This can be achieved using HTML5's getUserMedia API.
Pose Detection: Use PoseNet to analyze the posture. Identify key body points (shoulders, hips) and track their positions frame by frame.
Data Analysis: Calculate angles between joints. For Ataxia, particular attention might be given to the angles formed by the shoulders, hips, knees, and ankles.
Visualization: Visualize the detected posture. This can be done by drawing lines connecting body parts or by superimposing a skeleton diagram onto the video feed.
Alerts and Feedback: Implement a system to provide feedback. If the tool detects deviations from a standard posture, it could trigger alerts or visual cues.
4. User Interface:
User-Friendly Design: Ensure the tool has an intuitive interface. Users should be able to start/stop the analysis easily.
Visual Feedback: Display the live video feed alongside the analyzed posture. Highlight any deviations or abnormalities.