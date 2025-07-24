const audio = document.getElementById("audio-player");
let currentWave;

// Handle play/pause buttons on each track
document.querySelectorAll(".play-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const audioSrc = btn.getAttribute("data-audio");
    const wave = btn.nextElementSibling;

    // Reset all other tracks
    document.querySelectorAll(".wave").forEach(w => w.style.display = "none");
    document.querySelectorAll(".play-btn").forEach(b => b.textContent = "▶");

    // If same track playing, pause it
    if (!audio.paused && audio.src.includes(audioSrc)) {
      audio.pause();
      btn.textContent = "▶";
      wave.style.display = "none";
      return;
    }

    // Play selected track
    audio.src = audioSrc;
    audio.play();
    btn.textContent = "⏸";
    wave.style.display = "block";
    currentWave = wave;
  });
});

// When audio ends, reset buttons
audio.addEventListener("ended", () => {
  document.querySelectorAll(".play-btn").forEach(b => b.textContent = "▶");
  if (currentWave) currentWave.style.display = "none";
});

// Smooth scroll to trending tracks when CTA clicked
document.querySelector(".cta").addEventListener("click", () => {
  document.querySelector(".tracks").scrollIntoView({ behavior: "smooth" });
});
