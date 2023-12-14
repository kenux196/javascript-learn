const { MongoClient, ServerApiVersion } = require('mongodb');
const dbSecret = require('./dev');
const uri = `mongodb+srv://${dbSecret.id}:${dbSecret.password}@cluster0.f5p0apz.mongodb.net/test?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("test").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

async function run() {
  await client.connect();
  const adminDB = client.db('test').admin();
  const listDataBases = await adminDB.listDatabases();
  console.log(listDataBases);
  return 'OK';
}

run()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
