export function rafraichir(id) {
  let rafraichir = document.getElementById(id);
  rafraichir.addEventListener("click", () => {
    location.reload();
  });
}

export function actualisation_element(id, contenu) {
  return (document.getElementById(id).innerHTML = contenu);
}

export function affichage(contenu, element) {
  let contenus = contenu;
  let affichagehtml = document.querySelector("#app");
  let h3 = document.createElement(element);

  let h3existe = document.querySelector(element);
  if (h3existe) {
    affichagehtml.removeChild(h3existe);
  }
  h3.innerHTML = contenus;
  affichagehtml.appendChild(h3);
}
