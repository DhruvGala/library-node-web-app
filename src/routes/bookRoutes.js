const express = require('express');

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
      res.render(
        'bookListView',
        {
          nav,
          title: 'Library',
          books
        }
      );
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
