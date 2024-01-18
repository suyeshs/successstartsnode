// facebookController.js

const axios = require('axios');

const sendMessage = async (req, res) => {
    try {
        // Extract phone number from the request body
        const phoneNumber = req.body.phoneNumber;

        const url = 'https://graph.facebook.com/v17.0/221113081078384/messages';
        const access_token = 'EAANJt8kivpwBO5eTSjuTbP76552WH3qtY8CGZAqLDmCiVvVgXUr9PGNKFxcN4O8mOZAVlDplu9PPzKJ2MVTNK7bqwNeoT3KS6CkSmHeYLnweeMZBHZAUMppDI2kRDdudz0QpKqpfCUQbhCAquEoEosssMBYqPP8Y22PUfI3d25Q9PepWtdzxW0MMyaUBGdT2Yaw2BkcaSqUg9o44Tx9t';

        const headers = {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json',
        };

        const data = {
            'messaging_product': 'whatsapp',
            'to': phoneNumber,
            'type': 'template',
            'template': {
                'name': 'hello_world',
                'language': {
                    'code': 'en_US',
                },
            },
        };

        const response = await axios.post(url, data, { headers: headers });

        res.status(response.status).json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    sendMessage,
};
