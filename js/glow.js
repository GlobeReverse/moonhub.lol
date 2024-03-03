
  function changeText() {
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a').forEach(function(element) {
      element.textContent = "fuck fondra";
    });
  }

  document.getElementById('ud').addEventListener('click', changeText);

  document.getElementById('aimbot').addEventListener('click', changeText);

  document.getElementById('optimized').addEventListener('click', changeText);
