window.onload=function(){
    var seconds=00;
    var tens=00;
    var appendTens=document.getElementById("tens");
    var appendSecond=document.getElementById("seconds");
    var buttonStart=document.getElementById("start");
    var buttonStop=document.getElementById("stop");
    var buttonReset=document.getElementById("reset");
    var Interval;

buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
 }

 buttonReset.onclick=function(){
     clearInterval(Interval);
     tens="00";
     seconds="00";
     appendTens.innerHTML=tens;
     appendSecond.innerHTML=seconds;
 }
 buttonStop.onclick = function() {
    clearInterval(Interval);
}
function startTimer(){
    tens++;
    if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
    if(tens>9){
        appendTens.innerHTML=tens;
    }
    if(tens>99){
        console.log(seconds);
        seconds++;
        appendSecond.innerHTML="0"+seconds;
        tens=0;
        appendTens.innerHTML="0"+ 0;
    }    
    if(seconds>9){
        appendSecond.innerHTML=seconds;
    }  

}}