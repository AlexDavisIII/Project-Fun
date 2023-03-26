import { API_KEY } from "./config.js";

const heading = document.getElementById('pcHead');
const subHeading = document.getElementById('pcSubHead');
const gamesList = document.getElementById('gamesList');
const featuredHeading = document.getElementById('featuredHeading');
const featuredGame = document.getElementById('featuredGame');
const favoriteHeading = document.getElementById('favoriteHeading');
const favoriteGame = document.getElementById('favoriteGame');


console.log("hello");

//Sets html text to static headings
featuredHeading.innerHTML = "<h1>Featured Game<h1>"
favoriteHeading.innerHTML = "<h1>Favorite Game<h1>"


//makes a heading based on two paramateres. Whether it is an h1-h5 tag and the message
function setHeading (tag = "h1", message = "Welcome to PC Resort!"){
    let finalMessage = `<${tag}>${message}</${tag}>`;
    return heading.innerHTML = finalMessage;
    
}

//makes a sub heading based on two paramateres. Whether it is an h1-h5 tag and the message
function setSubHeading (tag = "h2", message = "Welcome to PC Resort!"){
    
    if(tag === "h1"){
        return subHeading.innerHTML = "Close. Please try using h2 or lower instead";
    }else{
        let finalMessage = `<${tag}>${message}</${tag}>`;
        return subHeading.innerHTML = finalMessage;
    }
}


//Function calling rawg API to display list of games by platform
async function getGames(){
    const games = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
        .then(response => response.json())
        .then(jsonData => {
            //gamesList.innerHTML =`<p>${JSON.stringify(jsonData)}</p>`
            console.log(jsonData);
            
            /* for (let i = 0; i <= jsonData.results.length; i++){
                if(jsonData.results[i].platforms[i].platform.name === "PC"){
                    let gameName = jsonData.results[i].name; //Name of selected game
                    let gameImage = jsonData.results[i].background_image; //Get background image of game

                   return featuredGame.innerHTML = `<ul>
                    <li>${gameName}</li>
                    <li><img src="${gameImage}"></li>
                    </ul>`;

                } else if (jsonData.results[i].platforms[i].platform.name != "PC") {
                    featuredGame.innerHTML = "<p>Searching...</p>"
                    console.log("Searching...");
                    console.log(jsonData.results[i].platforms[i].platform.name);

                }
            }**/


            for (let i = 0; i <= jsonData.results.length; i++){
                for(let y = 0; y <= jsonData.results[i].platforms.length; y++){
              
                    if(jsonData.results[i].platforms[y].platform.name !== "PC"){
                        
                        featuredGame.innerHTML = "<p>Searching...</p>"
                        console.log("Searching...");
                        console.log(jsonData.results[i].platforms[i].platform.name);

                    } else if (jsonData.results[i].platforms[y].platform.name === "PC") {
                        let gameName = jsonData.results[i].name; //Name of selected game
                        let gameImage = jsonData.results[i].background_image; //Get background image of game

                    return featuredGame.innerHTML = `<ul>
                        <li>${gameName}</li>
                        <li><img src="${gameImage}"></li>
                        </ul>`;                    

                    }


                }
                
                /*
                if(jsonData.results[i].platforms[i].platform.name !== "PC"){
                    
                    featuredGame.innerHTML = "<p>Searching...</p>"
                    console.log("Searching...");
                    console.log(jsonData.results[i].platforms[i].platform.name);
                    if(){

                    }


                } else if (jsonData.results[i].platforms[i].platform.name === "PC") {
                    let gameName = jsonData.results[i].name; //Name of selected game
                    let gameImage = jsonData.results[i].background_image; //Get background image of game

                   return featuredGame.innerHTML = `<ul>
                    <li>${gameName}</li>
                    <li><img src="${gameImage}"></li>
                    </ul>`;                    

                }**/




            }


        })
}



//Function calling my API to display my personal favorite game
async function personalFavoriteGame(){
    const games = await fetch('http://localhost:3000/mygames')
    .then(response => response.json())
    .then(jsonData => {
        gamesList.innerHTML = `My Favorite game is: ${jsonData["games"][0]["Name"]}`;
        console.log(jsonData)
    });
}




setHeading("h1", "PC Resort");
setSubHeading("h2", "A fun place to be a PC gamer");
getGames();
//personalFavoriteGame();
