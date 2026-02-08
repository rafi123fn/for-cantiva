document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const enter = document.getElementById("enterText");

  enter.addEventListener("click", () => {
    music.currentTime = 0;
    music.volume = 0.9;

    music.play().then(() => {
      enter.style.display = "none";
    }).catch(err => {
      console.log("Play failed:", err);
      alert("Tap once more 🤍");
    });
  });
});


