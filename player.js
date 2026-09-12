const { spawn } = require("child_process");
const ui = require("./ui");

let childProcess = null;
let manuallyStopped = false;

function player(selected, songs) {
  const song = songs[selected - 1];

  // Stop previous song if one is playing
  if (childProcess) {
    manuallyStopped = true;
    childProcess.kill("SIGTERM");
    childProcess = null;
  }

  manuallyStopped = false;

  console.log(`\n▶️  Now Playing: ${song.split(".")[0]}`);

  childProcess = spawn("afplay", [
    `./songs/${song}`
  ]);

  childProcess.on("close", () => {

    // Only show "finished" if the song actually finished
    if (!manuallyStopped) {
      ui.showFinished();
    }

    childProcess = null;
  });
}

function pause() {
  if (childProcess) {
    childProcess.kill("SIGSTOP");
    ui.showPaused();
  }
}

function resume() {
  if (childProcess) {
    childProcess.kill("SIGCONT");
    ui.showResumed();
  }
}

function stop() {
  if (childProcess) {

    // Tell the close event this was a manual stop
    manuallyStopped = true;

    childProcess.kill("SIGTERM");
    childProcess = null;

    ui.showStopped();
  }
}

module.exports = {
  player,
  pause,
  resume,
  stop
};
