var express = require('express');
var router = express.Router();


router.get('/', function (req, res) {
	res.end('Welkom bij ons project\n');
});
module.exports = router;
