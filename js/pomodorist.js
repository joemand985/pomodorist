var numM = 0;
var numS = 0;
var num = 0;
var pomodoros = 0;
var set = 0;
var rest = false;
function timer(){
    isBreak();
    var div = document.getElementById("timer");
    if (num > 10) {
        num = 0;
        numS++;
    }
    if (numS > 10){
        numS = 0;
        numM++;
    }
    if (rest){  // rest
        rest_tone.play();
        if(numM > 5){
            rest = false;
            reset();
            work_tone.play();
        }
    }
    if (numM > 25){ //end of work
        reset();
        pomodoros++
        rest = true;
        //work_tone.play();
        //var rest = //documet.getElementById("work");
       // rest.play();
    
    }
    div.innerHTML = numM + " : " + numS + " : "+ num;
    num++
}


setInterval(timer, 30);

  
function reset(){
    num, numS, numM = 0;
}

function isBreak() {
    var isBreak ="Pomodoro";
    if (rest){
        isBreak = "Break";
        document.getElementById("tomato").src='img/green.png';
         document.getElementById("timer").color='red';
    } else {
        document.getElementById("tomato").src='img/red.png';
        document.getElementById("timer").color='green';
    }
    document.getElementById("break").innerHTML = isBreak;
}
