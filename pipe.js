class Pipe {

    constructor(x) {
        this.x0 = x
        this.gapWidth = 0.15 * width
        this.gapHeight = 0.3 * height
        this.x = x
        //map(num, low, high, newLow, newHigh)
        //random(lowest, highest)
        this.topGap = map(random(0, 1), 0, 1, 0.1 * height, 0.6 * height)

    }
    display(bird) {
        // draw pipe
        this.displayPipe();
        //move the pipes to the right
        this.movePipes(bird);
         // change the score
         this.updateScore(bird);
        // bird collision
        this.birdCollison(bird);
        
    }

    displayPipe() {
        fill(92, 145, 65)
        rect(this.x, 0, this.gapWidth, this.topGap)
        fill(92, 145, 65)
        rect(this.x, this.topGap + this.gapHeight, this.gapWidth, height - this.topGap - this.gapHeight)
    }
    movePipes(bird) {
        if (freeze == false && bird.health == 1) {
            this.x = this.x - pipeSpeed
        }
        if (this.x < -width / 2) {
            //move to the right
            this.x = width + this.gapWidth / 2
            this.topGap = map(random(0, 1), 0, 1, 0.1 * height, 0.6 * height)
             //restore the score
             this.score = 1
   
        }
    }
    updateScore() {
        //bird pases the pipe
        if (bird.x > this.x + this.gapWidth && this.score > 0 ) {
            //passing the score to the bird
            this.score--;
            bird.score++;
        }
    }

    birdCollison(bird) {
        if (bird.x + bird.size / 2 >= this.x && bird.x - bird.size / 2 <= this.x + this.gapWidth) {
            if (bird.y - bird.size / 2 <= this.topGap || bird.y + bird.size / 2 >= this.topGap + this.gapHeight) {
                bird.health = 0

                //die within the gap
                if (bird.x > this.x && bird.x < this.x + this.gapWidth) {
                    bird.floor = this.topGap + this.gapHeight
                }
            }
        }
    }

    reset() {
        this.x = this.x0
        this.topGap = map(random(0, 1), 0, 1, 0.1 * height, 0.6 * height)
        this.score = 1
    }
}