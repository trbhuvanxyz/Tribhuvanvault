let songs = JSON.parse(localStorage.getItem("songs")) || [];

let audio = document.getElementById("audioPlayer");
let now = document.getElementById("nowPlaying");
let container = document.getElementById("songs");

function loadSongs(){
container.innerHTML = "";

songs.forEach((s,i)=>{
let div = document.createElement("div");
div.innerHTML = `
<h3>${s.name} - ${s.artist}</h3>
<button onclick="selectSong(${i})">Play</button>
`;
container.appendChild(div);
});
}

function selectSong(i){
audio.src = songs[i].file;
now.innerText = "Now Playing: " + songs[i].name;
}

function playSong(){
audio.play();
}

function pauseSong(){
audio.pause();
}

loadSongs();