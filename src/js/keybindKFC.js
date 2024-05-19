let keysPressed = [];
let keyCount = 0;

document.addEventListener("keydown", function(event) {
    keysPressed.push(event.key);
    keyCount++;
    if (keysPressed.join('').includes("dva")) {
        let audio = new Audio("https://invra.net/src/localfunction/dva_5.mp3");
        audio.play();
        keysPressed = [];
    } else if (keysPressed.join('').includes("pissoff")) {
        let audio = new Audio("https://invra.net/src/localfunction/what.mp3");
        audio.play();
        keysPressed = [];
    } else if (keyCount == 100) {
        alert("STOP HITTING BUTTONS!")
    } else if (keyCount == 150) {
        window.location.href = "https://invra.net/src/localfunction/jbfm.mp4";
    }
});
