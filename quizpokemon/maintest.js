console.log(window.location);
const requestURL = "http://localhost:5500/quizpokemon/storage_donnee.json";
const request = new Request(requestURL);

const response = await fetch(request);
const classement = await response.json();
// ICI ON DEVRA nombre_question = array.length
let nombre_question = 20;
let donnee = document.querySelector("#app");

let personne = [];
function classement_ordre(nombre_question) {
  classement.forEach((element) => {
    if (element.score == nombre_question) {
      personne.push(element);
    }
  });
}
for (nombre_question; nombre_question >= 0; nombre_question--) {
  classement_ordre(nombre_question);
}
for (let index = 0; index < personne.length; index++) {
  donnee.innerHTML +=
    "<p>Nom: " +
    personne[index].nom +
    " => " +
    "Score: " +
    personne[index].score +
    "</p>";
}

let utilisateur = document.querySelector("#utilisateur");
let envoie = document.querySelector("#envoie");

envoie.addEventListener("click", () => {
  //savoir si la valeur contient du texte
  if (/^[A-Za-z]+$/.test(utilisateur.value)) {
    let nouveauformat = {
      nom: utilisateur.value,
      score: 10,
    };
    classement.push(nouveauformat);
  }
});
