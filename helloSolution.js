```javascript
// pages/api/helloSolution.js
export default function handler(req, res) {
  // Handle OPTIONS requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', '*'); // Or a specific origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.status(200).end();
    return;
  }

  res.status(200).json({ text: 'Hello' });
}
```