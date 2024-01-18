const express = require('express');
const cors = require('cors');
const whatsappController = require('./controllers/whatsappController');
const mongoose = require('mongoose');

const facebookController = require('./controllers/facebookController');
const app = express();
const port = 3000;

// Enable CORS
//app.use(cors());

// In your server-side code
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


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
