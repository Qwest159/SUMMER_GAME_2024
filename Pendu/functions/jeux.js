let vie = 7;
let tableau_faux = [];
let tableau_vrai = [];

import { categorie_motchoisis, categorie_affichage } from "./categorie.js";
import { affichage_pendu, reponse_pendu } from "./affichage_pendu.js";
import {
  traitement_reponse_client,
  vierestante,
} from "./traitement_reponse.js";

export function jeu_pendu() {
  document.querySelector("#app").innerHTML = `
    <h1> Choissisez la catégorie</h1>

    <ul>
    <li>Ecrivez le mot: "<strong>aléatoire</strong>" si vous souhaitez une catégorie choisie par l'ordinateur</li>
    
    <li>Ecrivez l'une des catégories suivantes: ${categorie_affichage()}</li>
    </ul>
    

    <input type="text" id="reponse_utilisateur" placeholder ="Ecrivez-ici">
    <button type="submit" id="envoier">Envoiez</button>
    
    `;

  let envoier = document.querySelector("#envoier");

  // mot = [...categorie()] METTRE LE MOT EN TABLEAU
  envoier.addEventListener("click", () => {
    const { mota_trouver, categorie } = categorie_motchoisis();

    if (mota_trouver) {
      let h3existe = document.querySelector("h3");
      if (h3existe) {
        document.querySelector("#app").removeChild(h3existe);
      }
      const mot = mota_trouver;
      const mot_tableau = [...mot];
      affichage_pendu(
        mot_tableau,
        vierestante(vie, tableau_faux),
        tableau_vrai,
        tableau_faux,
        categorie
      );

      let envoieclient = document.querySelector("#envoier_lettre");

      //////COMMENCEMENT DU JEU /////////
      envoieclient.addEventListener("click", () => {
        let h3existe = document.querySelector("h3");
        if (h3existe) {
          document.querySelector("#app").removeChild(h3existe);
        }
        let reponseclient = document.querySelector(
          "#reponse_utilisateur_lettre"
        );
        if (reponseclient.value && reponseclient.value.length == 1) {
          if (
            reponseclient.value &&
            !tableau_vrai.includes(reponseclient.value) &&
            !tableau_faux.includes(reponseclient.value)
          ) {
            traitement_reponse_client(
              reponseclient.value,
              mot_tableau,
              tableau_vrai,
              tableau_faux,
              vie
            ),
              //// Les elements qui ont besoin d'être actuallisé /////
              // SI IL Y A PLUS DE UNDERSCORE, ALORS C'EST GAGNER

              //fonctionne pas
              actualisation_element(
                "bonnes_lettres",
                "Bonne(s) lettre(s): <strong id='bonne'>" +
                  tableau_vrai +
                  "</strong>"
              );
            actualisation_element(
              "mauvaises_lettres",
              "Mauvaise(s) lettre(s): <strong id='mauvaise'>" +
                tableau_faux +
                "</strong>"
            );
            actualisation_element("reponse_utilisateur_lettre", "Ecrivez-");
            actualisation_element(
              "mot",
              reponse_pendu(mot_tableau, tableau_vrai)
            );
            if (vierestante(vie, tableau_faux) > 5) {
              actualisation_element(
                "vierestante",
                "Vie(s) restante(s): <strong id='bonne'>" +
                  vierestante(vie, tableau_faux) +
                  "</strong>"
              );
            } else if (vierestante(vie, tableau_faux) > 3) {
              actualisation_element(
                "vierestante",
                "Vie(s) restante(s): <strong id='moyen'>" +
                  vierestante(vie, tableau_faux) +
                  "</strong>"
              );
            } else
              actualisation_element(
                "vierestante",
                "Vie(s) restante(s): <strong id='mauvaise'>" +
                  vierestante(vie, tableau_faux) +
                  "</strong>"
              );

            if (vierestante(vie, tableau_faux) == 0) {
              document.querySelector("#app").innerHTML = `
        <h1>GAME OVER</h1>
        <p>Le mot a trouvé: <strong>${mot}</strong></p>
        `;
            } else if (reponse_pendu(mot_tableau, tableau_vrai) === "gagner") {
              document.querySelector("#app").innerHTML = `
        <h1>Gagner</h1>
        <p>toutes mes félicitations.  </p>
        <p> Le mot a trouvé: <strong>${mot}</strong></p>  
     
        `;
            }
          } else {
            affichage("Vous avez déjà repeté cette lettre", "h3");
          }
        } else {
          affichage("Vous devez écrire une lettre", "h3");
        }
      });
    } else {
      affichage("Mot mal écrit", "h3");
    }
  });
}

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

function actualisation_element(id, contenu) {
  document.getElementById(id).innerHTML = contenu;
}
