let snowfall;


function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);

    let acceleration = createVector(0, 0.25);

    snowfall = new Snowfall(10, acceleration);
}

function draw() {
    background(0);
    snowfall.draw();
}

// function mouseClicked() {
//     background(0);

//     snowflake.draw();
// }

