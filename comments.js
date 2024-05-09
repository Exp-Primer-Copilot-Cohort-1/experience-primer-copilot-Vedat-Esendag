//Create web server
const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a comments array to store comments
const comments = [];

// Create a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route to post a comment
app.post('/comments', (req, res) => {
  const { author, text } = req.body;
  comments.push({ author, text });
  res.json({ message: 'Comment added!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Path: index.js
// Create a form to add a comment
const form = document.createElement('form');
form.innerHTML = `
  <input type="text" name="author" placeholder="Author" required />
  <input type="text" name="text" placeholder="Comment" required />
  <button type="submit">Add Comment</button>
`;

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const author = form.author.value;
  const text = form.text.value;

  const response = await fetch('http://localhost:3000/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ author, text }),
  });

  const data = await response.json();
  console.log(data);
});

document.body.appendChild(form);

// Create a function to fetch comments
const fetchComments = async () => {
  const response = await fetch('http://localhost:3000/comments');
  const comments = await response.json();
  console.log(comments);
};

fetchComments();

// Path: comments.js
//Create web server
const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a comments array to store comments
const comments = [];

// Create a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route to post a comment
app.post('/comments', (req, res) => {
  const
