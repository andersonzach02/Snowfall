class EquilateralTriangle {

    constructor(baseSegment) {
        this.baseSegment = baseSegment;

        this.sideVector = p5.Vector.sub(this.baseSegment.end, this.baseSegment.start);
        this.sideVector.rotate(-PI/3);

        this.heightPoint = p5.Vector.add(this.baseSegment.start, this.sideVector);
        this.leftSide = new Segment(this.baseSegment.start, this.heightPoint);
        this.rightSide = new Segment(this.heightPoint, this.baseSegment.end);
    }

    draw() {
        stroke(255);
        this.leftSide.draw();
        this.rightSide.draw();
        this.baseSegment.draw();
    }


}