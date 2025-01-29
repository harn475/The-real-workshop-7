# Workshop 7
Website: https://harn475.github.io/The-real-workshop-7/
## Overview

This interactive p5.js sketch simulates bees flying around the canvas and interacting with flowers. When a flower is clicked, it disappears for 5 seconds before reappearing at a new random location. The bees, represented by images, continuously move towards the current target, which is the position of the mouse click. The bees also feature a wobbling movement to make their flight patterns more natural and random.

## Features

- **Bee Movement**: Bees move towards the mouse click location, with each bee having a slightly different speed and wobble to create a dynamic, varied movement.
- **Flower Interaction**: When a flower is clicked, it disappears for 5 seconds before reappearing in a new random position. Flowers automatically reappear after 2 seconds if they have been hidden for a while.
- **Random Bee Behavior**: Each bee has a random speed and wobble factor, ensuring that their movement is unique and not uniform.
- **User Interaction**: The bees move towards the mouse position when clicked, and flowers disappear when clicked, adding an interactive element to the sketch.

## Progress (Problem Solving/Code)

- **Bee Movement and Interaction**: The bees are attracted to the mouse position, using trigonometry (the `atan2()` function) to calculate the angle towards the target. They adjust their position by a small amount with some added randomness (wobble) to simulate a more natural flight pattern.
- **Flower Behavior**: Each flower has a timer controlling its visibility. When clicked, a flower disappears for 5 seconds, then reappears at a random position after 2 seconds. This logic was implemented using the `millis()` function to track time.
- **Wobble and Speed Variation**: To make the bees' flight patterns more varied and natural, each bee has a random speed and wobble factor. This ensures that no two bees move in the same way.

## Issues Faced

The main challenge in this project was managing the timing of flower visibility and ensuring the bees moved in a varied but realistic way. The wobble factor for bees was tricky to balance, as it needed to add randomness without making the movement look erratic.

## Final Coding Comments

- **Realistic Bee Movement**: The addition of a random wobble to the bees’ movement gives the bees a more natural, organic flight pattern. The varying speeds and wobble factors make the bee system feel dynamic and interactive.
- **Interactive Elements**: The ability to click flowers to make them disappear and reappear was an important interactive feature. The user can control the flower visibility while also guiding the bees with their clicks.
- **Randomization**: The use of random factors for bee speed, wobble, and flower position ensures that no two runs of the sketch feel the same, making the interaction more engaging.

## Future Development

- **Flower Behavior Enhancement**: I would like to improve the flower behavior by adding a visual effect when a flower disappears and reappears, such as fading in and out.
- **Bee Behavior Expansion**: I could expand the bee behavior by allowing them to "pollinate" the flowers when they reach a flower, triggering a special effect or animation.

## Reflection

This project allowed me to explore random movement, time-based behavior, and interactivity within p5.js. It was enjoyable to see the bees move in different ways each time and the flowers respond to the user’s clicks. I’m happy with the way the bees behave in a varied manner, and I look forward to adding more interactive features and improving the visual effects in future updates.
