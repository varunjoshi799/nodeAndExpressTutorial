const { info } = require('console')
const express = require('express')
const app = express()
const PORT = 4000

// middleware
app.use(express.json())
app.use(express.static('public'))

// temp database
const db = []

// http;//172.0.0.1/path/varun/number/cool

// GET, POST, PATCH, PUT, DELETE

app.get('/', (req, res) => {
    console.log("You have reached the home route: GET")
    res.sendStatus(200)
})

app.post('/api/info', (req, res) => {
    const {information} = req.body
    console.log(`The posted information was ${information}`)
    db.push(information)
    console.log("DB: ", db)
    res.status(201).json({"yourMessage": information})
})

app.put('/api', (req, res) => {
    const {word, banana} = req.query
    console.log(word, banana)
    res.sendStatus(200)
})

app.delete('/delete/:id/:name', (req, res) => {
    const {id, name} = req.params
    console.log("What do you want to delete?", id, name)
    res.sendStatus(200)
})

app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`))