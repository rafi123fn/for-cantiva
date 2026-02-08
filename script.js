function startSong() {
  const music = document.getElementById("bgMusic");
  const enter = document.getElementById("enterText");
  const content = document.getElementById("mainContent");

  music.play().catch(err => {
    console.log("Play blocked:", err);
  });

  enter.style.display = "none";
  content.style.display = "block";
}



