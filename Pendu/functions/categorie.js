import { liste } from "../storage/storage.js";

export function categorie_affichage() {
  /////////// LA LISTE DES CATEGORIES DISPONIBLES ////////////
  let groupecategorie = document.getElementById("groupecategorie");
  let buttons = [];

  Object.keys(liste).forEach((categorie) => {
    const button = document.createElement("button");

    button.className = "buttoncategorie";
    button.id = categorie;

    button.textContent = categorie;

    buttons = groupecategorie.appendChild(button);
  });
}
export function categorie_motchoisis(categorieclick) {
  let reponse_text_button = categorieclick.textContent;

  let index_mot = "";
  const categorie = Object.keys(liste);

  if (reponse_text_button == "aléatoire") {
    ///////////////////   PARTIE ALEATOIRE  ////////////////
    const index_aleatoire = Math.floor(Math.random() * categorie.length);
    const categorie_aleatoire = categorie[index_aleatoire];
    index_mot = Math.floor(Math.random() * liste[categorie_aleatoire].length);
    return {
      mot_a_trouver: liste[categorie_aleatoire][index_mot],
      categorie: categorie_aleatoire,
    };
  } else if (categorie.includes(reponse_text_button)) {
    /////////////////////   CATEGORIE CHOISIE   ////////////////
    index_mot = Math.floor(Math.random() * liste[reponse_text_button].length);
    return {
      mot_a_trouver: liste[reponse_text_button][index_mot],
      categorie: reponse_text_button,
    };
  } else {
    return "une erreur est survénue";
  }
}

// export function categorie_motchoisis() {
//   let reponse_text_button = document.querySelector("#reponse_text_button_utilisateur");
//   let index_mot = "";
//   let mot = "";
//   const categorie = categorie_affichage();
//   if (reponse_text_button.value.trim().toLowerCase() == "aléatoire") {
//     ///////////////////   PARTIE ALEATOIRE  ////////////////
//     const index_aleatoire = Math.floor(Math.random() * categorie.length);
//     const categorie_aleatoire = categorie[index_aleatoire];
//     index_mot = Math.floor(Math.random() * liste[categorie_aleatoire].length);
//     return {
//       mot_a_trouver: liste[categorie_aleatoire][index_mot],
//       categorie: categorie_aleatoire,
//     };
//   } else if (categorie.indexOf(reponse_text_button.value.trim().toLowerCase()) >= 0) {
//     /////////////////////   CATEGORIE CHOISIE   ////////////////
//     const index_choisie = categorie.indexOf(reponse_text_button.value.trim().toLowerCase());
//     let categorie_choisie = categorie[index_choisie];
//     index_mot = Math.floor(Math.random() * liste[categorie_choisie].length);

//     return {
//       mot_a_trouver: liste[categorie_choisie][index_mot],
//       categorie: categorie_choisie,
//     };
//   } else {
//     return "mol mal écrit";
//   }
// }
