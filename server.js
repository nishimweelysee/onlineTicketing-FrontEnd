const express = require('express');
const path = require('path');

const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/ping', (req, res) => res.send('pong'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is Running on Port ${port} ...`);
});

