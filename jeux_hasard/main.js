let vie = 99;
let jeux = {
  tableau1: [
    "histoire",
    "géographie",
    "philosophie",
    "littérature",
    "art",
    "musique",
    "science",
    "mathématiques",
    "politique",
    "économie",
    "biologie",
    "chimie",
    "physique",
    "sociologie",
    "psychologie",
  ],
};

let interdit = {
  un: ["quatre", "cinq", "six"],
  deux: ["quatre", "cinq", "six"],
  trois: ["quatre", "cinq"],
};

document.querySelector("#app").innerHTML = `
<h2>Jeux de l'identique</h2>

<p>Les régles sont simples: Ecrivez l'un des mots suivants</p>
<p> histoire,
    géographie,
    philosophie,
    littérature,
    art,
    musique,
    science,
    mathématiques,
    politique,
    économie,
    biologie,
    chimie,
    physique,
    sociologie,
    psychologie</p>
   
          <input  id="valeur" placeholder="Ecrivez ici le mot">
          <button id="reponse_client">Cliquez-ici pour commencer le jeux</button>
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
      return "Veuillez définir une donnée correcte ou valide,attention à l'orthographe du mot";
    }
  } else {
    return "Partie terminée";
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
