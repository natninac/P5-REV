"use strict";

let spaceBar = false;
let circleSize = 20;
let r,g,b;



function setup() {
    console.log("go")
    createCanvas(600,600);
    noStroke();
    fill(random(255), random(255), random(255)); 
}


function draw() {
    

background(100,240,125);

if (spaceBar) {
    fill(r, g, b);
}

//grid


for (let x = 25; x < width; x += 25) {
    for (let y = 25; y < height; y += 50) {
        if (mouseIsPressed == false) {
            ellipse(x, y, circleSize); 
        } else {
            rect(x - 10, y - 10, 20, 20);
        }
    }
}

  for (let a = 25; a < width; a += 25) {
    for (let b = 50; b < height; b += 50) {
        if (mouseIsPressed == false) {
             rect(a - 10, b - 10, 20, 20);
            } else {
                ellipse(a, b, circleSize);
           
            }
        }
    }
}


function keyPressed () {
    if (key === ' ') {
        r= random(255);
        g= random(255);
        b= random(255);
        spaceBar = true;
    }
}