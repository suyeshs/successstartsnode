const express = require('express');
const cors = require('cors');
const whatsappController = require('./controllers/whatsappController');
const mongoose = require('mongoose');

const facebookController = require('./controllers/facebookController');
const app = express();
const port = 3000;

// Define the allowCors middleware
const allowCors = fn => async (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    return await fn(req, res);
};

// Enable CORS for all routes
app.use(allowCors);

// Define routes

// Root route
app.get('/', (req, res) => {
    res.send('Hello, this is your backend server!');
});

// WhatsApp API route
app.get('/api/whatsapp-templates', whatsappController.getWhatsAppTemplates);

// Facebook Message route
app.post('/api/send-message', facebookController.sendMessage);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
