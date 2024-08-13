import { nav } from "../navigation/nav.js";
import {
  rafraichir,
  affichage,
} from "../function_pour_tous/function_pour_tous.js";
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



<section id="contenu_reponse"></section>
</main>


`;

jeux_quiz();
function jeux_quiz() {
  let questions = document.querySelector("#question");
  let div_choix = document.querySelector("#choix");
  let buttonexiste = document.querySelector(".choix_reponse");
  if (buttonexiste) {
    div_choix.innerHTML = "";
    questions.innerHTML = "Plus de questions";
  }

  liste.forEach((element) => {
    if (element.id == numero) {
      questions.innerHTML = element.question;

      ////PARTIE ALEATOIRE //////
      let montableau_index_aleatoire = [];
      let index_aleatoire;
      while (
        !(
          element.choix.length == montableau_index_aleatoire.length &&
          montableau_index_aleatoire.includes(index_aleatoire)
        )
      ) {
        index_aleatoire = Math.floor(Math.random() * element.choix.length);
        if (!montableau_index_aleatoire.includes(index_aleatoire)) {
          montableau_index_aleatoire.push(index_aleatoire);
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
  let vie = 1;

  if (document.querySelector("#question").textContent == "Plus de questions") {
    affichage("rafraichir", "button", ".jeux", "rafraichir");
    rafraichir("rafraichir");
  }
  buttons_choix.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      if (vie == 1) {
        let button_click = buttons.textContent;
        let rajout = document.querySelector("#contenu_reponse");
        let choix_button = document.createElement("button");

        // ATTENTION PLUSIEURS CLICK POSSIBLE  => REPARER
        vie = vie - 1;
        if (liste[numero].reponse == button_click) {
          rajout.innerHTML = "Bien joué";
          document.getElementById(liste[numero].reponse).style.backgroundColor =
            "green";
        } else {
          rajout.innerHTML = "La bonne réponse est : " + liste[numero].reponse;
          document.getElementById(buttons.id).style.backgroundColor = "red";
          document.getElementById(liste[numero].reponse).style.backgroundColor =
            "green";
        }
        // AFFICHAGE DES REPONSES

        affichage(liste[numero].reponse_informations, "p", "#contenu_reponse");

        choix_button.className = "envoier";
        choix_button.textContent = "Question suivante";
        rajout.appendChild(choix_button);

        let button_envoier = document.querySelector(".envoier");
        button_envoier.addEventListener("click", () => {
          let rajout = document.querySelector("#contenu_reponse");
          rajout.innerHTML = "";
          jeux_quiz((numero = numero + 1));
        });
      }
    });
  });
}
