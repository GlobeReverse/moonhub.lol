
  function changeText() {
    document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a').forEach(function(element) {
      element.textContent = "fuck fondra";
    });
  }


  var clicks = 0;

  document.getElementById('ud').addEventListener('click', function() {
    clicks++;
    if (clicks === 1) {
      return;
    } else {
      clicks = 0;
    }
  });

  document.getElementById('aimbot').addEventListener('click', function() {
    if (clicks === 1) {
      clicks++;
    } else {
      clicks = 0;
    }
  });

  document.getElementById('optimized').addEventListener('click', function() {
    if (clicks === 2) {
      clicks++;
    } else {
      clicks = 0;
    }
    if (clicks === 3) {
      changeText();
    }
  });