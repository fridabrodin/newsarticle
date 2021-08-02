const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

/*const textapi = {
    application_key: process.env.API_KEY
  };*/


// What we need to create an URL from the API
let baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const apiKey = process.env.API_KEY;
let json = "&of=json&txt=";
let lang = "&model=IPTC_en";

// Our HTML elements

const results = document.getElementById("results");
const button = document.getElementById("submit");

// Event listener to add function to existing HTML DOM element = the generate button
button.addEventListener("click", getUrl);

async function getUrl(){
    const userUrl =  document.getElementById("name").value;

      const response = await fetch(baseURL+apiKey+json+userUrl+lang)
     .then(response => response.json())
     .then(data => {
       console.log(data);
     })
     .catch(err => content.innerHTML = "Please enter a valid zip code")
     }