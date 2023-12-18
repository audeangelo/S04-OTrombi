const authentification = {
  //* on crée un middleware qui va vérifier si la personne connecter ou login à les droits pour acceder à la page ajout des etudiants
  isAdmin(request, response, next) {
    //* on recupere la valeur de login de request.session
    //* plus généralement pour recuperer l'objet request.session
    const login = request.session.login;
    if (login == 'Michel') {
      //* si le login est considéré comme admin (si la condition correspond)
      //* affiche la page ajout etudiant
      next();
    } else {
      //* si le login ne correspond pas, tu renvoie un message signifiant que tu n'as pas les droits
      response.send('Accès non autorisé');
    }
  },
};

module.exports = authentification;
