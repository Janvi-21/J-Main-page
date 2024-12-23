// Define an array of songs (with file paths and details)
const songs = [
    { title: "Calm Winds", artist: "Relaxing Artist", file:"songs/1.mp3"},
    { title: "Gentle Waves", artist: "Serenity", file: "songs/2.mp3" },
    { title: "Soothing Nature", artist: "Nature Sounds", file: "songs/3.mp3" },
    { title: "Peaceful Forest", artist: "Forest Vibes", file: "songs/4.mp3" },
    { title: "Ocean Breeze", artist: "Ocean Sounds", file: "songs/5.mp3" },
    { title: "Evening Sky", artist: "Twilight Sounds", file: "songs/6.mp3" },
    { title: "Mountain Calm", artist: "Mountain Retreat", file: "songs/7.mp3" },
    { title: "Morning Dew", artist: "Dawn Awakens", file: "songs/8.mp3" },
    { title: "Tranquil Rain", artist: "Rainfall", file: "songs/9.mp3" },
    { title: "Silent Lake", artist: "Nature Calls", file: "songs/10.mp3" },
    // { title: "Starry Night", artist: "Night Sounds", file: "songs/1.mp3" },
    // { title: "Slow Breeze", artist: "Breeze Moments", file: "songs/1.mp3" },
    // { title: "Deep Sleep", artist: "Relaxation Music", file: "songs/1.mp3" },
    // { title: "Gentle Stream", artist: "Stream Sounds", file: "songs/1.mp3" },
    // { title: "Dreamy Piano", artist: "Piano Relax", file: "songs/1.mp3" }
];
// Define an array of songs (with file paths and details)
// const songs = [
//     { title: "Calm Winds", artist: "Relaxing Artist", file: "songs/calm-winds.mp3" },
//     { title: "Gentle Waves", artist: "Serenity", file: "songs/gentle-waves.mp3" },
//     { title: "Soothing Nature", artist: "Nature Sounds", file: "songs/soothing-nature.mp3" },
//     { title: "Peaceful Forest", artist: "Forest Vibes", file: "songs/peaceful-forest.mp3" },
//     { title: "Ocean Breeze", artist: "Ocean Sounds", file: "songs/ocean-breeze.mp3" },
//     { title: "Evening Sky", artist: "Twilight Sounds", file: "songs/evening-sky.mp3" },
//     { title: "Mountain Calm", artist: "Mountain Retreat", file: "songs/mountain-calm.mp3" },
//     { title: "Morning Dew", artist: "Dawn Awakens", file: "songs/morning-dew.mp3" },
//     { title: "Tranquil Rain", artist: "Rainfall", file: "songs/tranquil-rain.mp3" },
//     { title: "Silent Lake", artist: "Nature Calls", file: "songs/silent-lake.mp3" },
//     { title: "Starry Night", artist: "Night Sounds", file: "songs/starry-night.mp3" },
//     { title: "Slow Breeze", artist: "Breeze Moments", file: "songs/slow-breeze.mp3" },
//     { title: "Deep Sleep", artist: "Relaxation Music", file: "songs/deep-sleep.mp3" },
//     { title: "Gentle Stream", artist: "Stream Sounds", file: "songs/gentle-stream.mp3" },
//     { title: "Dreamy Piano", artist: "Piano Relax", file: "songs/dreamy-piano.mp3" }
// ];

let currentSongIndex = 0;
const audioPlayer = document.getElementById("audio-player");
const audioSource = document.getElementById("audio-source");
const songTitle = document.getElementById("song-title");
const songArtist = document.getElementById("song-artist");
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const songList = document.getElementById("song-list");

// Initialize song list dynamically
songs.forEach((song, index) => {
    const songItem = document.createElement("li");
    songItem.textContent = song.title;
    songItem.onclick = () => playSong(index);
    songList.appendChild(songItem);
});

// Function to load and play the selected song
function loadSong(songIndex) {
    const song = songs[songIndex];
    audioSource.src = song.file;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    audioPlayer.load();
    playBtn.textContent = "Play";
}

// Play or pause the song
playBtn.onclick = () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playBtn.textContent = "Play";
    }
};

// Play the next song
nextBtn.onclick = () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playBtn.textContent = "Pause";
};

// Play the previous song
prevBtn.onclick = () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playBtn.textContent = "Pause";
};

// Play the clicked song from the song list
function playSong(index) {
    currentSongIndex = index;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playBtn.textContent = "Pause";
}

// Initialize the player with the first song
loadSong(currentSongIndex);
