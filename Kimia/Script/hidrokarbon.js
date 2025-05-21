function cekHidrokarbon() {
  const jumlahC = parseInt(document.getElementById("jumlahC").value);
  const gugus = document.getElementById("gugusFungsi").value;
  const hasil = document.getElementById("hasil");

  if (isNaN(jumlahC) || jumlahC < 1) {
    hasil.innerHTML = "<p>Silakan masukkan jumlah atom karbon yang valid.</p>";
    return;
  }

  let namaIUPAC = "";
  let namaTrivial = "-";
  let jenis = "";

  const awalan = ["", "Met", "Et", "Prop", "But", "Pent", "Heks", "Hept", "Okt", "Non", "Dek"];

  // Validasi panjang awalan
  if (jumlahC > 10) {
    hasil.innerHTML = "<p>Jumlah atom C terlalu besar untuk contoh nama sederhana.</p>";
    return;
  }

  if (gugus === "alkana" || gugus === "") {
    jenis = "Alkana";
    namaIUPAC = `${awalan[jumlahC]}ana`;
    if (jumlahC === 1) namaTrivial = "Metana (IUPAC & trivial)";
    else if (jumlahC === 2) namaTrivial = "Etana (IUPAC & trivial)";
  } else if (gugus === "alkena") {
    jenis = "Alkena";
    namaIUPAC = `${awalan[jumlahC]}ena`;
  } else if (gugus === "alkuna") {
    jenis = "Alkuna";
    namaIUPAC = `${awalan[jumlahC]}una`;
  } else if (gugus === "alkohol") {
    jenis = "Alkohol";
    namaIUPAC = `${awalan[jumlahC]}anol`;
    if (jumlahC === 2) namaTrivial = "Etanol / Alkohol";
  } else if (gugus === "eter") {
    jenis = "Eter";
    namaIUPAC = `${awalan[jumlahC]}il eter`;
    if (jumlahC === 2) namaTrivial = "Dimetil eter";
  } else if (gugus === "asam-karboksilat") {
    jenis = "Asam Karboksilat";
    namaIUPAC = `Asam ${awalan[jumlahC]}anoat`;
    if (jumlahC === 1) namaTrivial = "Asam format";
    else if (jumlahC === 2) namaTrivial = "Asam asetat";
  }

  hasil.innerHTML = `
    <h3>Hasil Identifikasi:</h3>
    <p><strong>Jenis Senyawa:</strong> ${jenis}</p>
    <p><strong>Nama IUPAC:</strong> ${namaIUPAC}</p>
    <p><strong>Nama Trivial / Dagang:</strong> ${namaTrivial}</p>
  `;
}
