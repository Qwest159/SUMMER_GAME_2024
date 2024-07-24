export function affichage_pendu(mot, vie) {
  document.querySelector("#app").innerHTML = `
    <h1>Le jeu commence</h1>

    <p>${reponse_pendu(mot)}</p>
    <p>Vie restante: ${vierestante(vie)}</p>
    <input type="text" id="reponse_utilisateur_lettre" placeholder ="Ecrivez-ici">
    <button type="submit" id="envoier_lettre">Envoiez</button>
    `;
}
function reponse_pendu(mot_tableau) {
  let underscore = "";
  mot_tableau.forEach((lettre) => {
    underscore += " " + lettre.replace(lettre, "_");
  });
  return underscore;
}

function vierestante(vie) {
  vie = vie - 1;
  return vie;
}
