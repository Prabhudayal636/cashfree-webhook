const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Cashfree Webhook Server is running 🚀');
  });
  

app.post("/webhook", (req, res) => {
  console.log("Cashfree Webhook Received:", req.body);
  res.status(200).send("Webhook received");
});
app.get('/webhook', (req, res) => {
    res.send('POST endpoint only. Try sending a POST request.');
  });
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
