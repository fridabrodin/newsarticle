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

//------------------------------------------------------------------------------------------------------------------------

// What we need to create an URL from the API
let baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const apiKey = process.env.API_KEY;
let url = "&url=";
let lang = "&lang=en";

/* Function to GET Meaningcloud API data*/

const getNews = async (baseURL,apiKey,news,url,lang)=>{
    const res = await fetch(baseURL+apiKey+news+url+lang)
    try {
      const data = await res.json();
      return data;
    }  catch(error) {
      console.log("error", error);
    }
  }