var express = require('express');
var router = express.Router();
var BussDomain = require('../../models/bussdomain');

router.get('/', function (req, res, next) {
    BussDomain.find()
        .exec(function (err, resData) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: resData
            });
        });    
});

router.post('/', function (req, res, next) {
    var bussDomain = new BussDomain({
        name: req.body.name,
        description: req.body.description
    });
    bussDomain.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            response: result
        });
    });
});

module.exports = router;