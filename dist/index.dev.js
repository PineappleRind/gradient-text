"use strict";

/* JavaScript by PineappleRind 
Last updated: November 2020
Reproduce with permission only */
function textFunction() {
  var text = document.getElementById('output');
  var inputText = document.getElementById('textContentInput');
  text.innerHTML = inputText.value;
}

function editStop() {
  var stopModal = document.getElementById('stopModal');
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'block';
  overlay.style.opacity = '1';
  stopModal.style.animationName = "scale-in";
  stopModal.style.display = 'block';
  setTimeout(function () {
    stopModal.style.animationName = '';
  }, 800);
}

function addStopModalOpen() {
  var addStopModal = document.getElementById('addStopModal');
  var overlay = document.getElementById('overlay');

  if (overlay.style.opacity !== '1') {
    overlay.style.display = 'block';
    overlay.style.opacity = '1';
    addStopModal.style.animationName = "scale-in";
    addStopModal.style.display = 'block';
  }

  setTimeout(function () {
    addStopModal.style.animationName = '';
  }, 800);
}

function addStop() {
  var stopPos = document.getElementById('addStopPosition');
  document.getElementById("gradientStop").insertAdjacentHTML('afterend', "<li onclick=\"editStop();\" id=\"gradientStop\" class=\"gradient-stop\">".concat(stopPos.value, "<div class=\"top\"><h3>Click to edit</h3><i></i></div></li>"));
  var list = document.getElementById('stopList');
  tinysort('ul#xnum>li', {
    natural: true
  });
}

function closeModal() {
  overlay.style.opacity = '0';
  addStopModal.style.animationName = "scale-out";
  stopModal.style.animationName = "scale-out";
  setTimeout(function () {
    addStopModal.style.display = 'none';
    overlay.style.display = 'none';
    stopModal.style.display = 'none';
  }, 800);
}

document.addEventListener("input", function () {
  textFunction();
});