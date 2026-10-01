// Keep only one audio/video item playing at a time.
const players = [...document.querySelectorAll('audio, video')];
players.forEach((player) => {
  player.addEventListener('play', () => {
    players.forEach((other) => {
      if (other !== player && !other.paused) other.pause();
    });
  });
});
