# StopWatch

simple class utility for tracking amount of time elapsed in milliseconds (ms).

## how to use StopWatch class
first instantiate a new StopWatch object instance from the StopWatch class

```
const StopWatch = require("@slime/stopwatch"); 
let stopWatch = new StopWatch(); 
```

API to start, stop, resume, reset with:

```
stopWatch.startTimer(); 
stopWatch.stopTimer();
stopWatch.startTimer();
stopWatch.reset();
```

API to query number of ms elapsed and display time elapsed as minutes/seconds/ms string:

```
stopWatch.getTimeElapsedInMs(); // returns number of time elapsed in ms
stopWatch.getTimeElapsedInStopWatchFormatString(); // returns mins/secs/ms in 00:00:00 format
```
