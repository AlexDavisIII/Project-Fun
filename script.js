import { API_KEY } from "./config.js";

const heading = document.getElementById('pcHead');
const subHeading = document.getElementById('pcSubHead');
const quoteList = document.getElementById('quoteList');
const featuredHeading = document.getElementById('featuredHeading');
const featuredGame = document.getElementById('featuredGame');
const randomizer = document.getElementById('randomizer');
const copyright = document.getElementById('copyright');
//checking to make sure things even connected in the first place
console.log("hello");

//Sets html text to static headings
featuredHeading.innerHTML = "<h1>You should check out...<h1>"
copyright.innerHTML = "<p>&copy; Alex Davis III with Code Louisville</p>"


//makes a heading based on two paramateres. Whether it is an h1-h5 tag and the message
function setHeading (tag = "h1", message = "Welcome to PC Resort!"){
    let finalMessage = `<${tag}>${message}</${tag}>`;
    return heading.innerHTML = finalMessage;
    
}


//makes a heading based on two paramateres. Whether it is an h1-h5 tag and the message
function setSubHeading (tag = "h3", message){
    let finalMessage = `<${tag}>${message}</${tag}>`;
    return subHeading.innerHTML = finalMessage;
    
}


//Function calling rawg API to display list of games by platform
async function getGames(){
    const games = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            

            //Where the magic happens for the Featured Game section
            for (let i = Math.floor(Math.random() * jsonData.results.length); i <= jsonData.results.length; i++){
                for(let y = 0; y <= jsonData.results[i].platforms.length; y++){
                    if(jsonData.results[i].platforms[y].platform.name !== "PC"){
                        if(y > jsonData.results[i].platforms[y].length){
                            console.log("try again");
                        }
                        featuredGame.innerHTML = "<p>Searching...</p>"
                        console.log("Searching...");
                        console.log(jsonData.results[i].platforms[y].platform.name);
                    }else if (jsonData.results[i].platforms[y].platform.name === "PC") {
                        let gameName = jsonData.results[i].name; //Name of selected game
                        let gameImage = jsonData.results[i].background_image; //Get background image of game
                    
                    return featuredGame.innerHTML = `<ul>
                        <li>${gameName}</li>
                        <li><img src="${gameImage}" width="30%;"></li>
                        </ul>`;                    
                    }
                }
            }
        })
}



//Function calling my API to display my personal favorite game
async function getPersonalQuote(){
    const games = await fetch('http://localhost:3000/myquote')
    .then(response => response.json())
    .then(jsonData => {

        for(let i = Math.floor(Math.random() * jsonData.quotes.length); i < jsonData.quotes.length; i++){
            console.log(i);
            return quoteList.innerHTML = `${JSON.stringify(jsonData.quotes[i].quote)} ~ ${jsonData.quotes[i].author}`;
        }
    });
}


//function calls for displaying information to the app
setHeading("h1", "PC Game Picker");
setSubHeading("h2", "Not sure what to play on your PC? We're here for you!" )
getPersonalQuote();
getGames();


//Event Listeners
randomizer.addEventListener('click', () => {
    getGames();
})


