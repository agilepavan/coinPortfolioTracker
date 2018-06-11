var express = require('express');
const axios = require('axios');
const crypto = require('crypto');
// Create our app
const app = express();
const PORT = process.env.PORT || 8000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://'+req.hostname + req.url)
    } else {
    next();
  }
});

app.use('/bittrex/:apiKey', function (req, res) {
    const getApiKey = req.params.apiKey;
    const getApiSecret = req.params.apiSecret;
    const nonce = Math.floor(new Date().getTime()/1000);
    const bittrexApi = `https://bittrex.com/api/v1.1/account/getbalances?apikey=${getApiKey}&nonce=${nonce}`;
    const hmac = crypto.createHmac('sha512', bittrexApi, getApiSecret);
    const requestUrl = `${bittrexApi}`;

    axios.get(requestUrl).then((response) => {
      console.log(hmac.digest('hex'));
      console.log(response.data);
     res.send(response.data);
   });
});


app.use(express.static('public'));

app.listen(PORT, function () {
  console.log(`Express server is up on port ${PORT}`);
});
