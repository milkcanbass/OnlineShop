const path = require('path');
const express = require('express');
const cors = require('cors');
const cacheControl = require('express-cache-controller');
const compression = require('compression');
require('dotenv').config();

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// for gzip
app.use(compression());
// function of body-parser
app.use(express.static(DIST_DIR));

// Cache-control
app.use(
  cacheControl({
    maxAge: 31557600, // 1=1sec
  }),
);

// For Stripe Api
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'service-worker.js'));
});
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, err => {
  if (err) throw err;
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
