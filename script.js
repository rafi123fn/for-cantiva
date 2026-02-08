document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  const enter = document.getElementById("enterText");

  enter.addEventListener("click", () => {
    music.volume = 0.8;
    music.play().then(() => {
      enter.style.display = "none";
    }).catch(err => {
      alert("Audio blocked. Please tap again.");
      console.log(err);
    });
  });
});
