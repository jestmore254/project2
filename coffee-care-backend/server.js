const http = require('http');
const mongoose = require('mongoose');
const url = require('url');
const { parse } = require('querystring');
require('dotenv').config();

// Models
const Farmer = require('./models/Farmer');
const Coop = require('./models/Coop');
const Listing = require('./models/Listing');
const Alert = require('./models/Alert');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Helper to send JSON
function sendJSON(res, data, status=200) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

// Parse request body
function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => resolve(JSON.parse(body || '{}')));
    req.on('error', err => reject(err));
  });
}

// HTTP Server
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // Example: GET /farmers
  if (path === '/farmers' && method === 'GET') {
    const farmers = await Farmer.find().lean();
    return sendJSON(res, farmers);
  }

  // POST /farmers
  if (path === '/farmers' && method === 'POST') {
    const body = await getRequestBody(req);
    const farmer = await Farmer.create(body);
    return sendJSON(res, farmer, 201);
  }

  // GET /coops
  if (path === '/coops' && method === 'GET') {
    const coops = await Coop.find().lean();
    return sendJSON(res, coops);
  }

  // POST /coops
  if (path === '/coops' && method === 'POST') {
    const body = await getRequestBody(req);
    const coop = await Coop.create(body);
    return sendJSON(res, coop, 201);
  }

  // GET /listings
  if (path === '/listings' && method === 'GET') {
    const listings = await Listing.find().lean();
    return sendJSON(res, listings);
  }

  // POST /listings
  if (path === '/listings' && method === 'POST') {
    const body = await getRequestBody(req);
    const listing = await Listing.create(body);
    return sendJSON(res, listing, 201);
  }

  // GET /alerts
  if (path === '/alerts' && method === 'GET') {
    const alerts = await Alert.find().lean();
    return sendJSON(res, alerts);
  }

  // POST /alerts
  if (path === '/alerts' && method === 'POST') {
    const body = await getRequestBody(req);
    const alert = await Alert.create(body);
    return sendJSON(res, alert, 201);
  }

  // Default 404
  sendJSON(res, { error: 'Not Found' }, 404);
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
