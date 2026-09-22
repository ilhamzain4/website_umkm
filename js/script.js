const promoButton = document.querySelector("#promoButton");

if (promoButton) {
  const teksAwal = promoButton.textContent;
  const teksPromo = "Promo: Beli 2 gratis es teh jumbo!";
  let promoTampil = false;

  promoButton.addEventListener("click", () => {
    promoTampil = !promoTampil;
    promoButton.textContent = promoTampil ? teksPromo : teksAwal;
    promoButton.setAttribute("aria-pressed", String(promoTampil));
  });
}

const tahunFooter = document.querySelector("#tahun");
const promoButton = document.querySelector("#promoButton");

if (promoButton) {
  const teksAwal = promoButton.textContent;
  const teksPromo = "Promo: Beli 2 gratis es teh jumbo!";
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
if (tahunFooter) {
  tahunFooter.textContent = new Date().getFullYear();
}