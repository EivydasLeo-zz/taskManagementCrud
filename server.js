require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const apiRoutes = require('./api/apiRoutes');

const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Prisijungimas prie mongooDb
{
  mongoose
    .connect(process.env.MONGO_CONNECT_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
      console.log('Conneced to MongooDB');
    })
    .catch((err) => console.error(err.message));
}

app.use('/', apiRoutes);

app.listen(PORT, console.log(`Backend online on port ${PORT}`));
