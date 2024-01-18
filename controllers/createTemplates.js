const axios = require('axios');

const createWhatsappTemplate = async () => {
  const accessToken = 'EAANJt8kivpwBOwU7VZBUWfr1Ws3ReglXwCcuRD5vqAjEUtiXAZAZB2WpvWfVnHRMgYeQdP1zW24AZCOEjH19K4PhwDHmu2ZAK2dtpei5PlZBlzaWuUCNkfn1ct5ufKopfE10aALk0yOUDzrVwklLYbFMEZA3ppor4NeGf2P9R9z9MqF8kiZBtfwIt1mrt8WbgGFBnnzVGUM1IXluCBgXdyMZD'; // Replace with your access token
  const businessAccountId = '159102517296083'; // Replace with your ID

  const templateData = {
    name: 'Order Confirmation',
    components: [
      {
        type: 'BODY',
        text: 'Your order {{1}} has been confirmed.'
      }
    ],
    language: 'en_US'
  };

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v14.0/${businessAccountId}/message_templates`,
      templateData,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );

    console.log('Template created:', response.data);
  } catch (error) {
    console.error('Error creating template:', error);
  }
};

module.exports = {
    createWhatsappTemplate,
};

