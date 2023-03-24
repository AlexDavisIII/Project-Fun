import { API_KEY } from "./config.js";

const heading = document.getElementById('pcHead');
const subHeading = document.getElementById('pcSubHead');
const gamesList = document.getElementById('gamesList');

console.log("hello");

async function getGames(){
    const games = await fetch(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
        .then(response => response.json())
        .then(jsonData => {
            gamesList.innerHTML =`<p>${jsonData}</p>`
            console.log(jsonData)})
}


async function personalFavoriteGame(){
    const games = await fetch('http://localhost:3000/mygames')
    .then(response => response.json())
    .then(jsonData => {
        gamesList.innerHTML = `My Favorite game is: ${jsonData["games"][0]["Name"]}`;
        console.log(jsonData)
    });
}

personalFavoriteGame();
//getGames()
