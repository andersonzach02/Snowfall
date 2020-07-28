class EquilateralTriangle {

    constructor(baseSegment) {
        this.baseSegment = baseSegment;

        let sideVector = p5.Vector.sub(this.baseSegment.end, this.baseSegment.start);
        sideVector.rotate(-PI/3);

        let heightPoint = p5.Vector.add(this.baseSegment.start, sideVector);

        this.leftSide = new Segment(this.baseSegment.start, heightPoint);
        this.rightSide = new Segment(heightPoint, this.baseSegment.end);
    }

    draw() {
        stroke(255);
        this.leftSide.draw();
        this.rightSide.draw();
        this.baseSegment.draw();
    }

    getSegments() {
        return [
            this.baseSegment,
            this.leftSide,
            this.rightSide
        ];
    }



}