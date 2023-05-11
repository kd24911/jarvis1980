const functions = require('firebase-functions');
const {dialogflow} = require('actions-on-google');
const requestPromise = require('request-promise');

const app = dialogflow();

app.intent('ChatGPT', async (conv, {inputText}) => {
  // ChatGPT API call will be placed here
});

exports.chatGPTWebhook = functions.https.onRequest(app);
