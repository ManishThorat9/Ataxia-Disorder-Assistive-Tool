class Vec2 {
  /*
   * A 2D vector
   * @param x The x coordinate
   * @param y The y coordinate
   */
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

class Line {
  /*
   * A line between two points
   * @param p1 The first point
   * @param p2 The second point
   * @property angle The angle of the line in radians
   * @property angle_degrees The angle of the line in degrees
   * @property length The length of the line
   * @method lerp Get a point on the line at a certain percentage between the two points
   */
  constructor(p1, p2) {
    this.p1 = p1
    this.p2 = p2
  }

  /*
   * The angle of the line in radians
   */
  get angle() {
    return Math.atan2(this.p2.y - this.p1.y, this.p2.x - this.p1.x)
  }

  /*
   * The angle of the line in degrees
   */
  get angle_degrees() {
    return (this.angle * 180) / Math.PI
  }

  /*
   * The length of the line
   */
  get length() {
    return Math.sqrt(
      Math.pow(this.p2.x - this.p1.x, 2) + Math.pow(this.p2.y - this.p1.y, 2)
    )
  }

  /*
   * Get a point on the line at a certain percentage between the two points
   * @param percent The percentage between the two points (0-1)
   * @returns The point on the line as a Vec2
   */
  lerp(percent) {
    return new Vec2(
      this.p1.x + percent * (this.p2.x - this.p1.x),
      this.p1.y + percent * (this.p2.y - this.p1.y)
    )
  }
}

function calculate_angles(left_shoulder, right_shoulder, left_hip, right_hip) {
  const shoulder = new Line(left_shoulder, right_shoulder)
  const shoulder_angle = shoulder.angle_degrees
  const shoulder_length = shoulder.length

  const hip = new Line(left_hip, right_hip)
  const hip_angle = hip.angle_degrees
  const hip_length = hip.length

  const mid_shoulder = shoulder.lerp(0.5)
  const mid_hip = hip.lerp(0.5)

  const spine = new Line(mid_shoulder, mid_hip)
  const spine_angle = spine.angle_degrees
  const spine_length = spine.length

  // imagine the body as a stick figure
  //
  //                       O <- head
  //                       |
  // right_shoulder -> ____🅰️___ <- left_shoulder
  //                   |   |   |
  //                   |   |   |
  //                   |   |   |
  //                       |
  //      right_hip -> ____🅱️___ <- left_hip
  //                   |       |
  //                   |       |
  //                   |       |
  //
  // 🅰️ = mid_shoulder
  // 🅱️ = mid_hip
  //
  // spine = line between mid_shoulder and mid_hip
  // shoulder = line between left_shoulder and right_shoulder
  // hip = line between left_hip and right_hip
  //
  // angle of spine is how much the body is leaning sideways

  return {
    spine: {
      original: spine,
      angle: spine_angle,
      length: spine_length
    },
    shoulder: {
      original: shoulder,
      angle: shoulder_angle,
      length: shoulder_length
    },
    hip: {
      original: hip,
      angle: hip_angle,
      length: hip_length
    }
  }
}

function calculateAnglesFromJSON(data) {
  const leftShoulder = data[0].pose.keypoints.find(part => part.part === "leftShoulder").position;
  const rightShoulder = data[0].pose.keypoints.find(part => part.part === "rightShoulder").position;
  const leftHip = data[0].pose.keypoints.find(part => part.part === "leftHip").position;
  const rightHip = data[0].pose.keypoints.find(part => part.part === "rightHip").position;
}
console.log(calculate_angles(264.55948766567366, 558.8219834858342, 382.97286571695645, 545.5249130308396))