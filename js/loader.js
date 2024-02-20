window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

document.addEventListener('click', function() {
  // fuck you incognito <3
    console.log('loaded sound')
  var audio = new Audio('https://fondra.club/Public/Audios/Watching.mp3');
  audio.play();
});
