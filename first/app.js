const express = require('express');

const app = express();
const port = 3000;

const birds = require('./router/birds');
const main = require('./router/main');
const members = require('./router/members');

app.use(express.static('static'));
app.use('/', main);
app.use('/members', members);
app.use('/birds', birds);

app.listen(port, () => {
  console.warn(`START SERVER : use ${port}`);
});
