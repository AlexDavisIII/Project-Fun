const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/mygames', (req, res) => {
    let myFavoriteGames = {
        "count": 3,
        "games": [
            {
                "id": 1,
                "Name": "Super Mario 64",
                "Platform": "Nintendo 64",
                "Genre": "Platformer",
                "Developer": "Nintendo"
            },
            {
                "id": 2,
                "Name": "SSX 3",
                "Platform": ["Playstation 2", "GameCube", "Xbox"],
                "Genre": ["Arcade", "Alternative Sports"],
                "Developer": "EA Sports BIG"
            },
            {
                "id": 3,
                "Name": "Starfield",
                "Platform": ["PC", "Xbox"],
                "Genre": "Todd Howard",
                "Developer": "Tood Bethesda Howard"
            }
        ]
    }

    res.send(JSON.stringify(myFavoriteGames))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})