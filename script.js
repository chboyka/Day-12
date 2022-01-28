var boy = document.getElementById('boy');
var box = document.getElementById('box');
var boxStyle = getComputedStyle(box);
var idle = setInterval(boyIdle,200);
var run = setInterval(boyIdle,200);
var jump = setInterval(boyJump,300);
clearInterval(run);
clearInterval(jump);

var idleNum = 1;
var runNum = 1;
var jumpNum = 1;


function getEvents(event){
    switch(event.key){
        case "Enter":
            clearInterval(jump);
            clearInterval(run);
            clearInterval(idle);
            run = setInterval(boyRun,200);
            break;
        case " ":
            clearInterval(jump);
            clearInterval(run);
            clearInterval(idle);
            jump = setInterval(boyJump,200);
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
    boxAnimation();
}

function boyJump(){
    boy.src = "./boy/Jump ("+jumpNum+").png";
    jumpNum++;
    if(jumpNum == 13){
        jumpNum = 1;
        boyIdle();
        clearInterval(jump);
        clearInterval(run);
        clearInterval(idle);
        run = setInterval(boyRun,200);
    }
}



var boxMarginLeft = parseInt(boxStyle.marginLeft);
function boxAnimation(){
    boxMarginLeft -= 10;
    box.style.marginLeft = boxMarginLeft + 'px';
}

