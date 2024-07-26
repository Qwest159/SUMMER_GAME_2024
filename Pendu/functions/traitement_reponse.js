export function traitement_reponse_client(
  reponse_client,
  mot_a_trouver,
  tableau_vrai,
  tableau_faux,
  vie
) {
  if (mot_a_trouver.includes(reponse_client)) {
    ////// si l'element se trouve dans le mot rechercher , alors rentre ici /////
    tableau_vrai.push(reponse_client);

    return tableau_vrai;
  } else {
    ////// si l'element NE SE TROUVE PAS dans le mot rechercher , alors rentre ici /////
    tableau_faux.push(reponse_client);

    vie = vierestante(vie, tableau_faux);

    return tableau_faux;
  }
}

// vie fonctionne PAS TOUCHE
export function vierestante(vie, tableau_faux) {
  return (vie = vie - tableau_faux.length);
}
