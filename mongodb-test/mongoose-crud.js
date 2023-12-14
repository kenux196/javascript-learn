const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Person = require('./person-model');
const dbSecret = require('./dev');

mongoose.set('strictQuery', false);

const app = express();
app.use(bodyParser.json()); // http에서 body를 파싱하기 위한 설정
app.listen(3000, async () => {
  console.log('Server started');
  const mongodbUri = `mongodb+srv://${dbSecret.id}:${dbSecret.password}@cluster0.f5p0apz.mongodb.net/test?retryWrites=true&w=majority`;
  mongoose.connect(mongodbUri).then(console.log('Connected to MongoDB'));
});

app.get('/person', async (req, res) => {
  const person = await Person.find({});
  res.send(person);
});

app.get('/person/:email', async (req, res) => {
  const person = await Person.findOne({ email: req.params.email });
  res.send(person);
});

app.post('/person', async (req, res) => {
  const person = new Person(req.body);
  await person.save();
  res.send(`added person : ${person.email}`);
});

app.put('/person/:email', async (req, res) => {
  let msg = '';
  try {
    const person = await Person.findOneAndUpdate(
      { email: req.params.email },
      { $set: req.body },
      { new: true }
    );
    msg = `update person: ${person.email}`;
    console.log(msg);
    res.send(msg);
  } catch (err) {
    if (err) {
      res.status(400).json({ message: err.message });
    }
  }
});

app.delete('/person/:email', async (req, res) => {
  await Person.deleteOne({ email: req.params.email });
  res.send({ success: true });
});
