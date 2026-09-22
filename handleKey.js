const fs = require("fs");

const {
  player,
  pause,
  resume,
  stop
} = require("./player");

const ui = require("./ui");

const songs = fs.readdirSync("./songs")
  .filter((file) => file.endsWith(".mp3"));

let selected = 1;

ui.showSongs(songs, selected);

process.stdin.setEncoding("utf-8");
process.stdin.setRawMode(true);

process.stdin.on("data", (input) => {

  // Quit
  if (input === "q") {
    stop(() => {
        process.stdin.setRawMode(false);
        process.exit(0);
    });
}

  // Up arrow
  if (input[2] === "A") {
    if (selected > 1) {
      selected--;
      ui.showSongs(songs, selected);
    }
  }

  // Down arrow
  if (input[2] === "B") {
    if (selected < songs.length) {
      selected++;
      ui.showSongs(songs, selected);
    }
  }

  // Enter = Play
  if (input === "\r") {
    player(selected, songs);
  }

  // P = Pause
  if (input === "p") {
    pause();
  }

  // R = Resume
  if (input === "r") {
    resume();
  }

  // S = Stop
  if (input === "s") {
    stop();
  }
});