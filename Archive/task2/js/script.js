"use strict";

function setup() {
    console.log("go")
    createCanvas(600,600);
    background(355,240,125);
    drawEllipse(100,200,50,50,30,50,40);
    drawEllipse(120,220,70,70,50,80,70);
    drawEllipse(130,230,80,80,80,110,100);
}


function drawEllipse(x,y,w,h,r,g,b) {
    fill(r,g,b); 
    noStroke();
    ellipse(x, y, w, h);
   
}