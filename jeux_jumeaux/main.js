// reprendre la valeur de l'utilisateur et le mettre en minuscule

import { nav } from "../navigation/nav.js";
import { rafraichir } from "../function_pour_tous/function_pour_tous.js";
let vie = 99;
let jeux = {
  tableau1: [
    "Histoire",
    "Géographie",
    "Philosophie",
    "Littérature",
    "Art",
    "Musique",
    "Science",
    "Mathématiques",
    "Politique",
    "Biologie",
    "Chimie",
    "Physique",
    "Sociologie",
    "Psychologie",
  ],
};

let interdit = {
  un: ["quatre", "cinq", "six"],
  deux: ["quatre", "cinq", "six"],
  trois: ["quatre", "cinq"],
};

document.querySelector("#app").innerHTML = `
${nav}

<main>
    <h1>Jeu des jumeaux</h1>

    <p>La règle est simple. Ecrivez l'un des mots suivants :</p>
    <p><strong>Histoire, Géographie, Philosophie, Littérature, Art, Musique, Science, Mathématiques, Politique, Économie, Biologie, Chimie, Physique, Sociologie, Psychologie</strong> </p>
      <p>Votre mot doit correspondre à celui l'adversaire pour gagner (sur un total de 7 mots aléatoires choisi par l'ordinateur)</p>
              <input  id="valeur" placeholder="Ecrivez le mot ici" autocomplete="off">
              
              <article id="espacement_button"> 
              <button id="reponse_client">Envoyez le mot</button>
              <button id="rafraichir">Rafraîchir</button>

              </article>
              <h3 class="reponse"></h3>  
</main>


`;
rafraichir("rafraichir");

let button = document.querySelector("#reponse_client");

button.addEventListener("click", () => {
  affichage(vrai_jeux());
});

function vrai_jeux() {
  let valeur_client = document.querySelector("#valeur");

  if (vie > 0) {
    if (
      valeur_client.value &&
      jeux.tableau1.includes(valeur_client.value.trim())
    ) {
      vie = vie - 1;
      return repetition_erreur(valeur_client);
    } else {
      return "Veuillez définir une donnée correcte ou valide.<br> Attention à l'orthographe du mot";
    }
  } else {
    return "Nombre d'essai: " + vie + "<br>Partie terminée";
  }
}
function affichage(contenus) {
  let contenu = contenus;
  let divapp = document.querySelector(".reponse");
  divapp.innerHTML = "";

  divapp.innerHTML = contenu;
}
function repetition_erreur(valeur_client) {
  let message = "";
  let test = 0;
  for (test; test < 7; test++) {
    let actionclient =
      jeux.tableau1[Math.floor(Math.random() * jeux.tableau1.length)];

    if (
      actionclient.toLowerCase() === valeur_client.value.toLowerCase().trim()
    ) {
      //   actionclient + " " + valeur_client.value;
      return (
        "Gagné. <br> En voici la preuve : " +
        message +
        " <span style='color: green'>" +
        actionclient +
        "</span>"
      );
    }
    message += actionclient + ", ";
  }
  return "Perdu. <br> En voici la preuve : " + message;
}
