const video = document.getElementById('video');
const canvas = document.getElementById('glowCanvas');
const ctx = canvas.getContext('2d');

const fac = new FastAverageColor();

video.addEventListener('play', () => {
  canvas.width = video.clientWidth;
  canvas.height = video.clientHeight;
  updateGlow();
});

function updateGlow() {
  if (video.paused || video.ended) return;

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  fac.getColorAsync(canvas)
      .then(color => {
        
          canvas.style.backgroundColor = color.rgba;
          requestAnimationFrame(updateGlow);
      })
      .catch(e => {
      
          requestAnimationFrame(updateGlow);
      });
}