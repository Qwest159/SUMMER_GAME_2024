import { nav } from "../navigation/nav.js";
import { presdu_0 } from "./storage.js";
import { rafraichir } from "../function_pour_tous/function_pour_tous.js";

document.querySelector("#app").innerHTML = `
${nav}
<main class="main">
  <h1>Test de rapidité</h1>

  <p>Le compteur va se diminuer en cliquant sur le bouton noir, le but est d'arriver à 0</p>
<p>Cliquez de nouveau pour arreter le compteur</p>
  <article><button type="submit" id="start_temps">Cliquez-ici pour commencer<br></button>

<button id="rafraichir">rafraichir</button></article>

<input type="hidden" name="" id="valeur_cacher" value="200">
<p >Compteur: <strong id="chiffre_start">200</strong></p>
<h3 class="reponse"></h3>
</main>


`;
rafraichir("rafraichir");
// let rafraichir = document.querySelector("#rafraichir");
// rafraichir.addEventListener("click", () => {});

let envoierbutton_id = document.querySelector("#start_temps");
let commencer_temp;
envoierbutton_id.addEventListener("click", () => {
  let valeur_inputcacher_chiffre = parseInt(
    document.querySelector("#valeur_cacher").value
  );
  if (!commencer_temp) {
    commencer_temp = setInterval(temps, 20);
    // valeur_input.innerHTML =
    //   "Cliquez-ici pour arreter le compteur<br>(cliquez de nouveau pour arreter le chrono)";
  } else if (commencer_temp || valeur_inputcacher_chiffre == -25) {
    clearInterval(commencer_temp);

    affichage(presdu_0(valeur_inputcacher_chiffre));

    // commencer_temp = null;
    // pour recliquer et redemarrer le timer
  }
});

function temps() {
  let valeur_input = document.querySelector("#chiffre_start");
  let valeur_input_chiffre = parseInt(valeur_input.textContent);
  let valeur_inputcacher = document.querySelector("#valeur_cacher");
  let valeur_inputcacher_chiffre = parseInt(valeur_inputcacher.value);
  if (valeur_inputcacher_chiffre == -25) {
    return affichage(presdu_0(valeur_inputcacher_chiffre));
  }
  valeur_input.innerHTML = valeur_input_chiffre - 1;
  valeur_inputcacher.value = valeur_inputcacher_chiffre - 1;
}
function affichage(contenus) {
  let contenu = contenus;
  let divapp = document.querySelector(".reponse");
  divapp.innerHTML = contenu;
}
