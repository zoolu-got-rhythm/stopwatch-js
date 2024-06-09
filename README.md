# StopWatch

![Static Badge](https://img.shields.io/badge/type_definitions-100%25-blue)
![Static Badge](https://img.shields.io/badge/test_coverage-100%25-green)

simple class utility for tracking amount of time elapsed in milliseconds (ms), by comparing time stamps

- version 1.1.0: added typescript type definitions for StopWatch class
- version 1.2.1: fixed bug where when stop, and resume again, the logic to calculate new time elapsed (while taking into account previous time elapsed) was wrong
- version 1.3.0: fixed bug where when initially calling .stopTimer() before subsequent calls to .startTimer() when the StopWatch object is first instantiated, it would cause the incorrect time elapsed to be returned

## how to use StopWatch class via NPM/node.js

installation from terminal/CMD line

```
npm i @slime/stopwatch
```

usage:
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

getters API to query number of ms elapsed and display time elapsed as minutes/seconds/ms string:

```
stopWatch.getTimeElapsedInMs; // returns number of time elapsed in ms
stopWatch.getTimeElapsedInStopWatchFormatString; // returns mins/secs/ms in 00:00:00 format
```

## demo usage

start timer and show time elapsed after 1.5 seconds

```
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
```
