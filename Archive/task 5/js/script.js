"use strict";

let counter = 0;
let radius = 50;
let ellipseAlpha = 0;

let maxCounter = 10;
let minCounter = 1;

let orangeSquare = {
  x: 50,
  y: 30,
  width: 20,
  height: 20,
  fill: "#ff6c03",
  lightfill: "#f7a86f"
};

let redSquare = {
  x: 100,
  y: 30,
  width: 20,
  height: 20,
  fill: "red",
  lightfill: "pink"
};

const circle = {
  x: 300,
  y: 300,
  fill: 255
};

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("black");
  displayCircle();

  if (checkCollisionWithSquare(orangeSquare)) {
    displaySquare(orangeSquare, orangeSquare.lightfill);
  } else {
    displaySquare(orangeSquare, orangeSquare.fill);
  }

  if (checkCollisionWithSquare(redSquare)) {
    displaySquare(redSquare, redSquare.lightfill);
  } else {
    displaySquare(redSquare, redSquare.fill);
  }

  drawEllipses();
}

function displayCircle() {
  noStroke();
  fill(circle.fill, ellipseAlpha);
  ellipse(circle.x, circle.y, radius);
}

function displaySquare(square, fillColor) {
  noStroke();
  fill(fillColor);
  rect(square.x, square.y, square.width, square.height);
}

function checkCollisionWithSquare(square) {
  let distance = dist(mouseX, mouseY, square.x + square.width / 2, square.y + square.height / 2);
    //idk if there's a different way to do this or not
  return distance < max(square.width, square.height) / 2;
}

function mouseClicked() {
  if (checkCollisionWithSquare(orangeSquare) && counter < maxCounter) {
    counter++;
  }

  if (checkCollisionWithSquare(redSquare) && counter > minCounter) {
    counter--;
  }
}

function drawEllipses() {
  if (counter >= minCounter && counter <= maxCounter) {
    let i = 0; 
    let tempRadius = radius;  
    let tempAlpha = 50; 

    while (i < counter) {
      drawCircle(circle.x, circle.y, tempRadius, tempAlpha);
      tempRadius += 40; 
      tempAlpha += 20; 
      i++; 
    }
  }
}

function drawCircle(x, y, r, alpha) {
  fill(circle.fill, alpha);
  ellipse(x, y, r);
}
