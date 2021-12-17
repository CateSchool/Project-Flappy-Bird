class Bird {

    constructor() {
        this.aMax = 0.25;
        this.size = 0.05 * width;
        this.highscore = 0;
        this.reset();
    }

    display() {
        this.displayBird();
        this.birdMove();
        this.birdAcceleration();
        this.birdCantEscape();
    }
    birdMove() {
        if (freeze == false) {
            this.vy = this.vy + this.ay
            this.y = this.y + this.vy;
        }
    }
    displayBird() {
        image(birdImg, this.x - 35, this.y - 25, this.size * 4, this.size * 2)
    }
    birdAcceleration() {
        //acceleration gradually returns to aMax
        if (this.ay < this.aMax) {
            this.ay = this.ay + 0.4;
        } else {
            this.ay = this.aMax; //limits a to aMax
        }
    }

    birdCantEscape() {
        //stops bird from going above top of the screen
        if (this.y < 0) {
            this.y = 0;
            this.vy = 0;
            this.ay = this.aMax;
            this.health = 0;
        }
        // stops bird from going below the floor
        if (this.y > this.floor) {
            this.vy = 0;
            this.ay = 0;
            this.y = this.floor;
            this.health = 0;
        }
    }

    jump() {
        this.vy = 0;
        this.ay = -1.7; // makes it accelerate upwards, against gravity
    }

    reset() {
        if (this.score > this.highscore) {
            this.highscore = this.score;
        }
        this.x = width / 3;
        this.y = height / 2;
        this.vy = 0;
        this.ay = this.aMax;
        this.health = 1;
        this.floor = floorY
        this.score = 0;
    }
}