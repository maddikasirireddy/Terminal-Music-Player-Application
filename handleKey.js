const fs = require("fs");

const ui = require("./ui");
const {
  player,
  pause,
  resume,
  stop
} = require("./player");

const path = "./songs";

const songs = fs
  .readdirSync(path)
  .filter((el) => el.endsWith(".mp3"));

let selected = 1;

ui.showSongs(songs, selected);

process.stdin.setEncoding("utf-8");
process.stdin.setRawMode(true);
process.stdin.resume();

process.stdin.on("data", (input) => {

  // Quit
  if (input === "q") {
    stop();

    process.stdin.setRawMode(false);
    process.stdin.pause();

    process.exit(0);
  }

  // Up Arrow
  if (input[2] === "A") {

    if (selected === 1) return;

    selected--;

    ui.showSongs(songs, selected);
  }

  // Down Arrow
  if (input[2] === "B") {

    if (selected === songs.length) return;

    selected++;

    ui.showSongs(songs, selected);
  }

  // Play
  if (input === "\r") {
    player(selected, songs);
  }

  // Pause
  if (input === "p") {
    pause();
  }

  // Resume
  if (input === "r") {
    resume();
  }

  // Stop
  if (input === "s") {
    stop();
  }
});
