class KochSnowflake {

    #newestSegments;

    constructor(baseTriangle, iterations) {
        this.base = baseTriangle;
        this.numberOfIterations = iterations;
        this.#newestSegments = this.base.getSegments();
    }

    draw() {
        this.#newestSegments.forEach(segment => {
            segment.draw();
        });

        this.updateNewestSegments();
    }

    updateNewestSegments() {
        let updatedSegments = [];

        this.#newestSegments.forEach(segment => {
            updatedSegments = updatedSegments.concat(segment.divide(-PI/3));
        });

        this.#newestSegments = updatedSegments;
    }

}