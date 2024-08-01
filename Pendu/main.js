import { nav } from "../navigation/nav.js";
import { jeu_pendu } from "./functions/jeux.js";

document.querySelector("#app").innerHTML = `
    ${nav}
<main>
  <h1>Bienvenue au jeu du Pendu</h1>

    <button type="submit" id="envoier_pendu">Appuyer pour commencer</button>
</main>
    
    `;

let envoier_pendu = document.querySelector("#envoier_pendu");

envoier_pendu.addEventListener("click", () => {
  jeu_pendu();
});
