import axios from 'axios';
import dotenv from 'dotenv';
import base64 from 'base-64';

dotenv.config();

const consumerKey = process.env.MPESA_CONSUMER_KEY;
const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
const shortcode = process.env.MPESA_SHORTCODE;
const passkey = process.env.MPESA_PASSKEY;
const callbackURL = 'https://your-callback-url.com/mpesa';

let tokenCache = null;

// Get OAuth Token
async function getToken() {
  if(tokenCache) return tokenCache;
  const auth = base64.encode(`${consumerKey}:${consumerSecret}`);
  const { data } = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
    headers: { Authorization: `Basic ${auth}` }
  });
  tokenCache = data.access_token;
  return tokenCache;
}

// STK Push
async function stkPush(phone, amount) {
  const token = await getToken();
  const timestamp = new Date().toISOString().replace(/[-T:Z.]/g,'').slice(0,14);
  const password = base64.encode(shortcode + passkey + timestamp);

  const payload = {
    BusinessShortCode: shortcode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: 'CustomerPayBillOnline',
    Amount: amount,
    PartyA: phone,
    PartyB: shortcode,
    PhoneNumber: phone,
    CallBackURL: callbackURL,
    AccountReference: 'CoffeeCare',
    TransactionDesc: 'Payment for coffee delivery'
  };

  const { data } = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', payload, {
    headers: { Authorization: `Bearer ${token}` }
  });

  return data;
}

export default { stkPush };
