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

  const notification = document.getElementById('notification');

  document.addEventListener('click', function() {
    playing = !playing;

    if (playing) {
      sound.play();
      showNotification('Music Now Playing');
    } else {
      sound.pause();
      showNotification('Music Paused');
    }
  });

  function showNotification(message) {
    notification.innerText = message;
    notification.style.display = 'block';
    notification.classList.remove('hidden'); 
    setTimeout(function() {
      notification.classList.add('hidden');
    }, 3000); // how long it takes to fade out 
  }
