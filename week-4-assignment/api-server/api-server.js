const express = require('express');
const app = express();
const path = require('node:path'); 
const PORT = process.env.PORT || 4000;
const fs = require('fs');

// Middleware to parse JSON body
app.use(express.json());

// Read data from items.json
const itemsPath = path.join(__dirname, 'data', 'items.json');
let items = require(itemsPath);

// API routes for managing inventory
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const newItem = req.body;
  newItem.id = String(Date.now());
  items.push(newItem);

  fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2));

  res.status(201).json(newItem);
});

// ... add other API routes for updating, deleting, and more

app.listen(PORT, () => {
  console.log(`Inventory API server is running on port ${PORT}`);
});