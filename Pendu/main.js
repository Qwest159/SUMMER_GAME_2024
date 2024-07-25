let mot = [];
let vie = 7;
let tableau_faux = [];
let tableau_vrai = [];

import {
  categorie_motchoisis,
  categorie_affichage,
} from "./functions/categorie.js";
import { affichage_pendu, reponse_pendu } from "./functions/affichage_pendu.js";
import {
  traitement_reponse_client,
  vierestante,
} from "./functions/traitement_reponse.js";
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
    affichage_pendu(mot_tableau, vierestante(vie, tableau_faux));

    let envoieclient = document.querySelector("#envoier_lettre");
    console.log("cliciqze");
    //////COMMENCEMENT DU JEU /////////
    envoieclient.addEventListener("click", () => {
      let reponseclient = document.querySelector("#reponse_utilisateur_lettre");
      if (reponseclient.value) {
        affichage(
          traitement_reponse_client(
            reponseclient.value,
            mot_tableau,
            tableau_vrai,
            tableau_faux,
            vie
          ),
          "h5"
        );
        document.getElementById("mot").innerHTML = reponse_pendu(mot_tableau);
        document.getElementById("vierestante").innerHTML =
          "Vie restante: " + vierestante(vie, tableau_faux);
        if (vierestante(vie, tableau_faux) == 0) {
          document.querySelector("#app").innerHTML = `
          <h1>GAME OVER</h1>
          `;
        }
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
