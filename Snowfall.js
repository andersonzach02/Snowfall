class Snowfall {

    constructor(numberOfSnowflakes, snowflakeSpeed) {
        this.snowflakes = [];
        this.numberOfSnowflakes = numberOfSnowflakes;
        this.snowflakeSpeed = snowflakeSpeed;
        this.generateSnowfall();
    }

    generateSnowfall() {
        for(let i = 0; i < this.numberOfSnowflakes; i++) {
            let snowflake = this.generateSnowflake(4, 4);
            this.snowflakes.push(snowflake);
        }
    }
    
    generateSnowflake(maxSize, iterations) {
        let startPoint = createVector(random(width), random(height));
        let endPoint = this.createEndpointBasedOnStartpoint(startPoint, random(1, maxSize));

        let segment = new Segment(startPoint, endPoint);

        let snowflakeBase = new EquilateralTriangle(segment);

        return new KochSnowflake(snowflakeBase, iterations);
    }

    createEndpointBasedOnStartpoint(startPoint, desiredLength) {
        return createVector(startPoint.x + desiredLength, startPoint.y);
    }

    draw() {
        this.snowflakes.forEach(snowflake => {
            snowflake.draw();
            snowflake.update(this.snowflakeSpeed);
        });
    }
}