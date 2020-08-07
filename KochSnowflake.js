class KochSnowflake {

    #newestSegments;
    
    constructor(baseTriangle, iterations) {
        this.base = baseTriangle;
        this.numberOfIterations = iterations;
        this.#newestSegments = this.base.getSegments();
        this.velocity = createVector(0, random(2, 22));
        this.updateNewestSegments();
        
    }

    draw() {
        this.#newestSegments.forEach(segment => {
            segment.draw();
        });
    }

    updateNewestSegments() {
        for(let i = 0; i < this.numberOfIterations; i++){
            let updatedSegments = [];

            this.#newestSegments.forEach(segment => {
                updatedSegments = updatedSegments.concat(segment.divide(-PI/3));
            });

            this.#newestSegments = updatedSegments;
        }   
    }

    update(acceleration) {
        this.#newestSegments.forEach(segment => {
            segment.update(this.velocity);
        });

        this.velocity.add(acceleration);
    }

}