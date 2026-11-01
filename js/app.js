"use strict";

console.log("P09 JavaScript aktif");

const produkUmkm = [
  { nama: "Latte Caramel", kategori: "Kopi susu", harga: 25000, stok: 12 },
  { nama: "Matcha Latte", kategori: "Non-kopi", harga: 24000, stok: 9 },
  { nama: "Cappuccino", kategori: "Kopi susu", harga: 22000, stok: 4 },
  { nama: "Cafe Latte", kategori: "Kopi susu", harga: 21000, stok: 15 },
  { nama: "Butterscotch", kategori: "Kopi susu", harga: 20000, stok: 3 },
  { nama: "Ice Americano", kategori: "Kopi hitam", harga: 18000, stok: 0 },
];

console.table(produkUmkm);

const formatRupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

console.log(formatRupiah.format(produkUmkm[0].harga));

function statusStok(stok) {
  if (stok === 0) {
    return { label: "Habis", className: "empty" };
  }

  if (stok <= 5) {
    return { label: "Stok terbatas", className: "warning" };
  }

  return { label: "Tersedia", className: "" };
}

function labelKategori(kategori) {
  switch (kategori) {
    case "Kopi susu":
      return "Kopi susu pilihan";
    case "Kopi hitam":
      return "Kopi hitam tanpa susu";
    case "Non-kopi":
      return "Pilihan non-kopi";
    default:
      return "Produk UMKM";
  }
}

function renderProduk() {
  const grid = document.querySelector("#produk-dinamis");
  const ringkasan = document.querySelector("#produk-ringkasan");

  if (!grid || !ringkasan) {
    return;
  }

  let jumlahTersedia = 0;
  let markup = "";

  for (const produk of produkUmkm) {
    const status = statusStok(produk.stok);
    const kategori = labelKategori(produk.kategori);
    const labelAksi = produk.stok > 0 ? "Siap dipesan" : "Hubungi admin";

    if (produk.stok > 0) {
      jumlahTersedia = jumlahTersedia + 1;
    }

    markup = markup + `
      <article class="js-product-card">
        <h3>${produk.nama}</h3>
        <p>${kategori}</p>
        <p class="price">${formatRupiah.format(produk.harga)}</p>
        <span class="stock-badge ${status.className}">${status.label}</span>
        <p>${labelAksi}</p>
      </article>
    `;
  }

  grid.innerHTML = markup;
  ringkasan.textContent = `${jumlahTersedia} produk tersedia dari ${produkUmkm.length} data.`;
}

document.addEventListener("DOMContentLoaded", renderProduk);