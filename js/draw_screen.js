const canvas = document.getElementById('screen_game');
const ctx = canvas.getContext('2d');

let box = 20;
let snake = [];
snake[0] = {
    x: 9*box,
    y: 10*box
}

let food = {
    x: (Math.floor(Math.random() * 20 - 1) +1 ) * box,
    y: (Math.floor(Math.random() * 20 - 1) +1 ) * box
}
let score = 0;
let foodImage = new Image();
foodImage.src = "img/apple1.png";

//radio
// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

let d;
document.addEventListener('keydown', direction);
function direction(event) {
    if (event.keyCode === 37 && d !== 'right') {
        d = 'left';
        left.play();
    } else if (event.keyCode === 38 && d !== 'down') {
        d = 'up';
        up.play();
    } else if (event.keyCode === 39 && d !== 'left') {
        d = 'right';
        right.play();
    } else if (event.keyCode === 40 && d !== 'up') {
        d = 'down';
        down.play();
    }
}
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x === array[i].x && head.y === array[i].y){
            return true;
        }
    }
    return false;
}

function draw() {
     ctx.clearRect(0 ,0, canvas.width, canvas.height);
     for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i===0) ? '#ac1e3f' : '#b8a728';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = 'red';
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
        ctx.drawImage(foodImage, food.x, food.y, box, box);

       // old  head  position
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

         // which direction
         if (d === 'left') snakeX -= box;
         if (d === 'up') snakeY -= box;
         if (d === 'right') snakeX += box;
         if (d === 'down') snakeY += box;

         // // Đi qua tường
         // if (snakeX > canvas.width ) {snakeX = 0};
         // if (snakeY > canvas.height ) {snakeY = 0};
         // if (snakeX < 0 ) {snakeX = canvas.width};
         // if (snakeY < 0 ) {snakeY = canvas.height};

           // when snake eats food.
         if (snakeX === food.x && snakeY === food.y) {
             food = {
                 x: (Math.floor(Math.random() * 20 - 1) + 1) * box,
                 y: (Math.floor(Math.random() * 20 - 1) + 1) * box
             }
             eat.play();
             score++;
         } else {
             snake.pop();
         }
         // add new Head
            let newHead = {
                x: snakeX,
                y: snakeY
            }
               // Game over
          if( snakeX < 0 || snakeY < 0 || snakeX === canvas.width || snakeY === canvas.height  || collision(newHead,snake)) {
              // ctx.fillStyle = "white";
              ctx.font = "50px Verdana";

              let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
              gradient.addColorStop("0", " magenta");
              gradient.addColorStop("0.5", "blue");
              gradient.addColorStop("1.0", "red");
              // Fill with gradient
              ctx.fillStyle = gradient;
              ctx.fillText("Game Over!", canvas.width / 6, canvas.height / 2);
              clearInterval(game);
              dead.play();
          }
            snake.unshift(newHead);
        ctx.fillStyle = 'white';
        ctx.font = "15px Verdana";
        ctx. fillText('Score: ' + score,+ box - 5, box -5);
}

 let game = setInterval(draw, 150 );




















