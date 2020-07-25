let segment;
let segments = [];
let triangle;


function setup() {
    createCanvas(800, 800);
    background(0);


    let startPoint = createVector(0, height);
    let endPoint = createVector(width, height);

    segment = new Segment(startPoint, endPoint);

    triangle = new EquilateralTriangle(segment);    


    
    segments = segment.divide();

}


function draw() {
    triangle.draw();
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