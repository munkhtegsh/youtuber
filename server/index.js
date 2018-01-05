var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3001;
var baseURL = '/api/';
var axios = require('axios');

app.use(bodyParser.json());
app.get('/api/users', function(req, res) {
    axios.get('https://api.youtube.com/')
    .then(respond => {
        //res.status(200).send(respond)
        console.log(respond)
    })
});

app.listen(PORT, () => console.log(`Magic is happening on port ${PORT}`))