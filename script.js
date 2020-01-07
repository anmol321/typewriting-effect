const texts = ['Full Stack Developer' ]
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    currentText = texts[count];
    letter = currentText.slice(0,++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length===currentText.length) {
        count = 0;
        index=0;
    }
    setTimeout(type,200);
}());