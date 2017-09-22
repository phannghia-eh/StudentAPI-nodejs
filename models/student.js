var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var student=new Schema({
    id: Number,
    name: String,
    gender: String
});

var student = mongoose.model('Student', student);

module.exports = student;