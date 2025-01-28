let beeSystem = [];
let bee;
let flower;
let targetX, targetY;
let flowers = []; // Array to hold flower objects

function preload() {
  bee = loadImage('bee.png'); 
  flower = loadImage('flower.png');
}

function setup() {
  createCanvas(400, 400);
  
  // Start with a default target in the middle
  targetX = width / 2;
  targetY = height / 2;

  for (let x = 0; x < 7; x++) {
    let rx = random(15, width - 15); // Random initial position for each bee
    let ry = random(15, height - 15);
    let rr = random(20, 50); // Size of the bee
    beeSystem[x] = new Bee(rx, ry, rr); // Create each bee
  }
  
  // Create 5 flowers
  for (let i = 0; i < 5; i++) {
    flowers.push(new Flower());
  }
}

function draw() {
  background(173, 216, 100);
  text('click a flower!', 50, 50)

  // Update and show each bee
  for (let x = 0; x < beeSystem.length; x++) {
    beeSystem[x].move(); // Move the bee towards the target
    beeSystem[x].show(); // Display the bee
    beeSystem[x].checkEdges(); // Ensure the bee stays within bounds
  }

  // Handle flower visibility and timers
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].update(); // Update flower's visibility
    flowers[i].show(); // Display the flower if visible
  }
}

// Update target position when mouse is clicked
function mousePressed() {
  targetX = mouseX; // Set target X to mouse X position
  targetY = mouseY; // Set target Y to mouse Y position
  
  // If a flower is clicked, hide it after a 2-second delay
  for (let i = 0; i < flowers.length; i++) {
    if (flowers[i].visible && dist(mouseX, mouseY, flowers[i].x, flowers[i].y) < 40) {
      flowers[i].startDisappearing(); // Start the disappearing process
    }
  }
}

// Flower class to handle each flower's behavior
class Flower {
  constructor() {
    this.x = random(50, width - 50); // Random X position
    this.y = random(50, height - 50); // Random Y position
    this.visible = true; // Flower starts visible
    this.timer = millis(); // Timer to track visibility
    this.disappearDelay = 5000; // Time before disappearing (5 seconds)
    this.reappearDelay = 2000; // Time before reappearing (2 seconds)
  }

  update() {
    if (this.visible) {
      // Hide flower after 5 seconds
      if (millis() - this.timer > this.disappearDelay) {
        this.visible = false;
        this.timer = millis(); // Reset the timer
      }
    } else {
      // Reappear after 2 seconds
      if (millis() - this.timer > this.reappearDelay) {
        this.setRandomPosition(); // Set a new random position
        this.visible = true; // Make the flower visible again
        this.timer = millis(); // Reset the timer
      }
    }
  }

  show() {
    if (this.visible) {
      image(flower, this.x, this.y, 40, 40); // Display the flower
    }
  }

  // When clicked, start the disappearing process after 2 seconds
  startDisappearing() {
    this.visible = false;
    this.timer = millis(); // Start the timer for the disappearance delay
  }

  // Set a new random position for the flower
  setRandomPosition() {
    this.x = random(50, width - 50);
    this.y = random(50, height - 50);
  }
}

// Bee class to handle each bee's behavior
class Bee {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r; 
    this.speed = random(1, 4); // Random speed for each bee
    this.wobbleAmount = random(1, 3); // Slight random wobble for variation
  }

  move() {
    // Find the angle towards the target position
    let angle = atan2(targetY - this.y, targetX - this.x);

    // Move the bee toward the target with some random variation (wobble)
    this.x += cos(angle) * this.speed + random(-this.wobbleAmount, this.wobbleAmount);
    this.y += sin(angle) * this.speed + random(-this.wobbleAmount, this.wobbleAmount);

    // Gradually slow down as the bees get closer to the target
    let distanceToTarget = dist(this.x, this.y, targetX, targetY);
    if (distanceToTarget < 50) {
      this.speed *= 1; // Slow down when near the target
    }
  }

  show() {
    imageMode(CENTER);
    image(bee, this.x, this.y, this.r, this.r); // Display the bee
  }

  checkEdges() {
    // Keep the bees within the canvas boundaries
    this.x = constrain(this.x, 15, width - 15);
    this.y = constrain(this.y, 15, height - 15);
  }
}
