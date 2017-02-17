var pianoFiles = [
    new Audio('Piano1.mp3'),
    new Audio('Piano2.mp3'),
    new Audio('Piano3.mp3'),
    new Audio('Piano4.mp3'),
]

var firstPlay = true;

function playSound() {
    if (firstPlay) {
        var fileToPlay = 3;
        firstPlay = false;
    } else {
        var fileToPlay = Math.floor((Math.random() * 4));
    }
    pianoFiles[fileToPlay].play();
}