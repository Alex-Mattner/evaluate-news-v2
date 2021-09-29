const dotenv = require('dotenv');
const result = dotenv.config()

  if (result.error) {
    throw result.error
  }
  console.log(result.parsed)


//Global Variables
const key = process.env.API_KEY;
console.log(key)


var path = require('path')
const express = require('express')
var cors = require('cors')
const axios = require('axios')
const FormData = require('form-data')


const app = express()
app.use(cors())
app.use(express.json())

console.log(__dirname)

/*  app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
}); */

app.get('/', function (req, res) {
    res.send('api')
});

app.post('/getTranslation', async (req, res) => {
    const txt = req.body.txt
    const response = await getTranslationFromApi(txt)
    console.log(response)
    res.send(response)
});

const getTranslationFromApi = async (txt) => {
  
  const formdata = new FormData();
  
    formdata.append("key", key);
    formdata.append("txt", txt);
    const url = 'https://api.meaningcloud.com/lang-4.0/identification'
    try {
        const res = await axios.post(url, formdata, { headers: formdata.getHeaders()} )
        console.log(res.data)
        return res.data
    } catch(err) {
        return err
    }
};

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});


