window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });

  const sound = new Audio('https://fondra.club/Public/Audios/Watching.mp3');
  sound.volume = 0.2; // volume here nigga
  let playing = false;
  
  const notification = document.getElementById('notification');
  
  document.addEventListener('click', function() {
    playing = !playing;
  
    if (playing) {
      sound.loop = true; // Enable looping
      sound.play();
      showNotification('Music Now Playing');
    } else {
      sound.loop = false; // Disable looping
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
    }, 2000); // how long it takes for the noti to hide or what not yeah ok
  }
  
