console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "DAKU | INDERPAL MOGA | PUNJABI SONG", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Fitoor Song | Shamshera | Arijit Singh", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "GOAT | Sidhu Moose Wala | Moosetape", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Guru Randhawa: MADE IN INDIA | Bhushan Kumar", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "MASHOOK - VARINDER BRAR FT. GUSTAVO GUAAPO", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Moto | Diler Kharkiya | Ajay Hooda", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "On The Way (Official Audio) | Khasa Aala Chahar", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Sidhu Moose Wala : DOLLAR | New Punjabi Songs", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "We Rollin (Official Audio)-Shubh", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "YADON SE | KALAM INK(OFFICIAL Audio)", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "295 (Official Audio) | Sidhu Moose Wala", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "BAMBIHA BOLE(Official Audio) | Sidhu Moose Wala", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "BANDOOK | PRANJAL DAHIYA | HARSH SANDHU", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Bekhayali Full Song | Kabir Singh", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "BHAGAT (Official Audio )", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "Born To Shine | Diljit Dosanjh (DjPunjab.Com)", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "Dialogue | Amit Saini Rohtakiya", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "Diljit Dosanjh Lemonade (Visualiser)", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "DUS DON (Official Audio )", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {songName: "Excuses | AP Dhillon", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    {songName: "Galliyan Returns Song | Ek Villain Returns", filePath: "songs/21.mp3", coverPath: "covers/21.jpg"},
    {songName: "Haye Mazyy | Preet Sandhu ", filePath: "songs/22.mp3", coverPath: "covers/22.jpg"},
    {songName: "Kesariya | Brahmāstra | Ranbir Kapoor", filePath: "songs/23.mp3", coverPath: "covers/23.jpg"},
    {songName: "Lehanga | Jass Manak (Official Audio) ", filePath: "songs/24.mp3", coverPath: "covers/24.jpg"},
    {songName: "LEVELS | Official Video | Sidhu Moose Wala", filePath: "songs/25.mp3", coverPath: "covers/25.jpg"},
    {songName: "Lilo Chaman 3 | Diler Kharkiya ", filePath: "songs/26.mp3", coverPath: "covers/26.jpg"},
    {songName: "Power (Full Audio) | Sidhu Moose Wala", filePath: "songs/27.mp3", coverPath: "covers/27.jpg"},
    {songName: "Same Beef Song | Ft. Sidhu Moose Wala", filePath: "songs/28.mp3", coverPath: "covers/28.jpg"},
    {songName: "Shaamat | Ek Villain Returns ", filePath: "songs/29.mp3", coverPath: "covers/29.jpg"},
    {songName: "Z BLACK (Official Audio) | MD KD ", filePath: "songs/30.mp3", coverPath: "covers/30.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})