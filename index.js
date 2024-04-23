const express = require('express');
const path = require('path');


const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));


// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const { UsernameChecker } = require('username-checker');

const usernameChecker = new UsernameChecker();




// usernameChecker.isAvailable('twitter', randomName).then(result => {
//     console.log(result);
// });

app.get('/api/check', async (req, res) => {
    const name = req.query.name;
    const apiUrl = `https://example.com/api/check?name=${name}`;

    try {
        const result = await usernameChecker.isAvailable('twitter', name)
        res.json(result);
        


    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from API' });
    }
});