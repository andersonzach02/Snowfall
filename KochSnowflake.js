class KochSnowflake {

    #newestSegments;
    
    constructor(baseTriangle, iterations) {
        this.base = baseTriangle;
        this.numberOfIterations = iterations;
        this.#newestSegments = this.base.getSegments();
        for(let i = 0; i < this.numberOfIterations; i++){
            this.updateNewestSegments();
        }   
    }

    draw() {
        this.#newestSegments.forEach(segment => {
            segment.draw();
        });
    }

    updateNewestSegments() {
        let updatedSegments = [];

        this.#newestSegments.forEach(segment => {
            updatedSegments = updatedSegments.concat(segment.divide(-PI/3));
        });

        this.#newestSegments = updatedSegments;
    }

    update() {
        this.#newestSegments.forEach(segment => {
            segment.update();
        })
    }

}