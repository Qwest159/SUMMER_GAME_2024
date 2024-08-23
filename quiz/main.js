import { nav } from "../navigation/nav.js";
import {
  rafraichir,
  affichage,
  actualisation_element,
} from "../function_pour_tous/function_pour_tous.js";
import { liste } from "./storage.js";

let index_questions = 0;
let vie_joker_50_50 = 1;
document.querySelector("#app").innerHTML = `
${nav}
<main >
<button id="joker" class="joker ">50/50</button>
 <h1>Quiz</h1>
 <div class="jeux"> 
  <h3 id="question"></h3>
 <div id= "choix"></div>
</div>
<article id="contenu_reponse"></article>

</main>
`;

function joker() {}

jeux_quiz();
function jeux_quiz() {
  let vie = 1;
  let questions = document.querySelector("#question");
  let div_choix = document.querySelector("#choix");
  let buttonexiste = document.querySelector(".choix_reponse");
  let index = 0;

  if (buttonexiste) {
    div_choix.innerHTML = "";
    questions.innerHTML = "Plus de questions";
  }

  liste.forEach((element) => {
    if (element.id == index_questions) {
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

      // 1)joker enleve laisse 2 reponse actif (index = 2)
      // 2) faire en sorte que le joker laisse 1 reponse vraie et 1 fausse
      // 3) ATTENTION LE FOR PEUT REMETTRE LA REPONSE VRAIE DANS LA QUESTION

      for (index; index < montableau_index_aleatoire.length; index++) {
        /////
        let choix_button = document.createElement("button");

        choix_button.id = element.choix[montableau_index_aleatoire[index]];
        choix_button.className = "choix_reponse";
        choix_button.textContent =
          element.choix[montableau_index_aleatoire[index]];
        // faire en sorte que si reponse = reponse vrai alors index +1
        // 2) if button click alors effectue cela
        if (choix_button.textContent == element.reponse) {
          choix_button.textContent = element.reponse;
          div_choix.appendChild(choix_button);
        } else {
          div_choix.appendChild(choix_button);
        }
      }
    }
  });

  let buttons_choix = document.querySelectorAll(".choix_reponse");

  let joker = document.querySelector("#joker");

  joker.addEventListener("click", () => {
    let buttons_choix_joker = document.querySelectorAll(".choix_reponse");

    if (vie_joker_50_50 === 1 && buttons_choix_joker.length != 0) {
      let button_choix_array = [...buttons_choix_joker];
      let reponsefausse = "";
      if (button_choix_array[0].textContent == liste[index_questions].reponse) {
        reponsefausse = button_choix_array[1].textContent;
      } else {
        reponsefausse = button_choix_array[0].textContent;
      }
      for (let index = 0; index < button_choix_array.length; index++) {
        actualisation_element(button_choix_array[index].textContent, "");
      }
      actualisation_element(reponsefausse, reponsefausse);
      actualisation_element(
        liste[index_questions].reponse,
        liste[index_questions].reponse
      );
      joker.style.background = "red";
      vie_joker_50_50 = vie_joker_50_50 - 1;
    }
  });

  if (document.querySelector("#question").textContent == "Plus de questions") {
    affichage("rafraichir", "button", ".jeux", "rafraichir");
    rafraichir("rafraichir");
  }
  buttons_choix.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      if (vie == 1 && buttons.textContent != "") {
        let button_click = buttons.textContent;
        let article = document.querySelector("#contenu_reponse");
        let choix_button = document.createElement("button");

        // ATTENTION PLUSIEURS CLICK POSSIBLE  => REPARER
        vie = vie - 1;
        if (liste[index_questions].reponse == button_click) {
          article.innerHTML = "Bien joué";
          document.getElementById(
            liste[index_questions].reponse
          ).style.backgroundColor = "green";
        } else {
          article.innerHTML =
            "La bonne réponse est : " + liste[index_questions].reponse;
          document.getElementById(buttons.id).style.backgroundColor = "red";
          document.getElementById(
            liste[index_questions].reponse
          ).style.backgroundColor = "green";
        }
        // AFFICHAGE DES REPONSES

        affichage(
          liste[index_questions].reponse_informations,
          "p",
          "#contenu_reponse"
        );

        choix_button.className = "envoier";
        choix_button.textContent = "Question suivante";
        article.appendChild(choix_button);

        let button_envoier = document.querySelector(".envoier");
        button_envoier.addEventListener("click", () => {
          article.innerHTML = "";
          jeux_quiz((index_questions = index_questions + 1));
        });
      }
    });
  });
}
