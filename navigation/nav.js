const urls = [
  { url: "/", nom: "Accueil" },
  { url: "/chiffre_mystere/index.html", nom: "Chiffre Mystere" },
  { url: "/jeux_hasard/index.html", nom: "Jeux du Hasard" },
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
