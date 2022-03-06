const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  // get placeholder
});

router.post('/submit', (req, res, next) => {
  res.send("success");
});

router.delete('/todos/:id', (req, res, next) => {
  // delete placeholder
});

module.exports = router;
