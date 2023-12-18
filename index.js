const express = require('express');
const app = express();

require('dotenv').config();

const router = require('./app/router.js');

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
