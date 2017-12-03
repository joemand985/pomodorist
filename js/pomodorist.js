var numM = 0; 
var numS = 0;
var num = 0;
var pomodoros = 0;
var set = 0;
var rest = false;
var count = "";

//var progress = 0;
var breakLength = 0;
var pomLength = 0;
var timeLength = 0;
//var onOff = true;
function timer(){
   
    isBreak();
    var counter = document.getElementById("timer");
    if (num < 0) {
        num = 100;
        numS--;
    }
    if (numS < 0){
        numS = 60;
        numM--;
        progressBar(numM); // Call progress func
    }
    if (rest){ 
      
        if(numM < 0){
            rest = false;
            reset();
          
        }
    }
    if (numM < 0){ //end of work
        resetBreak();
        pomodoros++
        rest = true;   
    }
    counter.innerHTML = numM + " : " + numS + " : "+ num;
    num--
   
    // progress bar -------------
    
    //var percent = timeLength//((numM/timeLength)*100)+1
    //percent = parseInt(percent);
   // progress = parseInt(percent * 3)
   
}

function progressBar(statusS){
  
    var percent = (numM/pomLength)*100;
    console.log(percent);
    percent = percent * 5; document.getElementById("progress").style.width = percent+ "px";
    //console.log(abc)
}

function stop(){
    clearInterval(count);
}
function start(){
        breakLength = document.getElementById("break_length").value;
        pomLength = document.getElementById("pomodoro_length").value;
        count = setInterval(timer, 10);
        numM = pomLength;
        getPomodoros();
     if (numM == 0){
        alert("You didn't set session time!!!")
    }

}



function resetBreak(){
    numM = breakLength;
    num, numS = 0;
    rest_tone.play();
    runOut();
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
    var bar = document.getElementById("progress");
    bar.innerHTML = isBreak;
   
    //var abc = '"' + String(progress) + 'px' +'"';
   
  //  bar.style.width = progress+ "px";
    //console.log(abc)
    
}


var showPomodoro = [];
var stock = 0;
function getPomodoros(){
      stock = document.getElementById("pomodoros").value;
      runOut();
}


function runOut(){
    
    for(var i = 0; i<stock; i++){
        showPomodoro.push("<img src='../img/red.png' width='50px' float='left' >");
    }
    document.getElementById("stock").innerHTML = showPomodoro;
   
    if(stock < 1) { 
        document.body.style.backgroundImage = "url('img/night.jpg')";
        stop();
//        document.div.style.display ="none";
    }
    stock--;
    showPomodoro = [];
}

/*
// --- To do list
var output = [];
//var items = [];
num = 3;
function add() {
    var newItem = document.getElementById('input').value;
    //items.push(newItem);
    output.push("<br><input type='submit' value='" + newItem + "' elem.onclick=call.click()>" );
    document.getElementById("list").innerHTML = output;
}

function click(){
    alert("Hello world");
}

 /*-------------------

var itemNum = 1;
var items = [];
var output = ["aaa"];
var num = 1;//test

var makeItem = {
    task: "A",
    ordinal: 0,
    getTask: function(newTask){
    this.task = newTask;
},
    getOrdinal: function(){
    this.ordinal = itemNum;
}
}

function add(){
    var newItem = document.getElementById('input').value;//get item
    
eval("var item" + itemNum + "=Object.create(makeItem)"); // make new object
 
    var thisTask = eval("item" + itemNum); //make var object
    thisTask.getTask(newItem); //put task in object
    thisTask.getOrdinal();  // put ordinal in object
    var todo = thisTask.task; // getting task value from o
    var n = thisTask.ordinal;  //getting num value from o
     alert(todo + n)
    items.push(todo)  // putting task from o to items
    console.log(items); //ok
        output.push("<br><span id='task" +  num + ">" + todo + " " + num + "</span>")
    console.log(output);
     var list = document.getElementById('list');
    //list.innerHTML = output;
    var x=0;
 for(var i=0; i<=output.length; i++){
    document.getElementById("list").innerHTML = "<br>" + output[x]; 
    x++;
    }

    
    //toDo(todo, n);  //calling toDo
   

    itemNum++;
}
*/
/*function toDo(item, num){
   
    for(var i=0; i<items.length; i++){ //length

       
    output.push("<br><span id='task" +  num + ">" + item + " " + num + "</span>")
 
   
    
  items = [];

     
    }
       console.log(output)// problem  
     var list = document.getElementById('list');
    list.innerHTML = input;
} */


//sastavi kreator objekta 
//---------------------*/

 /*
var taskNum = "1";
done = false;
var items = [];
var output = [];
function add(){
    var newItem = document.getElementById('input').value;
    items.push(newItem);
    toDo();  
}

function toDo(){
    for(var i=0; i<items.length; i++){
        output.push("<br>" + i +"<input type='submit' onclick='addPomodoro(items.value)'>" +items + done)
        items = [];
    }
    var list = document.getElementById('list');
    list.innerHTML = output;
}

function addPomodoro(zd){
    alert("Helo world" + zd);
    done = true;
}
 

 */
