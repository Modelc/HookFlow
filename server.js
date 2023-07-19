require('dotenv').config();
const fetch = require('node-fetch');

async function forwardWebhook(url, data) {
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`
      },
    });
  } catch (error) {
    console.error(`Error forwarding webhook to ${url}:`, error);
  }
}

router.post('/webhook', async function(req, res, next) {
  const webhookData = req.body;
  
  console.log('Received webhook:', webhookData);
  
  const firebaseProject1Url = process.env.FIREBASE_PROJECT_1_URL;
  const firebaseProject2Url = process.env.FIREBASE_PROJECT_2_URL;

  await Promise.all([
    forwardWebhook(firebaseProject1Url, webhookData),
    forwardWebhook(firebaseProject2Url, webhookData),
  ]);

  res.status(200).end();
});

module.exports = router;
