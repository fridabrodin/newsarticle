const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))
app.use(express.json())

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

app.post("/api", (request, response)=>{
  console.log("I got a request!");
  console.log(request.body);
}
);

// What we need to create an URL from the API
let baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=";
const apiKey = process.env.API_KEY;
let url = "&url=";
let lang = "&lang=en";

/* GET request to get Meaningcloud API data*/



  /* POST ROUTE */



