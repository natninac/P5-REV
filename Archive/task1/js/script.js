"use strict";

let x= 300;
let y= 200;
let w= 20;
let h=40;
let r=200;
let g=250;
let b=300;

function setup() {
    console.log("go")
    createCanvas(600,600);
    background(355,240,125);
}


function draw() {
push();
noStroke();
fill(r,g,b);
ellipse(x,y,w,h);
pop();


push();
noStroke();
fill(r+20,g+30,b+100);
ellipse(x+100,y+20,w+300,h+20);
pop();

push();
noStroke();
fill(r+30,g+100,b+20);
ellipse(x+100,y+50,w+20,h+100);
pop();
}

