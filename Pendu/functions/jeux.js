//actualiser pas correct à 100% , car il ne prend reprend pas l'input(ligne:113)

// recuperer la reponse client et le transformer en lowstring (ligne: tous ce qui recupere input reponse_client)

//bouton enter pour envoier la reponse

// interdire le rafraichissement du client (bonne idée???? )

//boutin de fin(gagner ou perdu) => revenir à l'accueil

//
import { nav } from "../../navigation/nav.js";
let vie = 7;
let tableau_faux = [];
let tableau_vrai = [];

import { categorie_motchoisis, categorie_affichage } from "./categorie.js";
import { affichage_pendu, reponse_pendu } from "./affichage_pendu.js";
import {
  traitement_reponse_client,
  vierestante,
} from "./traitement_reponse.js";
import { rafraichir } from "../../function_pour_tous/function_pour_tous.js";
export function jeu_pendu() {
  document.querySelector("#app").innerHTML = `
  ${nav}
<main>   <h1> Choissisez la catégorie</h1>

<ul>
<li>En cliquant sur:<button class="buttoncategorie" id="aléatoire">aléatoire</button> </li>
<li>Ou en cliquant sur l'une des catégories suivantes: <p id="groupecategorie"></p></li>
</ul>


</main>
 
    `;

  categorie_affichage();
  // <main>   <h1> Choissisez la catégorie</h1>

  // <ul>
  // <li>Ecrivez le mot: "<strong>aléatoire</strong>" si vous souhaitez une catégorie choisie par l'ordinateur</li>

  // <li>Ecrivez l'une des catégories suivantes: ${categorie_affichage()}</li>
  // </ul>

  // <input type="text" id="reponse_utilisateur" placeholder ="Ecrivez-ici" autocomplete="off">

  // <button type="submit" id="envoier">Envoiez</button>
  // </main>

  // 1) clique sur le bouton
  // 2) recuperer le bouton
  // 3) lancer le jeux lié avec ce bouton

  // let envoier = document.querySelector("#envoier");
  // let reponsealéatoire = document.querySelector("#aléatoire").textContent;

  // envoier.addEventListener("click", () => {

  let tousbutton = document.querySelectorAll(".buttoncategorie");
  let dernierclick;

  tousbutton.forEach((button) => {
    button.addEventListener("click", () => {
      dernierclick = button.textContent;

      let reponseclient_categorie = document.getElementById(dernierclick);

      const { mota_trouver, categorie } = categorie_motchoisis(
        reponseclient_categorie
      );

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

        let envoieclient_lettre_button = document.querySelector(
          "#reponse_utilisateur_lettre"
        );
        function handleKeyDown(event) {
          if (event.key === "Enter") {
            let h3reponse = document.querySelector(".reponse");
            h3reponse.innerHTML = "";

            let envoieclient_lettre = document
              .querySelector("#reponse_utilisateur_lettre")
              .value.trim()
              .toLowerCase();

            if (
              envoieclient_lettre.length == 1 ||
              envoieclient_lettre.length == mota_trouver.length
            ) {
              if (
                !tableau_vrai.includes(envoieclient_lettre) &&
                !tableau_faux.includes(envoieclient_lettre)
              ) {
                traitement_reponse_client(
                  envoieclient_lettre,
                  mot_tableau,
                  tableau_vrai,
                  tableau_faux,
                  vie
                );
              } else {
                affichage("Vous avez déjà repeté cette lettre");
              }
            } else {
              affichage("Vous devez écrire une lettre");
            }

            if (
              envoieclient_lettre == mota_trouver ||
              reponse_pendu(mot_tableau, tableau_vrai) === "gagner"
            ) {
              return (document.querySelector("#app").innerHTML = `
              
                    <main>
                    ${nav}
                    <h1>Gagner</h1>
            <p>Toutes mes félicitations.</p>
            <p>Le mot a trouvé: <strong>${mot}</strong></p>
            </main>
            <div id="imggroupe">
              <figure id="groupe1">
         
                <img class="explosion" src="./image/explosion.png" alt="fusée" />
                <img class="fusee" src="./image/fusée.png" alt="fusée" />
              </figure>
              <figure id="groupe2">
      
                <img
                  id="explosion"
                  src="./image/explo2centrale.png"
                  alt="fusée"
                />
                <img id="fusee" src="./image/fusee2centrale.png" alt="fusée" />
              </figure>
              <figure id="groupe3">
          
                <img class="explosion" src="./image/explosion.png" alt="fusée" />
                <img class="fusee" src="./image/fusee3droite.png" alt="fusée" />
              </figure>
                  `);
            }
            /////// ACTUALISER LES ELEMENTS /////////
            if (vierestante(vie, tableau_faux) >= 1) {
              actualiser_afficher_innerhtml(mot_tableau);
            }
            if (vierestante(vie, tableau_faux) == 0) {
              return (document.querySelector("#app").innerHTML = `
           ${nav}
                    <main>
            <h1>GAME OVER</h1>
            <p>Le mot a trouvé: <strong>${mot}</strong></p>
            </main>
            `);
            }
          }
        }
        envoieclient_lettre_button.addEventListener("keydown", handleKeyDown);

        //////COMMENCEMENT DU JEU /////////
        envoieclient.addEventListener("click", () => {
          let h3reponse = document.querySelector(".reponse");
          h3reponse.innerHTML = "";

          let envoieclient_lettre = document
            .querySelector("#reponse_utilisateur_lettre")
            .value.trim()
            .toLowerCase();

          if (
            envoieclient_lettre.length == 1 ||
            envoieclient_lettre.length == mota_trouver.length
          ) {
            if (
              !tableau_vrai.includes(envoieclient_lettre) &&
              !tableau_faux.includes(envoieclient_lettre)
            ) {
              traitement_reponse_client(
                envoieclient_lettre,
                mot_tableau,
                tableau_vrai,
                tableau_faux,
                vie
              );
            } else {
              affichage("Vous avez déjà repeté cette lettre");
            }
          } else {
            affichage("Vous devez écrire une lettre");
          }

          if (
            envoieclient_lettre == mota_trouver ||
            reponse_pendu(mot_tableau, tableau_vrai) === "gagner"
          ) {
            return (document.querySelector("#app").innerHTML = `
            
                  <main>
                  ${nav}
                  <h1>Gagner</h1>
          <p>Toutes mes félicitations.</p>
          <p>Le mot a trouvé: <strong>${mot}</strong></p>
          </main>
          <div id="imggroupe">
            <figure id="groupe1">
       
              <img class="explosion" src="./image/explosion.png" alt="fusée" />
              <img class="fusee" src="./image/fusée.png" alt="fusée" />
            </figure>
            <figure id="groupe2">
    
              <img
                id="explosion"
                src="./image/explo2centrale.png"
                alt="fusée"
              />
              <img id="fusee" src="./image/fusee2centrale.png" alt="fusée" />
            </figure>
            <figure id="groupe3">
        
              <img class="explosion" src="./image/explosion.png" alt="fusée" />
              <img class="fusee" src="./image/fusee3droite.png" alt="fusée" />
            </figure>
                `);
          }
          /////// ACTUALISER LES ELEMENTS /////////
          if (vierestante(vie, tableau_faux) >= 1) {
            actualiser_afficher_innerhtml(mot_tableau);
          }
          if (vierestante(vie, tableau_faux) == 0) {
            return (document.querySelector("#app").innerHTML = `
         ${nav}
                  <main>
          <h1>GAME OVER</h1>
          <p>Le mot a trouvé: <strong>${mot}</strong></p>
          </main>
          `);
          }
        });
      } else {
        affichage("Mot mal écrit");
      }
    });
  });
}

function affichage(contenus) {
  let contenu = contenus;
  let divapp = document.querySelector(".reponse");
  divapp.innerHTML = contenu;
}

function actualisation_element(id, contenu) {
  if (id == "reponse_utilisateur_lettre") {
    return (document.getElementById(id).value = contenu);
  } else {
    return (document.getElementById(id).innerHTML = contenu);
  }
}

function actualiser_afficher_innerhtml(mot_tableau) {
  actualisation_element("reponse_utilisateur_lettre", "");

  actualisation_element(
    "bonnes_lettres",
    "Bonne(s) lettre(s): <strong id='bonne'>" + tableau_vrai + "</strong>"
  );
  actualisation_element(
    "mauvaises_lettres",
    "Mauvaise(s) lettre(s): <strong id='mauvaise'>" + tableau_faux + "</strong>"
  );

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
}
