var express = require('express');
var router = express.Router();
var Student = require('../../models/student');

/* GET students listing. */
router.get('/', function (req, res, next) {
    var students = [];
    Student.find({}, function (err, result) {
        result.forEach(function (obj) {
            students.push(obj);
        });
        res.send(students);
    });
});

router.post('/', function (req, res, next) {
    var student = new Student();
    student.id = req.body.id;
    student.name = req.body.name;
    student.gender = req.body.gender;

    student.save(function (err) {
        if (err)
            res.send(err);
        res.json({code: 201, successful: true, message: 'Add successful!'})
    })
});

router.put('/:id', function (req, res, next) {
    var student = new Student;
    Student.find({id: req.params.id}, function (err, result) {
        if (err)
            res.send(err);
        student = result.pop();
        if(student === null || typeof(student) === 'undefined')
            res.json({code: 400, successful: false, message: 'Student is not exist!'});
        else{
            student.name = req.body.name;
            student.gender = req.body.gender;
            student.save(function (err) {
                if (err)
                    res.send(err);
                res.json({code: 202, successful: true, message: 'Updated!'})
            })
        }
    })
});

router.delete('/:id', function (req, res, next) {
    Student.remove({id: req.params.id}, function (err) {
        if(err)
            res.send(err);
        res.json({code: 202, successful: true, message: 'Deleted!'})
    })
});

module.exports = router;
