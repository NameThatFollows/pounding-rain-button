var pianoFiles = [
    new Audio('piano1.mp3'),
    new Audio('piano2.mp3'),
    new Audio('piano3.mp3'),
    new Audio('piano4.mp3'),
]

function playSound() {
    var fileToPlay = Math.floor((Math.random() * 4));
    console.log(fileToPlay);
    pianoFiles[fileToPlay].play();
}