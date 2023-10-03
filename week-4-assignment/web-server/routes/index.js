const express = require('express');
const htmlRouter = express.Router();

// Route for rendering index.html
htmlRouter.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/../public/index.html');
});

module.exports = htmlRouter;
