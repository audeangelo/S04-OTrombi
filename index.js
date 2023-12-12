const express = require('express');
const app = express();

//* pour pouvoir utiliser la variable d'environnement (.env)
require('dotenv').config();

const router = require('./app/router.js');

app.set('views', './app/views');
app.set('view engine', 'ejs');

//* on laisse le dossier public à la racine et non de le dossier app
app.use(express.static('public'));

//* router, servira uniquement à gérer et orienter les routes
app.use(router);

//* process.env pour appeler la variable d'environnement qui a la propriété PORT
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
