window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
});

const sound = new Audio('https://fondra.club/Public/Audios/Watching.mp3');
let playing  = false
document.addEventListener('click', function() {
  // fuck you incognito <3
  playing = !playing
    
  if (playing) {
      sound.stop()
  } else {
      sound.play()
  }
});
