# WhatsApp Water Usage Data Bot

This is a WhatsApp bot built using Node.js, Twilio, and Excel to collect water usage data from users. The bot sends a reminder to users every 5 minutes to submit their water usage, records the data in an Excel sheet, and provides feedback once the data is received.

## Features

- Sends a reminder message to users to input their water usage data every 5 minutes.
- Receives and processes user input, storing the data in an Excel spreadsheet.
- Responds with a confirmation message containing the submitted data and timestamp.
- Stores data in an Excel sheet with two columns: "Date" and "Value".

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12.x or higher)
- [Ngrok](https://ngrok.com/) (to expose your local server to the internet)
- [Twilio Account](https://www.twilio.com/) with WhatsApp API enabled

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/whatsapp-water-usage-bot.git
cd whatsapp-water-usage-bot
```


### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

- Create a .env file in the root directory and add your Twilio credentials and other required variables:

```bash
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+your_twilio_whatsapp_number
USER_WHATSAPP_NUMBER=whatsapp:+user_whatsapp_number
```

- Replace your_twilio_account_sid, your_twilio_auth_token, your_twilio_whatsapp_number, and user_whatsapp_number with your actual Twilio account details and the user's WhatsApp number.


### 4. Set Up Ngrok

- Run Ngrok to expose your local server to the internet:

```bash
ngrok http 3000
```

- Copy the Ngrok URL and configure it as the webhook URL in your Twilio account settings.

### 5. Start the Server

```bash
npm start
```

- The bot will start sending reminders to the specified user every 5 minutes. The user can reply with their water usage data, and the bot will record this data in an Excel sheet.


## Technical Architecture

  - WhatsApp API Integration: Utilizes Twilio API to send and receive WhatsApp messages.
    Scheduler: Sends reminders every 5 minutes using a scheduling library.
  - Data Processing: Processes user input and stores it in an Excel file using the xlsx library.
    Ngrok: Used for local development to handle webhook communication.

## Deployment

- For local development, use Ngrok to expose the server. For deployment on a cloud platform, configure your     environment variables and webhook settings according to the deployment environment.
   - Example Commands

    "Please send today's Water Usage Data." — Bot's reminder message
    "100 liters" — Example user response

## Contributing

- If you wish to contribute to this project, please submit a pull request. Ensure that your code is well-documented.


