const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: [3, "Server Validation Error: Pet's name cannot be shorter than 3 character!"],
        required: [true, "Pet's name is requied!"],
        unique: true
    },
    type: {
        type: String,
        minLength: [3, "Server Validation Error: Pet's 'Type' must be atleat 3 characters!"],
        required: [true, "Server Validation Error: A pet type is requied!"]
    },
    description: {
        type: String,
        minLength: [3, "Server Validation Error: Pet's description must be atleast 3 characters!"],
        required: [true, "Server Validation Error: A pet must have a description!"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    likes: {
        type: Number
    }
}, {timestamps: true})

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;