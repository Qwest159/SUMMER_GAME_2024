import { nav } from "../navigation/nav.js";

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
