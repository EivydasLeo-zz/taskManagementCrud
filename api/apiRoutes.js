const express = require('express');
const router = express.Router();
const TaskModel = require('../models/Task');

// Add new task
router.post('/addNewTask', async (req, res) => {
  console.log(req.body);

  const newTask = await new TaskModel(req.body);

  newTask
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

// Get all tasks
router.get('/allTasks', async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get single task by id
router.get('/allTasks/:id', async (req, res) => {
  try {
    const taskDetail = await TaskModel.findById(req.params.id);
    res.json(taskDetail);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete task
router.delete('/allTasks/delete/:id', async (req, res) => {
  await TaskModel.findOneAndDelete({ _id: req.params.id });
  res.send({ sucess: true, msg: 'Task has been deleted' });
});

// Edit task
router.put('/allTasks/edit/:id', async (req, res) => {
  const { title, description, category, status } = req.body;
  await TaskModel.findOneAndUpdate(
    { _id: req.params.id },
    {
      title,
      description,
      category,
      status,
    }
  );
  res.send({ success: true, msg: `Task ${title} has been updated.` });
});

module.exports = router;
