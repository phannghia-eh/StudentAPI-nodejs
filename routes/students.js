var express = require('express');
var router = express.Router();

var studentController = require('../controller/studentController');

router.get('/', studentController);