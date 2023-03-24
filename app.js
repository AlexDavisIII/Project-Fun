const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/mygames', (req, res) => {
    let myFavoriteGames = {
        "count": 3,
        "games": [
            {
                "Name": "Super Mario 64",
                "Platform": "Nintendo 64",
                "Genre": "Platformer",
                "Developer": "Nintendo"
            },
            {
                "Name": "SSX 3",
                "Platform": ["Playstation 2", "GameCube", "Xbox"],
                "Genre": ["Arcade", "Alternative Sports"],
                "Developer": "EA Sports BIG"
            },
            {
                "Name": "Starfield",
                "Platform": ["PC", "Xbox"],
                "Genre": "Todd Howard",
                "Developer": "Tood Bethesda Howard"
            }
        ]
    }
    
    res.send(     
        `<h1>You wanted to know! You can have them!</h1>
        ${JSON.stringify(myFavoriteGames)}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})