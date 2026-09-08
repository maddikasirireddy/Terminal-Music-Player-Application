const { spawn } = require("child_process");
const { log } = require("console");
const fs = require("fs")

//Read all the mp3 files
const path = "./songs";

const songs = fs.readdirSync(path).filter(el => el.endsWith(".mp3"))

console.log("Welcome to the songs App\n")

for (let i = 0; i < songs.length; i++){
    console.log(`${i + 1}: ${songs[i].split(".")[0]}`);
}

console.log("\nSelect a number to play a songs\n")

process.stdin.setEncoding("utf-8")

process.stdin.on("data", (input) => {
    const userInput = +input.toString()
    player(userInput)
})

function player(userInput) {
    console.log(`Selected Song: ${songs[userInput - 1]}`)
    const childProcess = spawn("afplay", [`./songs/${songs[userInput - 1]}`])
    childProcess.on("close", () => {
        console.log("Song finished...")
        process.exit();
    })

}

