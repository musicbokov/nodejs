'use strict';

const express = require('express');

// constants
const port = 8080;
const host = '0.0.0.0';

// app
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World! Test old text!!!');
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);
