let segment;
let segments = [];

function setup() {
    createCanvas(400, 400);
    background(0);


    let startPoint = createVector(0, height/2);
    let endPoint = createVector(width, height/2);

    segment = new Segment(startPoint, endPoint);
    
    segments = segment.divide();

}


function draw() {
}

function mouseClicked() {
    background(0);

    let newSegments = [];

    segments.forEach(segment => {
        segment.draw();
        newSegments = newSegments.concat(segment.divide());
    });

    segments = newSegments;
}