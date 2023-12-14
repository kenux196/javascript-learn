const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  res.send('Add member');
});

router.put('/', (req, res) => {
  res.send('Modify(put) member');
});

router.delete('/', (req, res) => {
  res.send('Delete member');
});

const members = [
  {
    id: 1,
    name: '상규',
    gender: 'male',
    age: 45,
    email: 'kenux.yun@gmail.com',
  },
  {
    id: 2,
    name: '베럴',
    gender: 'female',
    age: 30,
    email: 'iu@testmail.com',
  },
];

router.get('/', (req, res) => {
  res.send(members);
});

module.exports = router;
