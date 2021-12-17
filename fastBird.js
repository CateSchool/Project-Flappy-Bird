class FastBird extends Bird {

    constructor() {
        super();
        this.score = bird.score
        this.highscore = bird.highscore
        this.aMax = 0.35;   
    }

    display() {
           super.display();
    }

    displayBird() {
        image(fastBirdImg, this.x - 35, this.y - 25, this.size * 2.5, this.size * 2.5)
    }
}
