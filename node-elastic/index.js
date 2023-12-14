const { Client } = require('elasticsearch');

const client = new Client({
  host: 'localhost:9200',
});

const matchAll = {
  query: {
    match_all: {},
  },
};

const matchAddress = {
  query: {
    match: {
      address: 'Gardens',
    },
  },
};

const matchFirstName = {
  query: {
    match: {
      firstName: '은주',
    },
  },
};

const matchQ = {};

async function search(query) {
  return await client.search({
    index: 'member',
    body: query,
  });
}

async function search2() {
  return await client.search({
    index: 'member',
    q: 'yahoo.com',
  });
}

search(matchAddress).then((result) => {
  console.log(result.hits.hits);
});
