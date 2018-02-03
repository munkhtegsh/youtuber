
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3001;
var axios = require('axios');
var YTSearch = require('youtube-api-search');
var google = require('googleapis');
var baseURL = '/api/';


const youtubeV3 = google.youtube({ 
    version: 'v3', 
    auth: 'AIzaSyCP9i60WSl8NaprDSmTW8CZjiUb0KnhkDA' 
});

var request =  youtubeV3.search.list({
    part: 'snippet',
    type: 'video',
    q: 'Cat',
    maxResults: 50,
    order: 'date',
    safeSearch: 'moderate',
    videoEmbeddable: true
}, (err, response) => {
    console.log(response)
});

app.listen(PORT, () => console.log(`Magic is happening on port ${PORT}`))