const promoButton = document.querySelector("#promoButton");

if (promoButton) {
  const teksAwal = promoButton.textContent;
  const teksPromo = "Promo: Beli 2 Dapat Diskon 20%";
  let promoTampil = false;

  promoButton.addEventListener("click", () => {
    promoTampil = !promoTampil;

    promoButton.textContent = promoTampil ? teksPromo : teksAwal;
    promoButton.setAttribute("aria-pressed", String(promoTampil));
  });
}

const tahunFooter = document.querySelector("#tahun");

if (tahunFooter) {
  tahunFooter.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#menu-utama");

if (navToggle && navMenu) {
  const setMenu = (buka) => {
    navMenu.classList.toggle("is-open", buka);
    navToggle.classList.toggle("is-open", buka);
    navToggle.setAttribute("aria-expanded", String(buka));
    navToggle.setAttribute("aria-label", buka ? "Tutup menu" : "Buka menu");
  };

  navToggle.addEventListener("click", () => {
    setMenu(!navMenu.classList.contains("is-open"));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
      setMenu(false);
      navToggle.focus();
    }
  });

  window.matchMedia("(min-width: 42rem)").addEventListener("change", (event) => {
    if (event.matches) setMenu(false);
  });
}