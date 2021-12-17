let bird;
let floorY;
let pipes = [];
let pipeSpeed = 2;
let freeze = true;

function preload() {
    myFont = loadFont('assets/FlappyBirdy.ttf')
    backgroundImg = loadImage('assets/background.png')
    birdImg = loadImage('assets/bird.png')
    floorImg = loadImage('assets/floor.png')
    fastBirdImg = loadImage('assets/fastBird.png')
}

function setup() {

    var canvas = createCanvas(400, 400);

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');

    floorY = 0.9 * height

    bird = new Bird();

    for (let i = 0; i < 3; i++) {
        pipes[i] = new Pipe(width + width / 2 * i)
    }
}

function draw() {
    image(backgroundImg, 0, 0, 450, 450)
    image(floorImg, -100, floorY, width * 2, height - floorY)

    switchBirds();
    // bird
    bird.display();
    pipeSpeed = 2 + bird.score / 10

    //pipes
    for (let i = 0; i < pipes.length; i++) {
        pipes[i].display(bird);
    }
    displayText();

}

function switchBirds() {
    if (bird.constructor.name === "Bird" && bird.score > 10) {
        bird = new FastBird();
    }

    if (bird.constructor.name === "FastBird" && bird.score < 10) {
        bird = new Bird();
    }
}

function displayText() {
    displayScore();
    displayGameOver();
    displayTitle();
}

function displayGameOver() {
    fill(0)
    if (bird.health == 0) {
        textSize(100);
        textFont(myFont);
        textAlign(CENTER, CENTER);
        text('GAME OVER', width / 2, height / 2);
    }
}

function displayScore() {
    textFont('Georgia')
    fill(0)
    textAlign(LEFT, TOP)
    textSize(20)
    text('score: ' + bird.score, 10, 10)
    text('highscore: ' + bird.highscore, 10, 30)
}

function displayTitle() {
    if (freeze == true) {
        textFont(myFont)
        textAlign(CENTER, CENTER)
        textSize(60)
        text('Click to Jump', width / 2, 0.3 * height)
    }
}

//makes the bird jump if alive or reset if dead
function checkBirdLife() {
    freeze = false
        // if bird is dead, then it can't jump anymore
    if (bird.health == 1) { // alive
        bird.jump();
    } else {
        for (let i = 0; i < pipes.length; i++) {
            pipes[i].reset();
        }
        bird.reset();
    }
}

//if mouse is pressed, it does the action above
function mousePressed() {
    checkBirdLife();
}