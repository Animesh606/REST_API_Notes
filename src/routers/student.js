const express = require('express');
const Student = require('../models/students');
const router = new express.Router();

// post using async-await 
router.post('/students', async (req, res) => {
    try {
        const student = new Student(req.body);
        const createdStudent = await student.save();
        res.status(201).send(createdStudent);
    } catch (error) {
        res.status(400).send(error); 
    }
})
// // post using Promise 
// router.post('/students', (req, res) => {
//     const student = new Student(req.body);
//     student.save().then(() => {
//         res.status(201).send(student);
//     }).catch((err) => {
//         res.status(400).send(err);
//     })
// })

// get All students details
router.get('/students', async (req, res) => {
    try {
        const getStudents = await Student.find();
        res.status(226).send(getStudents);
    } catch (error) {
        res.status(400).send(error);
    }
})
// get student details by Id
router.get('/students/:id', async (req, res) => {
    try {
        const getStudent = await Student.findById(req.params.id);
        if(getStudent)
            res.status(200).send(getStudent);
        else
            res.status(404).send();
    } catch (error) {
        res.status(500).send(error);
    }
})

// update student details by Id
router.patch('/students/:id', async (req, res) => {
    try {
        const updatedDetails = await Student.findByIdAndUpdate(req.params.id, req.body, {new : true});
        res.status(200).send(updatedDetails);
    } catch (error) {
        res.status(400).send(error);
    }
})

// delete student details by Id
router.delete('/students/:id', async (req, res) => {
    try {
        const deleteDetails = await Student.findByIdAndDelete(req.params.id);
        if(deleteDetails)
            res.status(200).send(deleteDetails);
        else
            res.status(400).send();
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;