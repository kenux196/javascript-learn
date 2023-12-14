const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.set({ 'Content-Type': 'text/html' });
  res.end('안녕~ birds');
});

router.get('/detail', (req, res) => {
  res.set({ 'Content-Type': 'text/html; charset=utf-8' });
  res.end('Birds details');
});

module.exports = router;
