const express = require('express');
const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
  res.status(200).json(`Server is working at PORT ${PORT}`);
});

app.listen(PORT, console.log(`Backend online on port ${PORT}`));
