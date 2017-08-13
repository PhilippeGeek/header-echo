var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var headersObj = req.headers;
    var headers = [];
    for(var head in headersObj){
      if(headersObj.hasOwnProperty(head))
        headers.push({name: head, value: headersObj[head]})
    }
    res.render('index', { title: 'Server headers', headers: headers });
});

module.exports = router;
