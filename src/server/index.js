var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
//const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    // Code vorher: res.sendFile(path.resolve('src/client/views/index.html'))
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
  



const formdata = new FormData();
formdata.append("key", "30c6dda9499377485d59ad4eec48ff34");
formdata.append("txt", "YOUR TEXT HERE");

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

const response = fetch("https://api.meaningcloud.com/lang-4.0/identification", requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then({status, body} => console.log(status, body))
  .catch(error => console.log('error', error));