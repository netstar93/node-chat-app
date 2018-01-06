/**
 * Created by Nitish on 06 Jan.
 */
console.log(__dirname);
const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '../public');
var app = express();
app.use(express.static(publicPath));
const port = process.env.port || 8888;
app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})