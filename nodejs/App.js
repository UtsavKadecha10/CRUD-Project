const express = require('express');
const app = express();
const cors = require('cors');
const Get2 = require('./GET/Person');
const Get1 = require('./GET/Students');

app.use(cors());

app.get('/Students',Get1);
app.get('/Person',Get2);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
