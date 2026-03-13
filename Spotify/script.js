let songIndex = 0;
let audioElement = new Audio('Images/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    {songName: "Piya aaye na", filePath: "Songs/Piya aaye na.mp3",},
    {songName: "Piya aaye na", filePath: "Songs/Piya aaye na.mp3",},
    {songName: "Piya aaye na", filePath: "Songs/Piya aaye na.mp3",},
]
// audioElement.play();

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
});

myProgressBar.addEventListener('timeupdate', () =>{
    console.log('timeupdate');
})