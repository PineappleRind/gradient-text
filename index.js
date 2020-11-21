/* JavaScript by PineappleRind 
Last updated: November 2020
Reproduce with permission only */

function textFunction() {
    let text = document.getElementById('output');

    let inputText = document.getElementById('textContentInput');
    text.innerHTML = inputText.value;
}

function editStop(r) {
    let stopModal = document.getElementById('stopModal');
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    overlay.style.opacity = '1';
    stopModal.style.animationName = "scale-in";
    stopModal.style.display = 'block';
    setTimeout(function() {stopModal.style.animationName = '';}, 800);
    r.setAttribute("data-clicked", "true");
}

function addStopModalOpen() {
    let addStopModal = document.getElementById('addStopModal');
    let overlay = document.getElementById('overlay');
    if (overlay.style.opacity !== '1') {
        overlay.style.display = 'block';
        overlay.style.opacity = '1';
        addStopModal.style.animationName = "scale-in";
        addStopModal.style.display = 'block';
    }

    setTimeout(function() {
        addStopModal.style.animationName = '';
    }, 800);

}

function addStop() {
    let stopPos = document.getElementById('addStopPosition');
    document.getElementById("addAfterThis").insertAdjacentHTML('afterend',
        `<li onclick="editStop();" id="gradientStop" class="gradient-stop">${stopPos.value + '%'}<div class="top"><h3>Click to edit</h3><i></i></div></li>`);
    tinysort('ul#xnum>li', { natural: true })
}

function removeStop(r) {
    const stop = document.getElementsByClassName("gradient-stop");
    let ul = document.getElementById('xnum');
    for (var i = 0, len = ul.children.length; i < len; i++) {
        ul.children[i].onclick = function() {
            stop[i]
        }
    }
}

function closeModal() {
    overlay.style.opacity = '0';
    addStopModal.style.animationName = "scale-out";
    stopModal.style.animationName = "scale-out";
    setTimeout(function() {
        addStopModal.style.display = 'none';
        overlay.style.display = 'none';
        stopModal.style.display = 'none';
    }, 800)
}
document.addEventListener("input", function() {
    textFunction();
})