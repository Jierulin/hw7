//hw6.snake challege(stop when snake head hit body

var SNAKE_BLOCK_SIZE = 20;

var s=0

var snakeHead = {
  x: 100,
  y: 100
}
var snakeSegments = [];

var snakeDirection = "right"; // or "down", etc.

var foodLocation = {
  x: 200,
  y: 200
}

function setup() {
  createCanvas(400, 400);
  frameRate(2);
  
  // add 2 segments
  extendSnake();
  extendSnake();
  
  background(0);
  drawSegment(snakeHead);

}

function draw() {
  background(0);

  moveSnake();
  checkFoodReached();
  hitboundery(snakeHead);

  // draw snake head
  drawSegment(snakeHead);
    
  // draw snake body
  snakeSegments.forEach(drawSegment);
  
  // draw food location
  ellipse(foodLocation.x, foodLocation.y, SNAKE_BLOCK_SIZE, SNAKE_BLOCK_SIZE);

	snakeHitbody(snakeHead);
}

function drawSegment(segment) {
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(segment.x, segment.y, SNAKE_BLOCK_SIZE, SNAKE_BLOCK_SIZE);
}  

function moveSnake() {
  // add snakeHead to front of segments array
  snakeSegments.unshift({x: snakeHead.x, y: snakeHead.y});
  // remove last element of the segments array
  snakeSegments.pop();
  
  if (snakeDirection == "up") {
    snakeHead.y = snakeHead.y - SNAKE_BLOCK_SIZE;
  } else if (snakeDirection == "down") {
    snakeHead.y = snakeHead.y + SNAKE_BLOCK_SIZE;
  } else if (snakeDirection == "left") {
    snakeHead.x = snakeHead.x - SNAKE_BLOCK_SIZE;
  } else if (snakeDirection == "right") {
    snakeHead.x = snakeHead.x + SNAKE_BLOCK_SIZE;
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    snakeDirection = "up";
  } else if (keyCode == DOWN_ARROW) {
    snakeDirection = "down";
  } else if (keyCode == RIGHT_ARROW) {
    snakeDirection = "right";
  } else if (keyCode == LEFT_ARROW) {
    snakeDirection = "left";
  }
}

function extendSnake() {
  // get the last segment -- or the head segment if there aren't any segments
  var lastSegment = snakeSegments[snakeSegments.length-1] || snakeHead;
  // duplicate last segment
  snakeSegments.push({x: lastSegment.x, y: lastSegment.y}); 
}

function checkFoodReached() {
	

	
  if (dist(snakeHead.x, snakeHead.y, foodLocation.x, foodLocation.y) == 0) {
    foodLocation.x = SNAKE_BLOCK_SIZE * floor(random(width / SNAKE_BLOCK_SIZE));
    foodLocation.y = SNAKE_BLOCK_SIZE * floor(random(height / SNAKE_BLOCK_SIZE));
		
		s=s+1
		textSize(32);
		text("score: "+s, 10, 30);
		
    // make the snake longer!
    extendSnake();		

  }
}

	function hitboundery(){
	if(snakeHead.x>=400||snakeHead.x<=0||snakeHead.y>=400||snakeHead.y<=0){
		 textSize(13);
		text("you exceed the boundery!!",10,30)
		 noLoop();
		
}
}
	function snakeHitbody(){
		if(snakeHead.x==snakeSegments.x || snakeHead.y==snakeSegments.y){
			noLoop();
		}
		}
