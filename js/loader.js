window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
});

  const sound = new Audio('https://fondra.club/Public/Audios/Watching.mp3');
  sound.volume = 0.4; // Adjust the volume here (0.0 to 1.0)
  let playing = false;
  
  document.addEventListener('click', function() {
    playing = !playing;
      
    if (playing) {
        sound.pause();
    } else {
        sound.play();
    }
  });
