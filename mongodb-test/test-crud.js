const MongoClient = require('mongodb').MongoClient;
const dbSecret = require('./dev');
const uri = `mongodb+srv://${dbSecret.id}:${dbSecret.password}@cluster0.f5p0apz.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
});

async function main() {
  try {
    await client.connect();
    console.log('[Success] connect to mongoDB');

    const collection = client.db('test').collection('person');

    await collection.insertOne({ name: 'kenux', age: 45 });
    console.log('Add document');

    const documents = await collection.find({ name: 'kenux' }).toArray();
    console.log('Found document: ', documents);

    await collection.updateOne({ name: 'kenux' }, { $set: { age: 46 } });
    console.log('Update document');

    const updatedDocuments = await collection.find({ name: 'kenux' }).toArray();
    console.log('Updated document: ', updatedDocuments);

    // await collection.deleteOne({ name: 'kenux' });
    // console.log('Delete document');

    await client.close();
  } catch (error) {
    console.error(error);
  }
}

main();
