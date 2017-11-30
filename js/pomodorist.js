var numM = 0;
var numS = 0;
var num = 0;
function timer(){
    var div = document.getElementById("timer");
    if (num > 10) {
        num = 0;
        numS++;
    }
    if (numS > 10){
        numS = 0;
        numM++;
    }
    div.innerHTML = numM + " " + numS + " "+ num;
    num++
    //if (numM > 25) {
       // break();
   //}
}

setInterval(timer, 100);

/*function break() {
    console.log("Kratka pauza");
    reset();
    
}

/*function reset() {
    var numM = 0;
    var numS = 0;
    var num = 0;
}