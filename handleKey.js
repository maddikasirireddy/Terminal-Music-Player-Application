const songs = ["Queen", "Redbone", "Sample", "Dhurandhar"];

let selected = 1;
showSongs();

process.stdin.setEncoding("utf-8");
process.stdin.setRawMode(true);

process.stdin.on("data", (input) => {
  if (input === "q") {
    process.stdin.setRawMode(false);
    process.exit(0);
  }

  // Up Arrow
if (input[2] === 'A') {
  if(selected===0)return 
  selected--
  process.stdout.write(`\x1b[${songs.length}A`)
  showSongs()
}

  // Down Arrow
if (input[2] === 'B') {
  if(selected===songs.length)return 
  selected++
  process.stdout.write(`\x1b[${songs.length}A`)
  showSongs()
  }
});

function showSongs() {
  for (let i = 0; i < songs.length; i++) {
    process.stdout.write('\x1b[2K')
      //Clear line
        if (selected===i+1) {
          console.log(`->${i + 1}: ${songs[i]}`);
        } else {
            console.log(`${i + 1}: ${songs[i]}`);
      }
  }
}