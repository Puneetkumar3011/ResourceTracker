var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function (req, res, next) {
    User.find()
        .exec(function (err, users) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                user: 'Success',
                obj: users
            });
        });
});

router.post('/', function (req, res, next) {
    var user = new User({
        content: req.body.content
    });
    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            user: 'Saved user',
            obj: result
        });
    });
});

router.patch('/:id', function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(500).json({
                title: 'No User Found!',
                error: {user: 'User not found'}
            });
        }
        user.content = req.body.content;
        user.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                user: 'Updated user',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(500).json({
                title: 'No User Found!',
                error: {user: 'User not found'}
            });
        }
        user.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                user: 'Deleted user',
                obj: result
            });
        });
    });
});

module.exports = router;