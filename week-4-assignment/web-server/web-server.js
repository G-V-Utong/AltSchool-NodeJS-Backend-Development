const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static HTML files
app.use(express.static('public'));

// Route for handling 404 errors
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(PORT, () => {
  console.log(`Web server is running on port ${PORT}`);
});
