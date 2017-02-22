var express = require('express');
var router = express.Router();
var app = express();

router.get('/', function (req, res, next) {
    //res.send({data: 'Test Data'});
    res.render('index', { appReqType: 'Admin' });
});

module.exports = router;
