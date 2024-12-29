```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // Add the following line to handle OPTIONS requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'GET, POST, OPTIONS');
    res.status(200).end();
    return;
  }

  res.status(200).json({ text: 'Hello' });
}
```