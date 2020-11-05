/* JavaScript by PineappleRind 
Last updated: November 2020
Reproduce with permission only */

function textFunction() {
    let text = document.getElementById('output');

    let inputText = document.getElementById('textContentInput');
    let inputBeginningColor = document.getElementById('gradientBeginning');
    let inputEndColor = document.getElementById('gradientEnd');

    text.style.backgroundImage = 'linear-gradient(' + inputBeginningColor.value + ', ' + inputEndColor.value + ');'
    text.innerHTML = inputText.value;
}

function editStop() {
    let stopModal = document.getElementById('stopModal');
    let overlay = document.getElementById('overlay');
    if (overlay.style.opacity !== '1'){
    overlay.style.display = 'block';
    overlay.style.opacity = '1';
    stopModal.style.animationName = "scale-in";
    stopModal.style.display = 'block';
    } else {
        overlay.style.opacity = '0';
        stopModal.style.animationName = "scale-out";
        setTimeout(function() {
            stopModal.style.display = 'none';
            overlay.style.display = 'none';
        },800)
    }

    setTimeout(function() {
        stopModal.style.animationName = '';
    },800)
}
document.addEventListener("input", function(){
    textFunction();
})