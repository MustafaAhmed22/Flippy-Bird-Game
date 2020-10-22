var cvs =document.getElementById('canvas');
var ctx = cvs.getContext("2d");
console.log(ctx)
var bird =new Image();
var pipeNorth =new Image();
var pipeSouth =new Image();
var bg =new Image();
var fg =new Image();
var fly = new Audio();
var score1 =new Audio();
bird.src ="\images/bird.Png"
pipeNorth.src ="images/pipeNorth.png"
pipeSouth.src ="images/pipeSouth.png"
bg.src ='\images/bg.png'
fg.src ="images/fg.png"
fly.src ="sounds/fly.mp3"
score1.src ="sounds/score.mp3"

var gap =90;
let bx =10 ;
let by =150;
var score =0;
document.addEventListener('keydown' ,moveup);
function moveup(){
by -=30;
fly.play();
}
var pipe = [];
pipe[0] ={
    x:cvs.width ,
    y:0
}
var constant =pipeNorth.height + gap ;
var gravity = 1.5 ;
window.onload = function draw(){
    ctx.drawImage(bg ,0 ,0);
    for(var i =0 ; i<pipe.length ;i++){
        ctx.drawImage(pipeNorth ,pipe[i].x ,pipe[i].y);
        ctx.drawImage(pipeSouth ,pipe[i].x , pipe[i].y+constant);
        pipe[i].x --;
        if(pipe[i].x === 125){
            pipe.push({
                x:cvs.width ,y :Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            })
        }
        if(bx+bird.width >=pipe[i].x &&bx<=pipe[i].x+pipeNorth.width &&(by<=pipe[i].y+pipeNorth.height
            ||by+bird.height>=pipe[i].y+constant)){
            location.reload();
            
        }
        if(pipe[i].x === 5){
            score++ ;
            score1.play()
        }
     
    }
   


    ctx.drawImage(fg ,0,cvs.height-fg.height);
    ctx.drawImage(bird ,bx , by);
    by += gravity; 
    ctx.font ='26px'
    ctx.fillText("score : "+score ,10 ,cvs.height-20)
    requestAnimationFrame(draw);

}
