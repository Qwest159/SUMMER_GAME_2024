import { nav } from "../navigation/nav.js";
let vie = 1;
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
<h2>Jeux des jumeaux</h2>

<p>La régle est simple. Ecrivez l'un des mots suivants :</p>
<p><strong>Histoire, Géographie, Philosophie, Littérature, Art, Musique, Science, Mathématiques, Politique, Économie, Biologie, Chimie, Physique, Sociologie, Psychologie</strong> </p>
   <p>Votre mot doit correspondre à l'adversaire pour gagner (sur un total de 15 mots aléatoires choisit par l'ordinateur)</p>
          <input  id="valeur" placeholder="Ecrivez ici le mot">
          <button id="reponse_client">Envoiez le mot</button>
      `;

let button = document.querySelector("#reponse_client");

button.addEventListener("click", () => {
  let contenu = affichage(jeux);
  let divcreer = document.createElement("h3");
  divcreer.innerHTML = contenu;
  let existeh3 = document.querySelector("h3");
  if (existeh3) {
    document.querySelector("#app").removeChild(existeh3);
  }
  document.querySelector("#app").appendChild(divcreer);
});

function affichage() {
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

function repetition_erreur(valeur_client) {
  let message = "";
  let test = 0;
  for (test; test < 15; test++) {
    let actionclient =
      jeux.tableau1[Math.floor(Math.random() * jeux.tableau1.length)];

    if (actionclient === valeur_client.value.trim()) {
      //   actionclient + " " + valeur_client.value;
      return (
        "Gagné. <br> En voici la preuve : " +
        message +
        " <span style='color: green'>" +
        actionclient +
        "</span>"
      );
    }
    message += actionclient + " , ";
  }
  return "Perdu. <br> En voici la preuve : " + message;
}
