const mainController = {
  homePage: (request, response) => {
    console.log(request.session);
    response.render('home.ejs');
  },
  errorPage: (request, response) => {
    response.status(404).render('404.ejs');
  },
};

module.exports = mainController;
