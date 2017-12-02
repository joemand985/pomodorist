var numM = 0; 
var numS = 0;
var num = 0;
var pomodoros = 0;
var set = 0;
var rest = false;
var count = "";

var breakLength = 0;
var pomLength = 0;
//var onOff = true;
function timer(){
   
    isBreak();
    var div = document.getElementById("timer");
    if (num < 1) {
        num = 100;
        numS--;
    }
    if (numS < 1){
        numS = 60;
        numM--;
    }
    if (rest){ 
      
        if(numM < 1){
            rest = false;
            reset();
          
        }
    }
    if (numM < 1){ //end of work
        resetBreak();
        pomodoros++
        rest = true;   
    }
    div.innerHTML = numM + " " + numS + " "+ num;
    num--
}

function stop(){
    clearInterval(count);
}
function start(){
        breakLength = document.getElementById("break_length").value;
        pomLength = document.getElementById("pomodoro_length").value;
        count = setInterval(timer, 1);
        numM = pomLength;
     if (numM == 0){
        alert("You didn't set session time!!!")
    }

}



function resetBreak(){
    numM = breakLength;
    num, numS = 0;
    rest_tone.play();
} 
function reset(){
    numM = pomLength;    
    num, numS = 0;
    work_tone.play();
}

function isBreak() {
    var isBreak ="Pomodoro";
    if (rest){
        isBreak = "Break";
        document.getElementById("tomato").src='img/green.png';
         document.getElementById("timer").color='red';
        //rest_tone.play();
    } else {
        document.getElementById("tomato").src='img/red.png';
        document.getElementById("timer").color='green';
        //work_tone.play();
    }
    document.getElementById("break").innerHTML = isBreak;
}

// --- To do list
done = false;
var items = [];
var output = [];
function add(){
    var newItem = document.getElementById('input').value;
    
    items.push(newItem);
    toDo();
     console.log(items);
    
}

function toDo(){
    for(var i=0; i<items.length; i++){
        output.push("<br>" +items + done)
        items = [];
    }
    var list = document.getElementById('list');
    list.innerHTML = output;
}

  
   

 
