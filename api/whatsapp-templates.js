// api/whatsapp-templates.js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const apiUrl = 'https://successstartsnode.vercel.app/api/whatsapp-templates';
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
};
