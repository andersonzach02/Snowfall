class EquilateralTriangle {

    constructor(baseSegment) {
        let sideVector = p5.Vector.sub(baseSegment.end, baseSegment.start);
        sideVector.rotate(-PI/3);

        let heightPoint = p5.Vector.add(baseSegment.start, sideVector);

        this.leftSide = new Segment(baseSegment.start, heightPoint);
        this.rightSide = new Segment(heightPoint, baseSegment.end);
        this.baseSegment = new Segment(baseSegment.end, baseSegment.start);
    }

    draw() {
        stroke(255);
        this.leftSide.draw();
        this.rightSide.draw();
        this.baseSegment.draw();
    }

    getSegments() {
        return [
            this.leftSide,
            this.rightSide,
            this.baseSegment
        ];
    }



}