const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 3001;

app.use('', express.static(path.join(__dirname, 'dist', 'client')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'client', 'index.html'));
})

app.listen(port, () => {
  console.log('listening on port ' + port);
})
