const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/myquote', (req, res) => {
    const someQuotes = {
        "count": 11,
        "quotes": [
            {
                "id": 1,
                "quote": "Have you ever thought to yourself, what if you were the fastest hedgehog of all time? ...me either.",
                "author": "Alex Davis"
            },
            {
                "id": 2,
                "quote": "My Journey: NES -> Genesis -> N64 -> PS -> DC -> Wii -> PC.",
                "author": "Alex Davis"
            },
            {
                "id": 3,
                "quote": "If you haven't already, play HiFi Rush. You can find it...on the PC!",
                "author": "Alex Davis"
            },
            {
                "id": 4,
                "quote": "When I was young, I asked for Nintendo. I grew to a teen, and asked for Playstation. I went to college and got an Xbox. Now that I'm wiser, I only need PC",
                "author": "Alex Davis"
            },
            {
                "id": 5,
                "quote": "Being Serious, check out Gamers Nexus. Steve is pretty cool honestly",
                "author": "Alex Davis"
            },
            {
                "id": 6,
                "quote": "Hi I'm Alex Davis and that's Jonny Knoxville! Welcome to Code Louisville!",
                "author": "Alex Davis"
            },
            {
                "id": 7,
                "quote": "I'm dating this quote: it's 2023 and a 3090 is more than enough",
                "author": "Alex Davis"
            },
            {
                "id": 8,
                "quote": "I'll say it: Nickelback isn't terrible.",
                "author": "Alex Davis"
            },
            {
                "id": 9,
                "quote": "The opening to Super Mario 64 still gives me chills",
                "author": "Alex Davis"
            },
            {
                "id": 10,
                "quote": "Wait...why ISN'T there a pizza parlor called 'Papa Johnny's?",
                "author": "Alex Davis"
            },
            {
                "id": 11,
                "quote": "Wait...why ISN'T there a pizza parlor called 'Papa Johnny's?",
                "author": "Alex Davis"
            }
        ]
    }

    res.send(JSON.stringify(someQuotes));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})