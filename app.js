const express = require('express');

const app = express(); // creating server

app.use(express.static('public')) // linking static files from public folder

//creating the routes

//route for home
app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html')
})

//route for about
app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html')
})

//route for work
app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/work.html')
})

app.listen(8000, () => {console.log("I am running on port 8000")})
