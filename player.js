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

process.stdin.on("data", (input) => {
  // console.log(+input.toString());
  const userInput = input.trim().toString();
  if (userInput === 'p') {
    childProcess.kill()
    process.stdin.setRawMode(false)
    process.exit(0)
    pause();
  }

  if (userInput === 'r') {
    resume();
  }

  if (userInput > 0 && userInput < songs.length) {
    player(+userInput)
  }

  // player(+userInput);
});

let childProcess = null;


function player(userInput) {
  console.log(`Selected Song: ${songs[userInput - 1]}`);
  if (childProcess) {
    childProcess.kill();
  }

  childProcess = spawn("afplay", [`./songs/${songs[userInput - 1]}`]);
  childProcess.on("close", () => {
    console.log("Song finished...");
    process.exit(0);
  });
}

function pause() {
  if (childProcess) {
    childProcess.kill('SIGSTOP')
    console.log("Song Paused...")
    //SIGSTOP

  }
}

function resume() {
  if (childProcess) {
    childProcess.kill('SIGCONT')
    console.log("Song Resumed")
    //SIGCONT
  }
}
