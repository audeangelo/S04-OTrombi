const authController = {
  postLogin(request, response) {
    //* je recupere les données saisies par le client coté navigateur (le formulaire de  connexion)
    const login = request.body.login;
    //* Pour accéder à "mon casier de piscine" cad les données uniques que je veux garder coté navigateur : request.session
    //* Pour ajouter une propriété "login" à l'objet "session" qui aura pour valeur "request.body.login"
    request.session.login = login;

    //* On peut ajouter tout type de données dans l'objet session : array, objet, boolean, cdc, number...
    request.session.cart = ['chaise', 'table', 'tableau'];

    //* une fois le login récupérer et stocker dans la sessin, redirige vers la page d'accueil
    response.redirect('/');
  },
};

module.exports = authController;
