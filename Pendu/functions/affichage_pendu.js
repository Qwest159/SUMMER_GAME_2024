export function affichage_pendu(
  mot_tableau,
  vie,
  tableau_vrai,
  tableau_faux,
  categorie
) {
  document.querySelector("#app").innerHTML = `
  <main>
    <h2>Catégorie: ${categorie}</h2>

    <p id="bonnes_lettres">Bonne(s) lettre(s):</p>
    <p id ="mauvaises_lettres">Mauvaise(s) lettre(s):</p>
    <p id="mot">${reponse_pendu(mot_tableau, tableau_vrai)}</p>
    <p id="vierestante">Vie(s) restante(s): <strong id="bonne">${vie}</strong></p>
   
    <input type="text" id="reponse_utilisateur_lettre" placeholder ="Ecrivez-ici" autocomplete="off">
    <button type="submit" id="envoier_lettre">Envoiez</button>
    </main>
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
  let foundgagner = [...underscore].find((lettre_bonne) => lettre_bonne == "_");
  if (!foundgagner) {
    return "gagner";
  }

  return underscore;
}
