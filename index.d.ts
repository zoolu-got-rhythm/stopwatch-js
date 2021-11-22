export declare class StopWatch {
    private start;
    private stop;
    constructor();
    public startTimer(): void;
    public stopTimer(): void;
    public reset(): void;
    private get getSecondsElapsedIn60Seconds(): number;
    private get getTimeElapsedInMinutes(): number; 
    private get getCurrentMillaSecondElapsedAsFraction(): number;
    public get getTimeElapsedInMs(): number;
    public get getTimeElapsedInStopWatchFormatString(): string;
}
