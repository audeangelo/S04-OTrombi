const express = require('express');
const app = express();

require('dotenv').config();

console.log(process.env.PORT);

app.set('views', 'views');
app.set('view engine', 'ejs');

app.listen(process.env.PORT, () => {
  console.log(`http:localhost:${process.env.PORT}`);
});
