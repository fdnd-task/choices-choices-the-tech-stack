// Doet in de browser wat NavLink/useLocation in React deden
const menu = document.getElementById("menu");
const links = menu.querySelectorAll("a");

function scrollToHash(hash) {
  if (hash) {
    document
      .getElementById(hash.slice(1))
      ?.scrollIntoView({ behavior: "smooth" });
  }
}

// Actieve link: pad én hash moeten kloppen
function updateActive() {
  links.forEach((link) => {
    const url = new URL(link.href);
    const isActive =
      location.pathname === url.pathname && location.hash === url.hash;
    link.classList.toggle("active", isActive);
    if (location.pathname === url.pathname) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Menu sluiten op mobiel
    if (menu.matches(":popover-open")) menu.hidePopover();

    // Binnen dezelfde pagina blijven, zoals client-side routing
    const url = new URL(link.href);
    if (url.pathname !== location.pathname) return;
    event.preventDefault();
    history.pushState(null, "", url);
    updateActive();

    // Ook scrollen als je nogmaals op dezelfde link klikt
    scrollToHash(url.hash);
  });
});

// Scrollen naar #projects wanneer de URL verandert
window.addEventListener("popstate", () => {
  updateActive();
  scrollToHash(location.hash);
});

updateActive();
scrollToHash(location.hash);
