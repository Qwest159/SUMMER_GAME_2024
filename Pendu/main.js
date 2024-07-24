let mot = [];

let vie = 7;

import {
  categorie_motchoisis,
  categorie_affichage,
} from "./functions/categorie.js";
import { affichage_pendu } from "./functions/affichage_pendu.js";
import { traitement_reponse_client } from "./functions/traitement_reponse.js";
document.querySelector("#app").innerHTML = `
<h1> Choissisez la catégorie</h1>
<p>Pour ce faire, vous devez écrire "aléatoire" ou bien, choisir l'une des catégories suivantes: ${categorie_affichage()}



</p>
<input type="text" id="reponse_utilisateur" placeholder ="Ecrivez-ici">
<button type="submit" id="envoier">Envoiez</button>

`;

let envoier = document.querySelector("#envoier");

// mot = [...categorie()] METTRE LE MOT EN TABLEAU
envoier.addEventListener("click", () => {
  if (categorie_motchoisis()) {
    const mot = categorie_motchoisis();
    const mot_tableau = [...mot];
    affichage_pendu(mot_tableau, vie);
    let reponseclient = document.querySelector("#reponse_utilisateur_lettre");
    let envoieclient = document.querySelector("#envoier_lettre");
    envoieclient.addEventListener("click", () => {
      if (reponseclient.value) {
        affichage(traitement_reponse_client(reponseclient.value, mot_tableau));
      } else {
        affichage("Mot mal écrit", "h3");
      }
    });
  } else {
    affichage("Mot mal écrit", "h3");
  }
});

function affichage(contenu, element) {
  let contenus = contenu;
  let affichagehtml = document.querySelector("#app");
  let h3 = document.createElement(element);

  let h3existe = document.querySelector(element);
  if (h3existe) {
    affichagehtml.removeChild(h3existe);
  }
  h3.innerHTML = contenus;
  affichagehtml.appendChild(h3);
}
