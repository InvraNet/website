document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        audio = new Audio("https://invra.net/src/localfunction/dva_5.mp3")
        audio.play();
    }
  });