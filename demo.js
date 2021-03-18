const StopWatch = require("@slime/stopwatch"); 
let stopWatch = new StopWatch(); 
console.log(stopWatch.getTimeElapsedInMs);
console.log(stopWatch.getTimeElapsedInStopWatchFormatString); 
stopWatch.startTimer();
setTimeout(()=>{
    stopWatch.stopTimer();
    console.log(stopWatch.getTimeElapsedInMs);
    console.log(stopWatch.getTimeElapsedInStopWatchFormatString); 
}, 1500); 
