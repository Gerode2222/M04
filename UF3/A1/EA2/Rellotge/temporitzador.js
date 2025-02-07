function updateCurrentTime() {
    const now = new Date();
    document.getElementById("current-time").textContent = now.toLocaleTimeString("ca-ES");
}
setInterval(updateCurrentTime, 1000);

document.getElementById("start-timer").addEventListener("click", function() {
    let countdown = parseInt(document.getElementById("countdown").value, 10);
    let endTime = document.getElementById("end-time").value;

    if (!countdown && !endTime) {
        alert("Introdueix un temps o una hora de finalització!");
        return;
    }

    let targetTime;
    if (endTime) {
        let now = new Date();
        let [hours, minutes] = endTime.split(":");
        targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);
    } else {
        targetTime = new Date(Date.now() + countdown * 1000);
    }

    let timerInterval = setInterval(() => {
        let now = new Date();
        let remainingTime = Math.max(0, Math.floor((targetTime - now) / 1000));

        let hours = Math.floor(remainingTime / 3600);
        let minutes = Math.floor((remainingTime % 3600) / 60);
        let seconds = remainingTime % 60;

        document.getElementById("time-remaining").textContent = `${hours}:${minutes}:${seconds}`;

        if (remainingTime === 0) {
            clearInterval(timerInterval);
            let sound = new Audio(document.getElementById("alarm-sound").value);
            sound.play();
        }
    }, 1000);
});