// Create web server
const express = require('express');
const app = express();
const port = 8000;

// Create a list of comments
const comments = [
    {name: 'Alice', comment: 'I love this!'},
    {name: 'Bob', comment: 'This is terrible!'}
];

// Create a route that responds with the list of comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));


