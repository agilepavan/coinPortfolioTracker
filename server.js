var express = require('express');
const axios = require('axios');
// Create our app
const app = express();
const PORT = process.env.PORT || 8000;

app.use(function (req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://'+req.hostname + req.url)
    } else {
    next();
  }
});

app.use('/bittrex/:apiKey', function (req, res) {
    const getApiKey = req.params.apiKey;
    const bittrexApi = `https://bittrex.com/api/v1.1/account/getbalances?apikey=${getApiKey}&nojsoncallback=1`;
    const requestUrl = `${bittrexApi}`;
    axios.get(requestUrl).then((response) => {
      console.log(response.data);
     res.send(response.data);
   });
});


app.use(express.static('public'));

app.listen(PORT, function () {
  console.log(`Express server is up on port ${PORT}`);
});
