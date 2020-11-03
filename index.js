/* JavaScript by PineappleRind 
Last updated: November 2020
Reproduce with permission only */

function textFunction() {
    let text = document.getElementById('output');

    let inputText = document.getElementById('textContentInput');

    text.innerHTML = inputText.value;
}

body.addEventListener("input", function(){
    textFunction();
})