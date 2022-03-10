import Player from "./Player.js";
import Enemy from "./Enemy.js";
import BulletController from "./BulletController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 550;
canvas.height = 600;

const bulletController = new BulletController(canvas);
const player = new Player(canvas.width/2.2, canvas.height/1.3, bulletController);

const enemies = [
    new Enemy(50, 250, "green", 25),
    new Enemy(100, 200, "red", 20),
    new Enemy(450, 100, "gold", 15),
    new Enemy(0, 300, "blue", 10),
    new Enemy(250, 100, "blue", 5),
];

function gameLoop(){
    setCommonStyle();
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  bulletController.draw(ctx);
  player.draw(ctx);
  
  enemies.forEach((enemy)=>{
      if(bulletController.collideWith(enemy)){
          const index = enemies.indexOf(enemy);
          enemies.splice(index, 1);
      }
      else{
          enemy.draw(ctx);
      }
  });
}

function setCommonStyle(){
    ctx.shadowColor = "#d53";
    ctx.shadowBlur = 20;
    ctx.lineJoin = "bevel";
    ctx.lineWidth = 5;
}


setInterval(gameLoop, 1000/60);