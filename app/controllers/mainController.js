const mainController = {
  homePage: (request, response) => {
    //* renvoie l'accueil
    response.render('home.ejs');
  },
  errorPage: (request, response) => {
    //* renvoie la page error
    response.status(404).render('404.ejs');
  },
};

module.exports = mainController;
