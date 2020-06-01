console.log("time to start the timer!");

let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
var going = true;

let interval = function () {
    setInterval(setTime, 1000);

    function setTime() {
        if (going) {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds % 60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));

            function pad(val) {
                let valString = val + "";
                if (valString.length < 2) {
                return "0" + valString;
                } else {
                return valString;
                }
            }
        } else {
            return;
        }
    }
}

const startFunction = function() {
    going = true;

    interval();
}


const startButton = document.getElementById('start').addEventListener('click', startFunction);

const stopButton = document.getElementById('stop').addEventListener('click', function() {
    going = false;
});

const resetButton = document.getElementById('reset').addEventListener('click', function() {
    minutesLabel.innerHTML = '00';
    secondsLabel.innerHTML = '00';
});