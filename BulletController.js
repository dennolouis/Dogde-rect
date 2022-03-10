//import Bullet from "./Bullet";

class Bullet{
    constructor(x, y, speed, damage){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;


        this.width = 5;
        this.height = 15;
        this.color = "red";
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        this.y -= this.speed;
    }

    collideWith(sprite){
        if( this.x < sprite.x + sprite.width &&
            this.x + this.width > sprite.x &&
            this.y < sprite.y + sprite.height &&
            this.y + this.height > sprite.y){
                sprite.takeDamage(this.damage);
                return true;
            }
        return false;
    }
}

export default class bulletController{
    bullets = [];
    timerTillNextBullet = 0;
    constructor(canvas){
        this.canvas = canvas;
    }

    shoot(x, y, speed, damage, delay){
        if(this.timerTillNextBullet <= 0){
            this.bullets.push(new Bullet(x, y, speed, damage));
            this.timerTillNextBullet = delay;
        }
        this.timerTillNextBullet--;
    }
    draw(ctx){
        this.bullets.forEach((bullet) => {
            if(this.isBulletOffScreen(bullet)){
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1);
            }
            bullet.draw(ctx);
            
        });
    }

    collideWith(sprite){
        return this.bullets.some(bullet=>{
            if(bullet.collideWith(sprite)){
                this.bullets.splice(this.bullets.indexOf(bullet), 1);
                return true;
            }
            return false;
        });
    }

    isBulletOffScreen(bullet){
        return bullet.y <= -bullet.height;
    }
}