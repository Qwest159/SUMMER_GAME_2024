// compteur vie (doit etre actualisé)
// condition si chiffrerecup = chiffre mystere => gagné
// si chiffrerecup et different de chiffre mystere => perdu
// si vie = 0 => game over

// rafraichir avec î
// envoier-ici retirer le trait union

// BUTTON ENTER
import { nav } from "../navigation/nav.js";
import { rafraichir } from "../function_pour_tous/function_pour_tous.js";
const chiffre_mystere = Math.floor(Math.random() * 101);

document.querySelector("#app").innerHTML = `
${nav}
<main>
<h1>Jeu du chiffre Mystère</h1>
<p>Ecrivez un chiffre de <strong>0</strong> à <strong>100</strong></p>
<input type="number" name="chiffre" id="chiffre" 
placeholder="Ecrivez ici" autocomplete="off"/>
<article id="espacement_button"> 
<button type="button" id="button">Envoyer</button>
<button id="rafraichir">Rafraîchir</button></article>
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

function jouer(event) {
  if (vie > 0 && (event.key === "Enter" || event.type === "click")) {
    vie = vie - 1;
    console.log(chiffre_mystere);

    let message = "";
    let chiffre_recup_utilisateur = document.querySelector("#chiffre").value;
    if (
      chiffre_recup_utilisateur != "" &&
      chiffre_recup_utilisateur >= 0 &&
      chiffre_recup_utilisateur <= 100
    ) {
      if (chiffre_recup_utilisateur == chiffre_mystere) {
        message = "Vous avez gagné";
      } else {
        if (vie <= 0) {
          console.log(chiffre_mystere);
          message = "Game Over, le nombre recherché est: " + chiffre_mystere;
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
    actualisation_element("chiffre", "");
    affichage(message);
  }
}
let valeur = document.querySelector("#chiffre");
button.addEventListener("click", jouer);
valeur.addEventListener("keydown", jouer);

function actualisation_element(id, contenu) {
  document.getElementById(id).value = contenu;
}
