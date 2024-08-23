export function storage_donnee(valeur) {
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
      return "Temps réalisé: 11, un peu moins vite!";

    case 10:
      return "Temps réalisé: 10, pas mal, mais tu peux mieux faire.";

    case 9:
      return "Temps réalisé: 9, ne baisse pas les bras !";

    case 8:
      return "Temps réalisé: 8, tu approches";

    case 7:
      return "Temps réalisé: 7, tu peux encore mieux faire.";

    case 6:
      return "Temps réalisé: 6, je n'ai pas d'idée, mea culpa ?";

    case 5:
      return "Temps réalisé: 5, en route vers la perfection.";

    case 4:
      return "Temps réalisé: 4, tu n'es pas loin du top.";

    case 3:
      return "Temps réalisé: 3 ! Encore un petit effort.";

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

    case -25:
      return "Temps arrêté, Game Over";

    default:
      return "Temps réalisé: " + valeur + ", j'ai connu mieux !";
  }
}
