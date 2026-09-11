const { spawn } = require("child_process");
const fs = require("fs");

// Read all the mp3 files
const path = "./songs";
const songs = fs.readdirSync(path).filter((el) => el.endsWith(".mp3"));

console.log(`🎶 Welcome to the Songs App 🎶\n`);

for (let i = 0; i < songs.length; i++) {
  console.log(`${i + 1}: ${songs[i].split(".")[0]}`);
}

console.log(`\n🎵 Select a number to play the song`);

process.stdin.setEncoding("utf-8");
process.stdin.setRawMode(true);

let childProcess = null;

process.stdin.on("data", (input) => {
  const userInput = input.toString().trim();

  // Pause
  if (userInput === "p") {
    pause();
  }

  // Resume
  if (userInput === "r") {
    resume();
  }

  // Quit
  if (userInput === "q") {
    stop();
    process.stdin.setRawMode(false);
    process.exit(0);
  }

  // Select song
  if (userInput > 0 && userInput <= songs.length) {
    player(+userInput);
  }
});

function player(userInput) {
  console.log(`Selected Song: ${songs[userInput - 1]}`);

  if (childProcess) {
    childProcess.kill("SIGKILL");
  }

  childProcess = spawn("afplay", [`./songs/${songs[userInput - 1]}`]);

  childProcess.on("close", () => {
    console.log("Song finished...");
  });
}

function pause() {
  if (childProcess) {
    childProcess.kill("SIGSTOP");
    console.log("Song Paused...");
  }
}

function resume() {
  if (childProcess) {
    childProcess.kill("SIGCONT");
    console.log("Song Resumed...");
  }
}

function stop() {
  if (childProcess) {
    childProcess.kill("SIGCONT");
    childProcess.kill("SIGKILL");
    childProcess = null;
    console.log("Song Stopped...");
  }
}
