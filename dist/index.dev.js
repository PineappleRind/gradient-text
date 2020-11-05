"use strict";

/* JavaScript by PineappleRind 
Last updated: November 2020
Reproduce with permission only */
function textFunction() {
  var text = document.getElementById('output');
  var inputText = document.getElementById('textContentInput');
  var inputBeginningColor = document.getElementById('gradientBeginning');
  var inputEndColor = document.getElementById('gradientEnd');
  text.style.backgroundImage = 'linear-gradient(' + inputBeginningColor.value + ', ' + inputEndColor.value + ');';
  text.innerHTML = inputText.value;
}

function editStop() {
  var stopModal = document.getElementById('stopModal');
  var overlay = document.getElementById('overlay');

  if (overlay.style.opacity !== '1') {
    overlay.style.display = 'block';
    overlay.style.opacity = '1';
    stopModal.style.animationName = "scale-in";
    stopModal.style.display = 'block';
  } else {
    overlay.style.opacity = '0';
    stopModal.style.animationName = "scale-out";
    setTimeout(function () {
      stopModal.style.display = 'none';
      overlay.style.display = 'none';
    }, 800);
  }

  setTimeout(function () {
    stopModal.style.animationName = '';
  }, 800);
}

document.addEventListener("input", function () {
  textFunction();
});