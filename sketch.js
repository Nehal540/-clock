function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(173, 216, 230); // Light blue background

  translate(width / 2, height / 2);
  let side = 300;
  let halfSide = side / 2;

  // Define pastel colors
  let pastelHourHand = color(255, 182, 193); // Light pink
  let pastelMinuteHand = color(144, 238, 144); // Light green
  let pastelSecondHand = color(255, 222, 173); // Light peach
  
  // Draw the clock face
  stroke(0);
  noFill();
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, 0, side, side);

  // Draw Roman numerals
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  let romanNumerals = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
  for (let i = 0; i < 12; i++) {
    let angle = map(i, 0, 12, 0, 360);
    let x = cos(angle - 90) * (halfSide - 30);
    let y = sin(angle - 90) * (halfSide - 30);
    text(romanNumerals[i], x, y);
  }

  // Get the current time
  let h = hour();
  let m = minute();
  let s = second();
  
  // Draw the hour hand
  stroke(pastelHourHand);
  strokeWeight(8);
  let hourAngle = map(h % 12, 0, 12, 0, 360);
  push();
  rotate(hourAngle);
  line(0, 0, 0, -halfSide * 0.5);
  pop();
  
  // Draw the minute hand
  stroke(pastelMinuteHand);
  strokeWeight(6);
  let minuteAngle = map(m, 0, 60, 0, 360);
  push();
  rotate(minuteAngle);
  line(0, 0, 0, -halfSide * 0.75);
  pop();
  
  // Draw the second hand
  stroke(pastelSecondHand);
  strokeWeight(4);
  let secondAngle = map(s, 0, 60, 0, 360);
  push();
  rotate(secondAngle);
  line(0, 0, 0, -halfSide * 0.9);
  pop();
}
