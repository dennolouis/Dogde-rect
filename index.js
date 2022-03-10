import Player from "./Player.js";
import Enemy from "./Enemy.js";
import BulletController from "./BulletController.js";


const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 550;
canvas.height = 600;

const bulletController = new BulletController(canvas);
const player = new Player(canvas.width/2, canvas.height/1.3, bulletController);

let maxEnemyHealth = 5;
let score = 0;

const colors = [
      "red",
      "blue",
      "red",
      "green",
      "yellow",
      "orange",
      "purple",
      "pink",
      "brown",
      "grey",
];

const enemies = [
    new Enemy(Math.floor(Math.random() * 500), Math.floor(Math.random() * 250), colors[Math.floor(Math.random() * colors.length)], Math.floor(Math.random() * maxEnemyHealth + 1)),
    new Enemy(Math.floor(Math.random() * 500), Math.floor(Math.random() * 250),  colors[Math.floor(Math.random() * colors.length)], Math.floor(Math.random() * maxEnemyHealth + 1)),
    new Enemy(Math.floor(Math.random() * 500), Math.floor(Math.random() * 250), colors[Math.floor(Math.random() * colors.length)], Math.floor(Math.random() * maxEnemyHealth + 1)),
];


function gameLoop(){
    setCommonStyle();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    centerLine();
    displayScore();

    
    
    bulletController.draw(ctx);
    player.draw(ctx);

    if(!player.started) return;

    enemies.forEach((enemy)=>{
        if(bulletController.collideWith(enemy)){
            if(enemy.health < 1){
                const index = enemies.indexOf(enemy);
                enemies.splice(index, 1);
                score++;
            }
        }
        else{
            enemy.draw(ctx);
        }
    });

}


function addEnemy(){
    if(!player.started) return;
    maxEnemyHealth++;
    enemies.push(new Enemy(Math.floor(Math.random() * 500), Math.floor(Math.random() * 250), colors[Math.floor(Math.random() * colors.length)], Math.floor(Math.random() * maxEnemyHealth + 1)));
    
}

function centerLine(){
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(550, 300);
    ctx.stroke();
}

function setCommonStyle(){
    ctx.shadowColor = "#d53";
    ctx.shadowBlur = 20;
    ctx.lineJoin = "bevel";
    ctx.lineWidth = 5;
}

function displayScore(){
    ctx.fillStyle = "white";
    ctx.font = "25px Arial";
    ctx.fillText("Score: " + score, 15, 35);
}



setInterval(gameLoop, 1000/60);
setInterval(addEnemy, 3000/1);