function startSong() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.6;
  music.play();

  document.getElementById("enterText").style.display = "none";
}
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const enterText = document.getElementById("enterText");

  if (!music) {
    console.log("❌ audio tidak ketemu");
    return;
  }
  if (!enterText) {
    console.log("❌ tombol tidak ketemu");
    return;
  }

  enterText.addEventListener("click", () => {
    music.volume = 1;
    music.play()
      .then(() => console.log("✅ musik jalan"))
      .catch(err => console.log("❌ play error:", err));
  });
});
