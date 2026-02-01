function startSong() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.6;
  music.play();

  document.getElementById("enterText").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const enterText = document.getElementById("enterText");

  enterText.addEventListener("click", () => {
    music.play().catch(err => {
      console.log("Autoplay blocked:", err);
    });
  });
});
