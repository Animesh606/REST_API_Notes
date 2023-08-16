const mongoose = require('mongoose');
const validator = require('validator');
const { default: isEmail } = require('validator');

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        min : 2
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error('Email is Invalid!');
        }
    },
    phone : {
        type : String,
        required : true,
        unique : [true, 'Mobile Number already exist'],
        validate(value){
            if(!validator.isMobilePhone(value))
                throw new Error('Invalid Mobile Number');
        }
    },
    address : {
        type : String,
        required : true
    }
})

const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;