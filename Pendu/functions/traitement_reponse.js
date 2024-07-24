export function traitement_reponse_client(reponse, mot_a_trouver) {
  console.log(mot_a_trouver);
  if (mot_a_trouver.includes(reponse)) {
    ////// si l'element se trouve dans le mot rechercher , alors rentre ici /////
    console.log("OUI");
  } else {
    ////// si l'element NE SE TROUVE PAS dans le mot rechercher , alors rentre ici /////
    console.log("NON");
  }

  //   return reponse;
}
