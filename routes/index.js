var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Index page!</h1>');
  res.end();
});

module.exports = router;
