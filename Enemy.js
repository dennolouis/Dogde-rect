export default class Enemy{
    constructor(x, y, color, health){
        this.x = x;
        this.y = y;
        this.speed = 0.5;
        this.xDirection = 1;
        this.yDirection = 1;
        this.color = color;
        this.health = health;
        this.width = 50;
        this.height = 50;
    }

    draw(ctx){
        this.move();
        ctx.fillStyle = this.color;
        if(this.health > 1){
            ctx.strokeStyle = "white";
        }
        else{
            ctx.strokeStyle = this.color;
        }

        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x, this.y, this.width, this.height);

        //draw health text
        ctx.fillStyle = "black";
        ctx.font = "25px Arial";
        ctx.fillText(this.health, this.x + this.width/3.5, this.y + this.height/1.5);
    }

    move(){
        
        this.x += this.xDirection
        this.y += this.yDirection

       if(this.x < 0 | this.x > 500){
           this.xDirection = -this.xDirection;
       }
       if(this.y < 0 | this.y > 250){
            this.yDirection = -this.yDirection;
        }
    }

    takeDamage(damage){
        //this.health -= damage;
        this.health --;
    }
}