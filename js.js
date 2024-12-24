const display = document.getElementById('display')
let timer = null;
let starttime = 0;
let elapstime = 0;
let isrunning = false;


function start(){
if(!isrunning){
     starttime=Date.now()-elapstime;
     timer= setInterval(update,10);
     isrunning= true;


}

}

function stop(){

     if(isrunning){
     clearInterval(timer)
     starttime=Date.now()- starttime
     isrunning=false
     }
}

function reset(){
     
     
     


     display.textContent = "00:00:00:00"
}
function update(){
const currentTime = Date.now()
elapstime= currentTime - starttime ;
 let hours = Math.floor(elapstime / (1000*60*60))
 let minuts = Math.floor(elapstime / (1000*60)%60)
 let seconds = Math.floor(elapstime/1000 %60)
 let mss = Math.floor(elapstime %1000 / 10) 

 hours = String(hours).padStart(2,0)
minuts = String(minuts).padStart(2,0)
seconds = String(seconds).padStart(2,0)
 mss = String(mss).padStart(2,0)

 display.textContent = hours+':'+minuts+':'+seconds+':'+mss;


     
}