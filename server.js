var express = require('express');
const cors = require('cors');

// Create our app
const app = express();
const PORT = process.env.PORT || 8000;

app.use(function (req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://'+req.hostname + req.url)
    } else {
    next();
  }
})

app.use(cors({
  origin: 'http://localhost:8000',
  credentials: true
}));

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log(`Express server is up on port ${PORT}`);
});
