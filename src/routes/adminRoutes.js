const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:adminRoutes');

const adminRouter = express.Router();
const books = [
  {
    title: 'How to Be Alone',
    author: 'Sara Maitland',
    rating: 4
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    rating: 4
  },
  {
    title: 'Alan Turing: Unlocking the Enigma',
    author: 'David Boyle',
    rating: 4
  },
  {
    title: 'A Brief History of Time',
    author: 'Dr. Stephen Hawking',
    rating: 5
  },
];

function router(nav) {
  adminRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected to MongoDB server');

          const db = client.db(dbName);

          const response = await db.collection('books').insertMany(books);
          res.json(response);
        } catch (err) {
          debug(err.stack);
        }

        client.close();
      }());
      // res.send('inserting books');
    });
  return adminRouter;
}

module.exports = router;
