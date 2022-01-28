var boy = document.getElementById('boy');
var box = document.getElementById('box');
var boxStyle = getComputedStyle(box);
var boyStyle = getComputedStyle(boy);

var idle = setInterval(boyIdle,200);
var run = setInterval(boyIdle,200);
var jump = setInterval(boyJump,300);
var boxMove = setInterval(boxAnimation,200);
var dead = setInterval(boyDead,200);

clearInterval(run);
clearInterval(dead);
clearInterval(jump);
clearInterval(boxMove);

var idleNum = 1;
var runNum = 1;
var jumpNum = 3;
var deadNum = 3;


function getEvents(event){
    switch(event.key){
        case "Enter":
            clearInterval(jump);
            clearInterval(run);
            clearInterval(idle);
            clearInterval(boxMove);
            run = setInterval(boyRun,200);
            boxMove = setInterval(boxAnimation,200);
            break;
        case " ":
            clearInterval(jump);
            clearInterval(run);
            clearInterval(idle);
            clearInterval(boxMove);
            jump = setInterval(boyJump,200);
            boxMove = setInterval(boxAnimation,200);
            break;
    }

}


function boyIdle(){
    boy.src = "./boy/Idle ("+idleNum+").png";
    idleNum++;
    if(idleNum == 11)
        idleNum = 1;
}

function boyRun(){
    boy.src = "./boy/Run ("+runNum+").png";
    runNum++;
    if(runNum == 9)
        runNum = 1;
}

function boyJump(){
    boy.src = "./boy/Jump ("+jumpNum+").png";
    jumpNum++;
    if(jumpNum == 13){
        jumpNum = 1;
        clearInterval(jump);
        clearInterval(run);
        clearInterval(idle);
        run = setInterval(boyRun,200);
    }
}

function boyDead(){
    boy.src = "./boy/Dead ("+deadNum+").png";
    deadNum++;
    if(deadNum == 11){
        deadNum = 1;
        clearInterval(dead);
    }
}

var boxMarginLeft = parseInt(boxStyle.marginLeft);
var boyMarginLeft = parseInt(boyStyle.marginLeft);
function boxAnimation(){
    boxMarginLeft -= 10;
    if(boxMarginLeft <= boyMarginLeft+175){
        clearInterval(jump);
        clearInterval(run);
        clearInterval(idle);
        clearInterval(boxMove);
        dead = setInterval(boyDead,200);
    }
    box.style.marginLeft = boxMarginLeft + 'px';
}

