const chalk = require("chalk");

function showSongs(songs, selected) {
  console.clear();

  console.log(
    chalk.cyan("╔══════════════════════════════════════╗")
  );

  console.log(
    chalk.cyan("║") +
    chalk.bold.yellow("          🎵  MUSIC PLAYER  🎵        ") +
    chalk.cyan("║")
  );

  console.log(
    chalk.cyan("╠══════════════════════════════════════╣")
  );

  for (let i = 0; i < songs.length; i++) {
    let songName = songs[i].split(".")[0];

    if (selected === i + 1) {
      console.log(
        chalk.cyan("║") +
        chalk.green.bold(`  ▶ ${i + 1}. ${songName.padEnd(30)}`) +
        chalk.cyan("║")
      );
    } else {
      console.log(
        chalk.cyan("║") +
        chalk.white(`    ${i + 1}. ${songName.padEnd(30)}`) +
        chalk.cyan("║")
      );
    }
  }

  console.log(
    chalk.cyan("╠══════════════════════════════════════╣")
  );

  console.log(chalk.cyan("║") + "                                      " + chalk.cyan("║"));

  console.log(
    chalk.cyan("║") +
    chalk.blue("   ↑ ↓  Select") +
    chalk.white("     ENTER  ") +
    chalk.green("Play") +
    "        " +
    chalk.cyan("║")
  );

  console.log(
    chalk.cyan("║") +
    chalk.yellow("   P    Pause") +
    chalk.white("      R      ") +
    chalk.green("Resume") +
    "      " +
    chalk.cyan("║")
  );

  console.log(
    chalk.cyan("║") +
    chalk.red("   S    Stop") +
    chalk.white("       Q      ") +
    chalk.red("Quit") +
    "        " +
    chalk.cyan("║")
  );

  console.log(chalk.cyan("║") + "                                      " + chalk.cyan("║"));

  console.log(
    chalk.cyan("╚══════════════════════════════════════╝")
  );
}

function showPlaying(song) {
  console.log(
    "\n" + chalk.green.bold("▶️  Now Playing: ") + chalk.white(song)
  );
}

function showPaused() {
  console.log(
    "\n" + chalk.yellow.bold("⏸️  Paused")
  );
}

function showResumed() {
  console.log(
    "\n" + chalk.green.bold("▶️  Resumed")
  );
}

function showStopped() {
  console.log(
    "\n" + chalk.red.bold("⏹️  Stopped")
  );
}

function showFinished() {
  console.log(
    "\n" + chalk.cyan.bold("✅ Song finished")
  );
}

module.exports = {
  showSongs,
  showPlaying,
  showPaused,
  showResumed,
  showStopped,
  showFinished
};
