import { liste } from "../storage/storage.js";

export function categorie_affichage() {
  /////////// LA LISTE DES CATEGORIES DISPONIBLES ////////////
  return Object.keys(liste);
}
export function categorie_motchoisis() {
  let reponse = document.querySelector("#reponse_utilisateur");
  let index_mot = "";
  let mot = "";
  const categorie = categorie_affichage();
  if (reponse.value == "aléatoire") {
    ///////////////////   PARTIE ALEATOIRE  ////////////////
    const index_aleatoire = Math.floor(Math.random() * categorie.length);
    const categorie_aleatoire = categorie[index_aleatoire];
    index_mot = Math.floor(Math.random() * liste[categorie_aleatoire].length);
    return {
      mota_trouver: liste[categorie_aleatoire][index_mot],
      categorie: categorie_aleatoire,
    };
  } else if (categorie.indexOf(reponse.value) >= 0) {
    /////////////////////   CATEGORIE CHOISIE   ////////////////
    const index_choisie = categorie.indexOf(reponse.value);
    let categorie_choisie = categorie[index_choisie];
    index_mot = Math.floor(Math.random() * liste[categorie_choisie].length);

    return {
      mota_trouver: liste[categorie_choisie][index_mot],
      categorie: categorie_choisie,
    };
  }
}
