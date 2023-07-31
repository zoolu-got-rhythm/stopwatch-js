const StopWatch = require("./dist/StopWatch"); 
let stopWatch = new StopWatch(); 
console.log(stopWatch.getTimeElapsedInMs);
console.log(stopWatch.getTimeElapsedInStopWatchFormatString); 
stopWatch.startTimer();
setTimeout(()=>{
    stopWatch.stopTimer();
    console.log(stopWatch.getTimeElapsedInMs);
    console.log(stopWatch.getTimeElapsedInStopWatchFormatString); 
    setTimeout(() => {
        console.log(stopWatch.getTimeElapsedInMs);
        console.log(stopWatch.getTimeElapsedInStopWatchFormatString); 
        stopWatch.startTimer();
        console.log(stopWatch.getTimeElapsedInMs);
        console.log(stopWatch.getTimeElapsedInStopWatchFormatString); 
    }, 1500);
}, 1500); 


