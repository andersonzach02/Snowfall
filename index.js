let startVector;
let endVector;
let zero;
let one;
let two;
let three;

function setup() {
    createCanvas(400, 400);

    startVector = createVector(0, height/2);
    endVector = createVector(width, height/2);

    let newVector = p5.Vector.sub(endVector, startVector);

    newVector.div(3);

    zero = p5.Vector.add(startVector, newVector);
    two = p5.Vector.sub(endVector, newVector);

    newVector.rotate(-PI/3);

    one = p5.Vector.add(zero, newVector);
    

}


function draw() {
    background(0);

    stroke(255);
    line(startVector.x, startVector.y, zero.x, zero.y);
    line(zero.x, zero.y, one.x, one.y);
    line(one.x, one.y, two.x, two.y);
    line(two.x, two.y, endVector.x, endVector.y);

}