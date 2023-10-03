const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Read data from items.json
const itemsPath = path.join(__dirname, '../data/items.json');
let items = require(itemsPath);

// Middleware to parse JSON body
router.use(express.json());

// Get all items or filter by program
router.get('/items', (req, res) => {
  const { program } = req.query;
  let filteredItems = items;

  if (program) {
    filteredItems = items.filter((item) => item.program === program);
  }

  res.json(filteredItems);
});

// Get one item by ID
router.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const item = items.find((item) => item.id === id);

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json(item);
});

// Create a new item
router.post('/items', (req, res) => {
  const newItem = req.body;
  newItem.id = String(Date.now());
  items.push(newItem);

  fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2));

  res.status(201).json(newItem);
});

// Update an existing item
router.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;

  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  items[index] = { ...items[index], ...updatedItem };

  fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2));

  res.json(items[index]);
});

// Delete an item by ID
router.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const index = items.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const deletedItem = items.splice(index, 1)[0];

  fs.writeFileSync(itemsPath, JSON.stringify(items, null, 2));

  res.json(deletedItem);
});

module.exports = router;
