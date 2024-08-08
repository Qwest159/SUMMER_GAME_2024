// compteur vie (doit etre actualisé)
// condition si chiffrerecup = chiffre mystere => gagné
// si chiffrerecup et different de chiffre mystere => perdu
// si vie = 0 => game over
import { nav } from "../navigation/nav.js";
import { rafraichir } from "../function_pour_tous/function_pour_tous.js";
const chiffre_mystere = Math.floor(Math.random() * 101);

document.querySelector("#app").innerHTML = `
${nav}
<main>
<h1>Jeu du chiffre Mystère</h1>
<p>Ecrivez un chiffre de <strong>0</strong> à <strong>100</strong></p>
<input type="number" name="chiffre" id="chiffre" 
placeholder="Ecrivez-ici" autocomplete="off"/>
<article> 
<button type="button" id="button">Envoyer</button>
<button id="rafraichir">Rafraichir</button></article>
<h3 class="reponse"></h3>
</main>


`;
rafraichir("rafraichir");
function affichage(contenus) {
  let contenu = contenus;
  let divapp = document.querySelector(".reponse");
  divapp.innerHTML = contenu;
}

// function affichage(contenus) {
//   let contenu = contenus;
//   let divapp = document.querySelector("#app");
//   let divh3 = document.createElement("h3");
//   divh3.innerHTML = contenu;
//   let existeh3 = document.querySelector("h3");
//   if (existeh3) {
//     divapp.removeChild(existeh3);
//   }
//   divapp.appendChild(divh3);
// }

let vie = 7;

function jouer() {
  let jeux = true;
  button.addEventListener("click", () => {
    if (jeux) {
      let message = "";
      let chiffre_recup_utilisateur = document.querySelector("#chiffre").value;
      if (
        chiffre_recup_utilisateur != "" &&
        chiffre_recup_utilisateur >= 0 &&
        chiffre_recup_utilisateur <= 100
      ) {
        if (chiffre_recup_utilisateur == chiffre_mystere) {
          message = "Vous avez gagné";
          jeux = false;
        } else {
          vie = vie - 1;

          if (vie <= 0) {
            console.log(chiffre_mystere);
            message = "Game Over , le nombre recherché est: " + chiffre_mystere;
            jeux = false;
            console.log(jeux);
          } else if (chiffre_recup_utilisateur < chiffre_mystere) {
            message =
              "Le nombre recherché est plus grand <br> Vie restante: " + vie;
          } else if (chiffre_recup_utilisateur > chiffre_mystere) {
            message =
              "Le chiffre recherché est plus petit <br> Vie restante: " + vie;
          }
        }
      } else {
        message = "Veuillez rentrer un nombre valide";
      }
      actualisation_element(
        "chiffre",
        (document.querySelector("#chiffre").value = "test")
      );
      affichage(message);
    }
  });
}
function actualisation_element(id, contenu) {
  return (document.getElementById(id).innerHTML = contenu);
}
jouer();
