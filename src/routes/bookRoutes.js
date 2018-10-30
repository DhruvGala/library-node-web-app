const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:booksRoutes');


const bookRouter = express.Router();

function router(nav) {
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

  bookRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected to MongoDB server');

          const db = client.db(dbName);

          const col = await db.collection('books');

          const books = await col.find().toArray();

          res.render(
            'bookListView',
            {
              nav,
              title: 'Library',
              books
            }
          );
        } catch (err) {
          debug(err.stack);
        }

        client.close();
      }());
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render(
        'bookView',
        {
          nav,
          title: 'Library',
          book: books[id]
        }
      );
    });

  return bookRouter;
}

module.exports = router;
