const twilio = require('twilio');
require('dotenv').config();

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTHTOKEN);

module.exports = {
    client,
    whatsappNum: process.env.TWILIO_WHATSAPP_NUM,
    userNum: process.env.WHATSAPP_USER_NUM
};
