let segment;

function setup() {
    createCanvas(400, 400);
    background(0);


    let startPoint = createVector(0, height/2);
    let endPoint = createVector(width, height/2);

    segment = new Segment(startPoint, endPoint);
    

}


function draw() {

}

function mouseClicked() {
    segment.draw();
}