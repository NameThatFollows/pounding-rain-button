var pianoFiles = [
    new Audio('Piano1.mp3'),
    new Audio('Piano2.mp3'),
    new Audio('Piano3.mp3'),
    new Audio('Piano4.mp3'),
]

var firstPlay = true;

function playSound() {
    var fileToPlay;
    if (firstPlay) {
        fileToPlay = 2;
        firstPlay = false;
    } else {
        fileToPlay = Math.floor((Math.random() * 4));
    }
    pianoFiles[fileToPlay].play();
}