"use strict";

console.log("P10 JavaScript aktif");

const produkUmkm = [
  { nama: "Latte Caramel", kategori: "Kopi susu", harga: 25000, stok: 12, unggulan: true },
  { nama: "Matcha Latte", kategori: "Non-kopi", harga: 24000, stok: 9, unggulan: false },
  { nama: "Cappuccino", kategori: "Kopi susu", harga: 22000, stok: 4, unggulan: false },
  { nama: "Cafe Latte", kategori: "Kopi susu", harga: 21000, stok: 15, unggulan: false },
  { nama: "Butterscotch", kategori: "Kopi susu", harga: 20000, stok: 3, unggulan: true },
  { nama: "Ice Americano", kategori: "Kopi hitam", harga: 18000, stok: 0, unggulan: false },
];

function formatRupiah(nilai) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(nilai);
}

console.log(formatRupiah(85000));

function statusStok(stok) {
  if (stok <= 0) {
    return { label: "Habis", className: "warning" };
  }

  if (stok <= 5) {
    return { label: "Stok terbatas", className: "warning" };
  }

  return { label: "Tersedia", className: "" };
}

console.log(statusStok(0));
console.log(statusStok(3));
console.log(statusStok(12));

function buatKartuProduk(produk) {
  const status = statusStok(produk.stok);

  return `
    <article class="js-product-card">
      <h3>${produk.nama}</h3>
      <p class="category-note">${produk.kategori}</p>
      <p class="price">${formatRupiah(produk.harga)}</p>
      <span class="stock-badge ${status.className}">${status.label}</span>
    </article>
  `;
}

function renderProduk() {
  const grid = document.querySelector("#produk-dinamis");
  const ringkasan = document.querySelector("#produk-ringkasan");
  const unggulan = document.querySelector("#produk-unggulan");

  if (!grid || !ringkasan || !unggulan) {
    console.warn("Target render produk belum lengkap.");
    return;
  }

  produkUmkm.forEach((produk) => {
    console.log("Debug produk:", produk.nama, "stok:", produk.stok);
  });

  const produkTersedia = produkUmkm.filter((produk) => produk.stok > 0); 
  const produkUnggulan = produkUmkm.find((produk) => produk.unggulan === true);
  const markupProduk = produkTersedia.map(buatKartuProduk).join("");

  grid.innerHTML = markupProduk;
  ringkasan.textContent = `${produkTersedia.length} produk tersedia dari ${produkUmkm.length} data.`;

  unggulan.textContent = produkUnggulan
    ? `Produk unggulan: ${produkUnggulan.nama}`
    : "Belum ada produk unggulan.";

  console.log("Jumlah produk tersedia:", produkTersedia.length); 
  console.table(produkUmkm);
}

document.addEventListener("DOMContentLoaded", renderProduk);