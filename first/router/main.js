const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('this is main');
  res.send('Hello world!');
});

module.exports = router;
