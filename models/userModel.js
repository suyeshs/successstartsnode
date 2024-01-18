const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    businessName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
