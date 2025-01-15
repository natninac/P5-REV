"use strict";
let clickSquare= {
    x: 100, 
    y: 100, 
    width: 20,
    height: 20,
}

let spaceSquare={
    x: 150, 
    y: 200, 
    width: 20,
    height:50,
}

let oneDirectionSquare={
    x: 500, 
    y: 250, 
    width: 20,
    height: 50,
}

function setup() {
    console.log("go")
    createCanvas(600,600);
    
}

function draw(){
    background(355,240,125);
    drawClickSquare();
    drawSpaceSquare();
    drawOneDirectionSquare();
    moveOneDirectionSquare();
}

function drawClickSquare() {
    push();
    fill('red');
    noStroke();
    rect(clickSquare.x,clickSquare.y,clickSquare.width, clickSquare.height);
    pop();
}

function drawSpaceSquare() {
    push();
    fill('red');
    noStroke();
    rect(spaceSquare.x,spaceSquare.y,spaceSquare.width, spaceSquare.height);
     pop();
}

function drawOneDirectionSquare() {
    push();
    fill(mouseY,mouseY,mouseX);
    noStroke();
    rect(oneDirectionSquare.x,oneDirectionSquare.y,oneDirectionSquare.width, oneDirectionSquare.height);
    pop();
}

function moveOneDirectionSquare() {

    if (oneDirectionSquare.y > 600) {
        oneDirectionSquare.y = 250
    } else {
        oneDirectionSquare.y += 5
    } 
}


function mouseClicked(){
 clickSquare.x += 1;
 clickSquare.y += 1;
}

function keyPressed(){
    if (keyCode === 32) {
    spaceSquare.x += 5;
    }
}