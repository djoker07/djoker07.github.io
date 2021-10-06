const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const TIME = 50;
let queue = [];
let currentLetter = 0;
let progress = 0;

window.deJS = {};

window.deJS.load = function() {
    //get elements in the queue
    $(".decodeEffect").each(function() {
        queue.push(
            {
                element: $(this).get(0),
                text: $(this).html()
            }
        );
    });

    //animate text
    for (let i = 0; i < queue.length; i++) {
        animate(queue[i]);
    }
}

function animate(container) {

    setTimeout( () => {
        currentLetter++;
        let currentText = container.text.substr(0, currentLetter);
        currentText += getRandomChars(container.text.length - currentLetter);

        container.element.innerHTML = currentText;
        progress = currentLetter / container.text.length;

        if(progress < 1) {
          animate(container)
        }
    }, TIME);
}

function getRandomChars(size) {
    let result = '';

    for(let i = 0; i < size; i++) {
        if(i % 5 == 0) {
            result += ' '
        } else {
            result += ALPHA.charAt(Math.floor(Math.random() * ALPHA.length));
        }
    }
    return result
}
