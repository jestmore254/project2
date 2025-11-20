const User = require('../Models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

async function register(req, res){
  let body = '';
  req.on('data', chunk => body += chunk.toString());
  req.on('end', async () => {
    const { name, email, password, role } = JSON.parse(body);
    try {
      const user = await User.create({ name, email, password, role });
      res.writeHead(201, {'Content-Type':'application/json'});
      res.end(JSON.stringify({ message:'User registered', userId: user._id }));
    } catch(err){
      res.writeHead(400, {'Content-Type':'application/json'});
      res.end(JSON.stringify({ error: err.message }));
    }
  });
}

async function login(req, res){
  let body = '';
  req.on('data', chunk => body += chunk.toString());
  req.on('end', async () => {
    const { email, password } = JSON.parse(body);
    const user = await User.findOne({ email });
    if(!user) return res.writeHead(401).end(JSON.stringify({ error:'Invalid credentials' }));
    const match = await user.comparePassword(password);
    if(!match) return res.writeHead(401).end(JSON.stringify({ error:'Invalid credentials' }));

    const token = jwt.sign({ id:user._id, role:user.role }, JWT_SECRET, { expiresIn:'1d' });
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({ token, role:user.role, name:user.name }));
  });
}

module.exports = { register, login };
