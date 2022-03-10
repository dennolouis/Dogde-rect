export default class Player{
    constructor(x, y, bulletController){
        this.x = x;
        this.y = y;
        this.radius = 25
        this.bulletController = bulletController;
        this.width = 50;
        this.height = 50;
        this.speed = 6;

        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);

    }

    draw(ctx){
        this.move();
        
        // ctx.strokeStyle = "yellow";
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
        // ctx.fillStyle = "black";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = 'w#FF0000';
        ctx.fillStyle = "black";
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.fill();

        this.shoot();
    }

    shoot(){
        if(this.shootPressed){
            const speed = 5;
            const delay = 7;
            const damage = 1;
            const bulletX = this.x;
            const bulletY = this.y - 25;
            this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);

        }
    }

    move(){
        if(this.downPressed){
            this.y += this.speed;
        }
        if(this.upPressed){
            this.y -= this.speed;
        }
        if(this.leftPressed){
            this.x -= this.speed;
        }
        if(this.rightPressed){
            this.x += this.speed;
        }

        if(this.x < this.radius){
            this.x = this.radius;
        }
        if(this.x > 525){
            this.x = 525;
        }
        if(this.y > 575){
            this.y = 575;
        }
        if(this.y < 325){
            this.y = 325;
        }
        
    }

    keydown = (e) => {
        if(e.code === "ArrowUp" | e.code === "KeyW"){
            this.upPressed = true;
        }
        if(e.code === "ArrowDown" | e.code === "KeyS"){
            this.downPressed = true;
        }
        if(e.code === "ArrowLeft" | e.code === "KeyA" ){
            this.leftPressed = true;
        }
        if(e.code === "ArrowRight" | e.code === "KeyD"){
            this.rightPressed = true;
        }
        if(e.code === "Space"){
            this.shootPressed = true;
        }
    }

    keyup = (e) => {
        if(e.code === "ArrowUp" | e.code === "KeyW"){
            this.upPressed = false;
        }
        if(e.code === "ArrowDown" | e.code === "KeyS"){
            this.downPressed = false;
        }
        if(e.code === "ArrowLeft" | e.code === "KeyA" ){
            this.leftPressed = false;
        }
        if(e.code === "ArrowRight" | e.code === "KeyD"){
            this.rightPressed = false;
        }
        if(e.code === "Space"){
            this.shootPressed = false;
        }
    }
}