const axios = require('axios');

const getWhatsAppTemplates = async (req, res) => {
    try {
        const whatsappBusinessAccountId = "159102517296083";
        const fields = "";
        const limit = "10";
        const accessToken = "EAANJt8kivpwBOwU7VZBUWfr1Ws3ReglXwCcuRD5vqAjEUtiXAZAZB2WpvWfVnHRMgYeQdP1zW24AZCOEjH19K4PhwDHmu2ZAK2dtpei5PlZBlzaWuUCNkfn1ct5ufKopfE10aALk0yOUDzrVwklLYbFMEZA3ppor4NeGf2P9R9z9MqF8kiZBtfwIt1mrt8WbgGFBnnzVGUM1IXluCBgXdyMZD";

        const url = `https://graph.facebook.com/v18.0/${whatsappBusinessAccountId}/message_templates`;
        const params = {
            fields: fields,
            limit: limit,
        };

        const headers = {
            Authorization: `Bearer ${accessToken}`,
        };

        const response = await axios.get(url, { headers: headers, params: params });

        if (response.status === 200) {
            const templates = response.data;
            res.json({ data: templates.data, fullResponse: response.data });
        } else {
            res.status(response.status).json({ error: response.data });
        }
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getWhatsAppTemplates,
};
