const { spawn } = require("child_process");
const ui = require("./ui");

let childProcess = null;

function player(selected, songs) {

  const song = songs[selected - 1];

  if (childProcess) {
    childProcess.kill("SIGKILL");
  }

  console.log(`\n▶️  Now Playing: ${song.split(".")[0]}`);

  childProcess = spawn("afplay", [
    `./songs/${song}`
  ]);

  childProcess.on("close", () => {
    childProcess = null;
    ui.showFinished();
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

    childProcess.kill("SIGCONT");
    childProcess.kill("SIGKILL");

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
