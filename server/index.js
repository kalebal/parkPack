const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {connect, db} = require('../db')

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
  connect();
});
