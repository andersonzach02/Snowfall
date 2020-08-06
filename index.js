let segment;
let segments = [];
let triangle;
let snowflake;


function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);

    x = random(width);
    y = random(height);
    
    let startPoint = createVector(x, y);
    let endPoint = createEndpointBasedOnStartpoint(startPoint, 100);
    
    segment = new Segment(startPoint, endPoint);

    triangle = new EquilateralTriangle(segment);    

    snowflake = new KochSnowflake(triangle, 3);
}

function draw() {
    background(0);
    snowflake.draw();
    snowflake.update();
}

// function mouseClicked() {
//     background(0);

//     snowflake.draw();
// }

function createEndpointBasedOnStartpoint(startPoint, desiredLength) {
    return createVector(startPoint.x + desiredLength, startPoint.y);
}