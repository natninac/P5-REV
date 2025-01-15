"use strict";

let ColorOne={
    r: 20,
    g:30,
    b:300,
}
let ColorTwo={
    r: 190,
    g: 212,
    b: 247,
}
let ColorThree={
    r: 147,
    g: 201,
    b: 230,
}
function setup() {
    console.log("go")
    createCanvas(600,600);
}

function draw(){
    background(355,240,125);

    push();
    noStroke();
    if (mouseX < 200 & mouseY < 600) {fill('white')}
    else {
    fill(ColorOne.r,ColorOne.g,ColorOne.b);}
    rect(0,0,200,height); 
    pop(); 

    push();
    noStroke();
    if (mouseX < 400 & mouseX > 200 & mouseY < 600) {fill('white')}
    else {
    fill(ColorTwo.r,ColorTwo.g,ColorTwo.b);}
    rect(200,0,200,height);
    pop(); 

    push();
    noStroke();if (mouseX < 600 & mouseX > 400 & mouseY < 600) {fill('white')}
    else {
    fill(ColorThree.r,ColorThree.g,ColorThree.b);}
    rect(400,0,200,height);  
    pop(); 
}
