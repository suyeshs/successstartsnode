const bcrypt = require('bcrypt');
const User = require('../models/userModel');

// Controller function for user registration
const registerUser = async (req, res) => {
    try {
        const { name, businessName, phoneNumber, email, country, city, username, password } = req.body;

        // Check if the username and email already exist
        const existingUsername = await User.findOne({ username });
        const existingEmail = await User.findOne({ email });

        if (existingUsername || existingEmail) {
            return res.status(400).json({ error: 'Username or email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            businessName,
            phoneNumber,
            email,
            country,
            city,
            username,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    registerUser,
};
