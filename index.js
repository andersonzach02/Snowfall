let segment;
let segments = [];
let triangle;
let snowflake;


function setup() {
    createCanvas(800, 800);
    background(0);


    let startPoint = createVector(width/2 - 10, height/2 - 10);
    let endPoint = createVector(width/2 + 10, height/2 - 10);

    segment = new Segment(startPoint, endPoint);

    triangle = new EquilateralTriangle(segment);    

    snowflake = new KochSnowflake(triangle, 3);
    

}

function mouseClicked() {
    background(0);

    snowflake.draw();
}