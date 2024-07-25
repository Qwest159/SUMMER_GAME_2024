export function affichage_pendu(mot_tableau, vie, tableau_vrai) {
  document.querySelector("#app").innerHTML = `
    <h1>Le jeu commence</h1>

    <p id="mot">${reponse_pendu(mot_tableau, tableau_vrai)}</p>
    <p id="vierestante">Vie restante: ${vie}</p>
   
    <input type="text" id="reponse_utilisateur_lettre" placeholder ="Ecrivez-ici">
    <button type="submit" id="envoier_lettre">Envoiez</button>
    `;
}
export function reponse_pendu(mot_tableau, tableau_vrai) {
  let underscore = "";
  mot_tableau.forEach((lettre) => {
    let found = tableau_vrai.find((lettre_bonne) => lettre_bonne === lettre);
    if (found) {
      underscore += " " + lettre.replace("_", lettre);
    } else {
      underscore += " " + lettre.replace(lettre, "_");
    }
  });
  console.log([...underscore]);
  let foundgagner = [...underscore].find((lettre_bonne) => lettre_bonne == "_");
  if (!foundgagner) {
    return "gagner";
  }

  return underscore;
}
