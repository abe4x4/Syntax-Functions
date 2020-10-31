s.
// The output should be printed on the console.
function main(steps, meters, speed) {
    timeToWalk(steps, meters, speed);
}

function timeToWalk(steps, meters, speed) { //(4000, 0.60, 5)
    let stepsNumber = +steps;
    let stepsMetersHr = +meters;
    let speedKmHr = +speed;

    let distanceMeters = stepsNumber * stepsMetersHr;
    let speedMetersSec = speedKmHr / 3.6; // to change km/hr to m/sec
    let time = distanceMeters / speedMetersSec;
    let rest = Math.floor(distanceMeters / 500); //1 min rest/500 m

    let timeMin = Math.floor(time / 60); //change minutes to hours
    let timeSec = Math.round(time - (timeMin * 60)); //change minutes to seconds
    let timeHr = Math.floor(time / 3600); //change seconds to hours

    if (timeHr < 10) {
        timeHr = '0' + timeHr;
        if (timeMin < 10) {
            timeMin = '0' + (timeMin + rest);
            if (timeSec < 10) {
                timeSec = '0' + timeSec;
                console.log(timeHr + ":" + timeMin + ":" + timeSec);
            }
        } else {
            console.log(timeHr + ":" + (+timeMin + rest) + ":" + timeSec);
        }
    } else {
        console.log(timeHr + ":" + (+timeMin + rest) + ":" + timeSec);
    }

}