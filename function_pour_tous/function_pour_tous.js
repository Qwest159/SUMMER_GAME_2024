export function rafraichir(id) {
  let rafraichir = document.getElementById(id);
  rafraichir.addEventListener("click", () => {
    location.reload();
  });
}

export function actualisation_element(id, contenu) {
  return (document.getElementById(id).innerHTML = contenu);
}

//parent_id = article/main/section/footer , et....
//balise = h1,h2,h3,p ect...
//contenu =  ceux qu'on veux afficher
export function affichage(
  contenu,
  balise,
  parent_id,
  id_element_existe = null,
  chemin_image = null
) {
  let contenus = contenu;
  let affichagehtml = document.querySelector(parent_id);
  // affichagehtml.innerHTML = "";
  let h3 = document.createElement(balise);

  let h3existe = document.getElementById(id_element_existe);
  if (h3existe) {
    affichagehtml.removeChild(h3existe);
  }
  if (id_element_existe) {
    h3.id = id_element_existe;
  }
  if (chemin_image) {
    h3.src = chemin_image;
  }
  h3.innerHTML = contenus;
  affichagehtml.appendChild(h3);
}
