import { nav } from "../navigation/nav.js";
document.querySelector("#app").innerHTML = `
${nav}
<main>
  <h1>Test de rapidité</h1>
  <p>Un chrono va se lancer(celui du compteur), le but est d'arriver à 0</p>
<button type="submit" id="start_temps">Cliquez-ici pour commencer<br>(cliquez de nouveau pour arreter le chrono)</button>

<input type="hidden" name="" id="valeur_cacher" value="200">
<p >Compteur: <strong id="chiffre_start">200</strong></p>



</main>
`;
let envoierbutton_id = document.querySelector("#start_temps");
let commencer_temp;
envoierbutton_id.addEventListener("click", () => {
  let valeur_input = document.querySelector("#start_temps");

  let valeur_inputcacher_chiffre = parseInt(
    document.querySelector("#valeur_cacher").value
  );
  if (!commencer_temp) {
    valeur_input.innerHTML =
      "Cliquez-ici pour arreter le compteur<br>(cliquez de nouveau pour arreter le chrono)";

    commencer_temp = setInterval(temps, 15);
  } else if (commencer_temp) {
    clearInterval(commencer_temp);
    console.log(valeur_inputcacher_chiffre);

    affichage(presdu_0(valeur_inputcacher_chiffre));

    commencer_temp = null;
    // pour recliquer et redemarrer le timer
  }
  // affichage(valeur_input_chiffre);
});

function temps() {
  let valeur_input = document.querySelector("#chiffre_start");
  let valeur_input_chiffre = parseInt(valeur_input.textContent);
  let valeur_inputcacher = document.querySelector("#valeur_cacher");
  let valeur_inputcacher_chiffre = parseInt(valeur_inputcacher.value);
  valeur_input.innerHTML = valeur_input_chiffre - 1;
  valeur_inputcacher.value = valeur_inputcacher_chiffre - 1;
}
function affichage(contenus) {
  let contenu = contenus;
  let divapp = document.querySelector("#app");
  let divh3 = document.createElement("h3");
  divh3.innerHTML = contenu;
  let existeh3 = document.querySelector("h3");
  if (existeh3) {
    divapp.removeChild(existeh3);
  }
  divapp.appendChild(divh3);
}

function presdu_0(valeur) {
  switch (valeur) {
    case 20:
      return "Temps réalisé: 20, allez, tu peux faire mieux ! C'est très lent.";

    case 19:
      return "Temps réalisé: 19, juste un peu plus vite !";

    case 18:
      return "Temps réalisé: 18, presque à la fin.";

    case 17:
      return "Temps réalisé: 17, on peut encore améliorer.";

    case 16:
      return "Temps réalisé: 16, tu ralentis.";

    case 15:
      return "Temps réalisé: 15, presque là !";

    case 14:
      return "Temps réalisé: 14, il y a encore du chemin.";

    case 13:
      return "Temps réalisé: 13, pas superstitieux, j'espère ?";

    case 12:
      return "Temps réalisé: 12, tu t'en rapproches !";

    case 11:
      return "Temps réalisé: 11, un peu plus de vitesse !";

    case 10:
      return "Temps réalisé: 10, la moyenne ! Pas mal, mais peut mieux faire.";

    case 9:
      return "Temps réalisé: 9, continue à pousser !";

    case 8:
      return "Temps réalisé: 8, presque à mi-chemin.";

    case 7:
      return "Temps réalisé: 7, tu peux encore mieux faire.";

    case 6:
      return "Temps réalisé: 6, ça commence à ralentir.";

    case 5:
      return "Temps réalisé: 5, la moitié du chemin vers la perfection.";

    case 4:
      return "Temps réalisé: 4, tu n'es pas loin du top.";

    case 3:
      return "Temps réalisé: 3 ! Encore un peu d'effort.";

    case 2:
      return "Temps réalisé: 2 ! Tu vas vite, mais tu peux encore accélérer.";

    case 1:
      return "Temps réalisé: 1 ? Presque parfait, mais pas tout à fait.";

    case 0:
      return "Temps réalisé: 0 ! Réussi ! Tu es un champion de la rapidité !";

    case -1:
      return "Temps réalisé: -1 ? Tu étais très près, mais c'est raté.";

    case -2:
      return "Temps réalisé: -2 ! Tu es allé un peu trop loin.";

    case -3:
      return "Temps réalisé: -3 ! Tu deviens un expert en lenteur.";

    case -4:
      return "Temps réalisé: -4, presque une performance à l'envers.";

    case -5:
      return "Temps réalisé: -5, tu es dans le territoire des tortues.";

    case -6:
      return "Temps réalisé: -6, à ce rythme, on va se coucher.";

    case -7:
      return "Temps réalisé: -7, on dirait que tu recules.";

    case -8:
      return "Temps réalisé: -8, c'est un record... de lenteur.";

    case -9:
      return "Temps réalisé: -9, la lenteur incarnée.";

    case -10:
      return "Temps réalisé: -10, tu as battu le record de lenteur !";

    default:
      return "Temps réalisé: " + valeur + ", j'ai connu mieux !";
  }
}
