//actualiser pas correct à 100% , car il ne prend reprend pas l'input(ligne:113)

// recuperer la reponse client et le transformer en lowstring (ligne: tous ce qui recupere input reponse_client)

//bouton enter pour envoier la reponse

// interdire le rafraichissement du client (bonne idée???? )

//boutin de fin(gagner ou perdu) => revenir à l'accueil

//
// import { nav } from "../../navigation/nav.js";
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
<main>   <h1> Choissisez la catégorie</h1>

<ul>
<li>Ecrivez le mot: "<strong>aléatoire</strong>" si vous souhaitez une catégorie choisie par l'ordinateur</li>

<li>Ecrivez l'une des catégories suivantes: ${categorie_affichage()}</li>
</ul>


<input type="text" id="reponse_utilisateur" placeholder ="Ecrivez-ici" autocomplete="off">
<button type="submit" id="envoier">Envoiez</button>
</main>
 
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
        if (
          reponseclient.value.trim().length == 1 ||
          reponseclient.value.trim().toLowerCase().length == mota_trouver.length
        ) {
          if (
            reponseclient.value &&
            !tableau_vrai.includes(reponseclient.value.trim().toLowerCase()) &&
            !tableau_faux.includes(reponseclient.value.trim().toLowerCase())
          ) {
            traitement_reponse_client(
              reponseclient.value.trim().toLowerCase(),
              mot_tableau,
              tableau_vrai,
              tableau_faux,
              vie
            );
          } else {
            affichage("Vous avez déjà repeté cette lettre", "h3");
          }
        } else {
          affichage("Vous devez écrire une lettre", "h3");
        }
        if (vierestante(vie, tableau_faux) == 0) {
          return (document.querySelector("#app").innerHTML = `
   
    µ
            <main>
    <h1>GAME OVER</h1>
    <p>Le mot a trouvé: <strong>${mot}</strong></p>
    </main>
    `);
        }
        if (
          reponseclient.value.trim().toLowerCase() == mota_trouver ||
          reponse_pendu(mot_tableau, tableau_vrai) === "gagner"
        ) {
          return (document.querySelector("#app").innerHTML = `
      
            <main>
            <h1>Gagner</h1>
    <p>Toutes mes félicitations.</p>
    <p>Le mot a trouvé: <strong>${mot}</strong></p>
    <div id="imggroupe">
      <figure id="groupe1">
        <img class="fusee" src="../Pendu/image/fusée.png" alt="fusée" />
        <img class="explosion" src="../Pendu/image/explosion.png" alt="fusée" />
      </figure>
      <figure id="groupe2">
        <img id="fusee" src="../Pendu/image/fusee2centrale.png" alt="fusée" />
        <img
          id="explosion"
          src="../Pendu/image/explo2centrale.png"
          alt="fusée"
        />
      </figure>
      <figure id="groupe3">
        <img class="fusee" src="../Pendu/image/fusee3droite.png" alt="fusée" />
        <img class="explosion" src="../Pendu/image/explosion.png" alt="fusée" />
      </figure>
 
    </main>
          `);
        }

        /////// ACTUALISER LES ELEMENTS /////////
        if (vierestante(vie, tableau_faux) >= 1) {
          actualiser_afficher_innerhtml(mot_tableau, reponseclient);
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
  return (document.getElementById(id).innerHTML = contenu);
}

function actualiser_afficher_innerhtml(mot_tableau, reponseclient) {
  actualisation_element(
    "bonnes_lettres",
    "Bonne(s) lettre(s): <strong id='bonne'>" + tableau_vrai + "</strong>"
  );
  actualisation_element(
    "mauvaises_lettres",
    "Mauvaise(s) lettre(s): <strong id='mauvaise'>" + tableau_faux + "</strong>"
  );
  actualisation_element("reponse_utilisateur_lettre", "Ecrivez-");
  actualisation_element("mot", reponse_pendu(mot_tableau, tableau_vrai));
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

  //actualiser pas correct à 100% , car il ne prend reprend pas l'input

  actualisation_element(
    "reponse_utilisateur_lettre",
    (reponseclient.value = "")
  );
}
