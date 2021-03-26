class Food {
    constructor() {
        this.x = 100;
        this.y = 50;
    }
    drawFood() {
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        ctx.stroke();
    }
}