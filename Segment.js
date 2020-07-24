class Segment {

    constructor(startPoint, endPoint) {
        this.start = startPoint;
        this.end = endPoint;
        this.isDivided = false;
        this.subsegments = []
    }

    divide() {

        let newVector = p5.Vector.sub(this.end, this.start);

        newVector.div(3);
    
        this.secondPoint = p5.Vector.add(this.start, newVector);
        this.fourthPoint = p5.Vector.sub(this.end, newVector);
    
        newVector.rotate(-PI/3);
    
        this.thirdPoint = p5.Vector.add(this.secondPoint, newVector);

        this.subsegments.push(new Segment(this.start, this.secondPoint));
        this.subsegments.push(new Segment(this.secondPoint, this.thirdPoint));
        this.subsegments.push(new Segment(this.thirdPoint, this.fourthPoint));
        this.subsegments.push(new Segment(this.fourthPoint, this.end))

    }

    draw() {
        stroke(255);
        this.subsegments.forEach((segment) => {
            line(segment.start.x, segment.start.y, segment.end.x, segment.end.y);
        });
    }





}