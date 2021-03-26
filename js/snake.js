class Snake {
    constructor() {
        this.x = headX * tileCount;
        this.y = headY * tileCount;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    draw() {
        ctx.fillStyle = "#3bcf1a";
        ctx.fillRect(this.x, this.y, 10, 10);
    }
    moveSnake(event) {
        // up
        if (event.keyCode == 38 ){
            this.xSpeed = 0;
            this.ySpeed = -1;
        }
        //down
        if (event.keyCode == 40 ) {
            this.xSpeed = 0;
            this.ySpeed = 1;
        }
        if (event.keyCode == 39 ) {
            this.xSpeed = 1;
            this.ySpeed = 0;
        }
        if (event.keyCode == 37) {
            this.xSpeed = -1;
            this.ySpeed = 0;
        }
    }
    changePositionSnake() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}

