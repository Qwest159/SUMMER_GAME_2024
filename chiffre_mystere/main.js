// compteur vie (doit etre actualisé)
// condition si chiffrerecup = chiffre mystere => gagné
// si chiffrerecup et different de chiffre mystere => perdu
// si vie = 0 => game over

const chiffre_mystere = Math.floor(Math.random() * 101);

document.querySelector("#app").innerHTML = `

<input type="number" name="chiffre" id="chiffre" />
<button type="button" id="button">Envoyer</button>

`;

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
let vie = 7;

function jouer() {
  let jeux = true;
  button.addEventListener("click", () => {
    if (jeux) {
      let message = "";
      let chiffre_recup_utilisateur = document.querySelector("#chiffre").value;
      if (chiffre_recup_utilisateur != "" && chiffre_recup_utilisateur >= 0) {
        if (chiffre_recup_utilisateur == chiffre_mystere) {
          message = "Vous avez gagné";
          jeux = false;
        } else {
          vie = vie - 1;

          if (vie <= 0) {
            console.log(chiffre_mystere);
            message = "Game Over , le nombre recherché est: " + chiffre_mystere;
            jeux = false;
            console.log(jeux);
          } else if (chiffre_recup_utilisateur < chiffre_mystere) {
            message =
              "Le nombre recherché est plus grand <br> Vie restante: " + vie;
          } else if (chiffre_recup_utilisateur > chiffre_mystere) {
            message =
              "Le chiffre recherché est plus petit <br> Vie restante: " + vie;
          }
        }
      } else {
        message = "Veuillez rentrer un nombre positif et valide";
      }
      affichage(message);
    }
  });
}
jouer();
