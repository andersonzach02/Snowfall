class Segment {

    constructor(startPoint, endPoint) {
        this.start = startPoint;
        this.end = endPoint;
        this.subsegments = []
    }

    divide(angle) {
        let newVector = p5.Vector.sub(this.end, this.start);

        newVector.div(3);
    
        this.secondPoint = p5.Vector.add(this.start, newVector);
        this.fourthPoint = p5.Vector.sub(this.end, newVector);
    
        newVector.rotate(angle);
    
        this.thirdPoint = p5.Vector.add(this.secondPoint, newVector);

        this.subsegments.push(new Segment(this.start, this.secondPoint));
        this.subsegments.push(new Segment(this.secondPoint, this.thirdPoint));
        this.subsegments.push(new Segment(this.thirdPoint, this.fourthPoint));
        this.subsegments.push(new Segment(this.fourthPoint, this.end))

        return this.subsegments;
    }

    draw() {
        stroke(255);
        line(this.start.x, this.start.y, this.end.x, this.end.y);
    }

}