"use strict";

const type = {
    x: 20,
    y: 50,
    fill: "white",
    size: 28,
    yOffset: 30,
}


function setup() {
    createCanvas(600, 600);
    background('blue');

    textSize(type.size);
    fill(type.fill);
    text('test', width / 2, height / 2);


    for (let i = 0; i < 10; i++) {
        const xOffset = i * 20;
        textSize(type.size);
        fill(type.fill);
        text(i, type.x + xOffset, type.y)
    }

    for (let i = 15; i > 0; i--) {
        const yOffset = (15 - i) * 30;
        textSize(type.size);
        fill(type.fill);
        text(i, type.x, 80 + yOffset);
    }
}

function draw() {

}
