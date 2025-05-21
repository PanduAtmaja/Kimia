function tampilkanKonfigurasi() {
  const z = parseInt(document.getElementById("nomorAtom").value);
  const subkulitSpan = document.getElementById("subkulit");
  const kulitSpan = document.getElementById("kulitKLMN");

  if (isNaN(z) || z < 1 || z > 118) {
    subkulitSpan.innerText = "-";
    kulitSpan.innerText = "Masukkan nomor atom antara 1–118";
    return;
  }

  const orbitalUrutan = [
    { orbital: "1s", kapasitas: 2 },
    { orbital: "2s", kapasitas: 2 },
    { orbital: "2p", kapasitas: 6 },
    { orbital: "3s", kapasitas: 2 },
    { orbital: "3p", kapasitas: 6 },
    { orbital: "4s", kapasitas: 2 },
    { orbital: "3d", kapasitas: 10 },
    { orbital: "4p", kapasitas: 6 },
    { orbital: "5s", kapasitas: 2 },
    { orbital: "4d", kapasitas: 10 },
    { orbital: "5p", kapasitas: 6 },
    { orbital: "6s", kapasitas: 2 },
    { orbital: "4f", kapasitas: 14 },
    { orbital: "5d", kapasitas: 10 },
    { orbital: "6p", kapasitas: 6 },
    { orbital: "7s", kapasitas: 2 },
    { orbital: "5f", kapasitas: 14 },
    { orbital: "6d", kapasitas: 10 },
    { orbital: "7p", kapasitas: 6 }
  ];

  // Hitung konfigurasi subkulit
  let sisa = z;
  let konfigurasiSubkulit = [];

  for (const { orbital, kapasitas } of orbitalUrutan) {
    if (sisa <= 0) break;
    const isi = Math.min(sisa, kapasitas);
    konfigurasiSubkulit.push(`${orbital}${isi}`);
    sisa -= isi;
  }

  // Hitung konfigurasi kulit KLMN (kapasitas per kulit)
  const kapasitasKulit = [2, 8, 18, 32, 32, 18, 8];
  const konfigurasiKulit = [];
  let elektron = z;

  for (let i = 0; i < kapasitasKulit.length; i++) {
    if (elektron > kapasitasKulit[i]) {
      konfigurasiKulit.push(kapasitasKulit[i]);
      elektron -= kapasitasKulit[i];
    } else {
      konfigurasiKulit.push(elektron);
      break;
    }
  }

  subkulitSpan.innerText = konfigurasiSubkulit.join(" ");
  kulitSpan.innerText = konfigurasiKulit.join(" - ");
}
