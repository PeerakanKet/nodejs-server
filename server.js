const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// Path พวกนี้ถูกเรียกว่า Route

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})