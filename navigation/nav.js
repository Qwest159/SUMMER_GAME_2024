const urls = [
  { url: "/", nom: "Accueil" },
  { url: "/chiffre_mystere/index.html", nom: "Chiffre Mystère" },
  { url: "/jeux_jumeaux/index.html", nom: "Jeux des Jumeaux" },
  { url: "/Pendu/index.html", nom: "Pendu" },
];
let pageactuelle = window.location.pathname;

export const nav = `
      <nav id="nav">
        <ul>
          ${urls
            .map(
              (url) =>
                `
            <li><a class="${pageactuelle == url.url ? "active" : ""}" href=${
                  url.url
                }>${url.nom} </a></li>`
            )
            .join("")}
        </ul>
      </nav>
    `;
