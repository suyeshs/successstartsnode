const axios = require('axios');

const getWhatsAppTemplates = async (req, res) => {
    try {
        const whatsappBusinessAccountId = "159102517296083";
        const fields = "";
        const limit = "10";
        const accessToken = "EAANJt8kivpwBO4lGZAxVhiWU1Xt4BtTgUWHB6ga1c5DVfreqZCl72c7wugdwa4R5sZBQcGZBEXrCgbir9S5B5BFi9jqb9ZACPnTAAi6NAkZAXYMLBiz2nV1yzCxNeg22nzB29WEoJcWhYSPHEMQt6B6y8MMlfGYOhWOoRLy828BJbAGx5lGgrygU5ZAQOaag3ZCHKkueyXa6fvGpK3XfrA0ZD";

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
