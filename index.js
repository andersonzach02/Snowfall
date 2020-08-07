let snowfall;


function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);

    snowfall = new Snowfall(100, 4);
}

function draw() {
    background(0);
    snowfall.draw();
}

// function mouseClicked() {
//     background(0);

//     snowflake.draw();
// }

