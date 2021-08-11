const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = 4000;

// prisijungimas prie mongooDb
mongoose
  .connect(process.env.MONGO_CONNECT_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Conneced to MongooDB');
  })
  .catch((err) => console.error(err.message));

app.get('/', (req, res) => {
  res.status(200).json(`Server is working at PORT ${PORT}`);
});

app.listen(PORT, console.log(`Backend online on port ${PORT}`));
