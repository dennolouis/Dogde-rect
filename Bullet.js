export default class Bullet{
    constructor(x, y, speed, damage){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;


        this.width = 5;
        this.hieght = 15;
        this.color = "red";
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.hieght);
        this.y -= this.speed;
    }
}