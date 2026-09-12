function showSongs(songs, selected) {
  console.clear();

  console.log("╔══════════════════════════════════════╗");
  console.log("║          🎵  MUSIC PLAYER  🎵        ║");
  console.log("╠══════════════════════════════════════╣");

  for (let i = 0; i < songs.length; i++) {
    let songName = songs[i].split(".")[0];

    if (selected === i + 1) {
      console.log(`║  ▶ ${i + 1}. ${songName.padEnd(30)}║`);
    } else {
      console.log(`║    ${i + 1}. ${songName.padEnd(30)}║`);
    }
  }

  console.log("╠══════════════════════════════════════╣");
  console.log("║                                      ║");
  console.log("║   ↑ ↓  Select     ENTER  Play        ║");
  console.log("║   P    Pause      R      Resume      ║");
  console.log("║   S    Stop       Q      Quit        ║");
  console.log("║                                      ║");
  console.log("╚══════════════════════════════════════╝");
}

function showPlaying(song) {
  console.log(`\n▶️  Now Playing: ${song}`);
}

function showPaused() {
  console.log("\n⏸️  Paused");
}

function showResumed() {
  console.log("\n▶️  Resumed");
}

function showStopped() {
  console.log("\n⏹️  Stopped");
}

function showFinished() {
  console.log("\n✅ Song finished");
}

module.exports = {
  showSongs,
  showPlaying,
  showPaused,
  showResumed,
  showStopped,
  showFinished
};
