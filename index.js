class StopWatch{
    constructor() {
        this.prevTimeElapsed = 0;
        this.start = null;
        this.resume = false;
    }

    startTimer(){
        if(this.start == null || this.resume){
            this.start = Date.now();
            this.resume = false; 
        }
    }

    stopTimer(){
        if(this.resume == false){
            this.resume = true; 
            this.prevTimeElapsed = this.prevTimeElapsed + (Date.now() - this.start);
        }
    }

    reset(){
        this.start = null;
        this.prevTimeElapsed = 0;
    }

    get getTimeElapsedInMs(){
        if(this.start == null){ // if stopwatch hasn't started yet or is reset
            return 0;
        }else if(this.resume){ // if stop watch is currently stopped
            return this.prevTimeElapsed;
        }else{ // get time whilst stopwatch is not stopped
            return this.prevTimeElapsed + (Date.now() - this.start);
        }
    }

    get getSecondsElapsedIn60Seconds(){
        return Math.floor(this.getTimeElapsedInMs / 1000 % 60);
    }

    get getTimeElapsedInMinutes(){
        return Math.floor(this.getTimeElapsedInMs / 1000 / 60);
    }

    get getCurrentMillaSecondElapsedAsFraction(){
        return this.getTimeElapsedInMs % 1000 / 1000;
    }

    get getTimeElapsedInStopWatchFormatString(){
        // console.log("mins");
        // console.log(this.getTimeElapsedInMinutes);
        let minsNumberAsString = String(this.getTimeElapsedInMinutes);
        let minsAs2Digits = minsNumberAsString.length > 1 ? minsNumberAsString : "0" + minsNumberAsString;

        let secondsNumberAsString = String(this.getSecondsElapsedIn60Seconds);
        let secondsAs2Digits = secondsNumberAsString.length > 1 ? secondsNumberAsString : "0" + secondsNumberAsString;

        let millaSecondAs2DigitNumberAsString = "0" + String(Math.floor(this.getCurrentMillaSecondElapsedAsFraction * 10));

        return `${minsAs2Digits}:${secondsAs2Digits}:${millaSecondAs2DigitNumberAsString}`;
    }
}

let stopWatch = new StopWatch(); 

let digitsH1 = document.getElementById("stop-watch");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");


function loop(){
    digitsH1.innerHTML = stopWatch.getTimeElapsedInStopWatchFormatString;
    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);


startBtn.addEventListener("click", () => {
    stopWatch.startTimer();
});

stopBtn.addEventListener("click", () => {
    stopWatch.stopTimer();
});

resetBtn.addEventListener("click", () => {
    stopWatch.reset();
});


