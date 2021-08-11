require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const TaskModel = require('./models/Task');

const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());

// Prisijungimas prie mongooDb
{
  mongoose
    .connect(process.env.MONGO_CONNECT_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
      console.log('Conneced to MongooDB');
    })
    .catch((err) => console.error(err.message));

  app.get('/', (req, res) => {
    res.status(200).json(`Server is working at PORT ${PORT}`);
  });
}

// Add new task
app.post('/addNewTask', (req, res) => {
  console.log(req.body);

  const newTask = new TaskModel({
    title: 'Meeting',
    description: 'Company morning meeting',
    category: 'Work',
    status: 'Open',
  });

  newTask
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.listen(PORT, console.log(`Backend online on port ${PORT}`));
