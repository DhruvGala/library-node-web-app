const express = require('express');
const bookRouter = express.Router();

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

bookRouter.route('/books')
  .get((req, res) => {
    res.render(
      'books',
      {
        nav: [{
          link: '/books', title: 'Books'
        },
        {
          link: '/authors', title: 'Authors'
        }],
        title: 'Library',
        books
      }
    );
  });

bookRouter.route('/single')
  .get((req, res) => {
    res.send('hello single book');
  });

module.exports = bookRouter;