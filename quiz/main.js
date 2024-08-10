import { nav } from "../navigation/nav.js";
import { rafraichir } from "../function_pour_tous/function_pour_tous.js";
import { liste } from "./storage.js";
// 1) aparaitre les questions + reponse
// 2) button click sur le bouton reponse du client
// 3) comparer la reponse donnée avec la vraie reponse
let numero = 0;
document.querySelector("#app").innerHTML = `
${nav}
<main >
 <h1>Quiz</h1>
 <div class="jeux"> 
  <h3 id="question"></h3>
 <div id= "choix"></div>
</div>
<button id="rafraichir">rafraichir</button>
</article>

</main>


`;
rafraichir("rafraichir");
affichage();
function affichage() {
  let questions = document.querySelector("#question");
  let div_choix = document.querySelector("#choix");
  let buttonexiste = document.querySelector(".choix_reponse");
  if (buttonexiste) {
    div_choix.innerHTML = "";
    questions.innerHTML = "Les résultats";
  }
  liste.forEach((element) => {
    if (element.id == numero) {
      questions.innerHTML = element.question;
      ////PARTIE ALEATOIRE //////
      let montableau_index_aleatoire = [];
      let randomIndex;
      while (
        !(
          element.choix.length == montableau_index_aleatoire.length &&
          montableau_index_aleatoire.includes(randomIndex)
        )
      ) {
        randomIndex = Math.floor(Math.random() * element.choix.length);
        if (!montableau_index_aleatoire.includes(randomIndex)) {
          montableau_index_aleatoire.push(randomIndex);
        }
      }

      for (let index = 0; index < montableau_index_aleatoire.length; index++) {
        /////
        let choix_button = document.createElement("button");

        choix_button.id = element.choix[montableau_index_aleatoire[index]];
        choix_button.className = "choix_reponse";
        choix_button.textContent =
          element.choix[montableau_index_aleatoire[index]];
        div_choix.appendChild(choix_button);
      }
    }
  });

  let buttons_choix = document.querySelectorAll(".choix_reponse");
  buttons_choix.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      // console.log(affichage());
      let button_click = buttons.textContent;

      if (liste[numero].reponse == button_click) {
        console.log("BONNE REPONSE");
      } else {
        console.log("Mauvaise reponse");
      }
      affichage((numero = numero + 1));
    });
  });
}

// let rafraichir = document.querySelector("#rafraichir");
// rafraichir.addEventListener("click", () => {});
