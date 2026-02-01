function startSong() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.6;
  music.play();

  document.getElementById("enterText").style.display = "none";
}
