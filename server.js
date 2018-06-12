var express = require('express');
const axios = require('axios');
const crypto = require('crypto');
// Create our app
const app = express();
const PORT = process.env.PORT || 8000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use('/bittrex/:apiKey/:apiSecret', function (req, res) {
    const getApiKey = req.params.apiKey;
    const getApiSecret = req.params.apiSecret;
    console.log(getApiSecret);
    const nonce = Math.floor(new Date().getTime()/1000);
    const bittrexApi = encodeURI(`https://bittrex.com/api/v1.1/account/getbalances?apikey=${getApiKey}&nonce=${nonce}`);
    const hmac = crypto.createHmac('sha512', bittrexApi, getApiSecret);
    const requestUrl = `${bittrexApi}`;

    axios.get(requestUrl, {
      mode: 'no-cors',
      url: PORT,
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-control-Allow-Headers': getApiSecret,
      },
    }).then((response) => {
      console.log(hmac.digest('hex'));
      console.log(response.data);
     res.send(response.data);
   });
});


app.use(express.static('public'));

app.listen(PORT, function () {
  console.log(`Express server is up on port ${PORT}`);
});
