

console.log("Welcome to Spotify");

// Initialize variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('play');
let myprogressbar = document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songs = [
    { songName: "New Music", filepath: "songs/1.mp3", coverpath: "cover/1.jpg" },
    { songName: "New Music-corian", filepath: "songs/2.mp3", coverpath: "cover/2.jpg" },
    { songName: "New Music- fantastic", filepath: "songs/3.mp3", coverpath: "cover/3.jpg" },
    { songName: "New Music- attracitveness", filepath: "songs/4.mp3", coverpath: "cover/1.jpg" },
    { songName: "New Music-lousiness", filepath: "songs/5.mp3", coverpath: "cover/2.jpg" },
    { songName: "New Music-panjabi", filepath: "songs/6.mp3", coverpath: "cover/3.jpg" },
    { songName: "New Music-bandard", filepath: "songs/7.mp3", coverpath: "cover/1.jpg" },
    { songName: "New Music-banjara", filepath: "songs/8.mp3", coverpath: "cover/2.jpg" },
    { songName: "New Music-bolder and a big", filepath: "songs/9.mp3", coverpath: "cover/3.jpg" },
];


// Debugging: Check if file path is correct
console.log("Audio source:", audioElement.src);

// Handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    } else {
        audioElement.pause();
        masterplay.classList.remove("fa-circle-pause");  // Fix: Remove pause icon
        masterplay.classList.add("fa-circle-play");  // Fix: Add play icon back
        gif.style.opacity=0;
    }
});

//Update progress bar correctly
audioElement.addEventListener('timeupdate', () => {
    console.log('Current Time:', audioElement.currentTime);
    // Seekbar update
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
});

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
});

