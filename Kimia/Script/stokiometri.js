function tampilkanHasil(hasil) {
  document.getElementById("hasil-stokiometri").innerText = hasil;
}

function hitungMol() {
  const massa = parseFloat(document.getElementById("massa").value);
  const mr = parseFloat(document.getElementById("mr").value);

  if (!isNaN(massa) && !isNaN(mr) && mr !== 0) {
    const mol = massa / mr;
    tampilkanHasil(`Mol = ${mol.toFixed(3)} mol`);
  } else {
    tampilkanHasil("Masukkan nilai massa dan Mr yang valid.");
  }
}

function hitungMassa() {
  const mol = parseFloat(document.getElementById("mol").value);
  const mr = parseFloat(document.getElementById("mr").value);

  if (!isNaN(mol) && !isNaN(mr)) {
    const massa = mol * mr;
    tampilkanHasil(`Massa = ${massa.toFixed(3)} gram`);
  } else {
    tampilkanHasil("Masukkan nilai mol dan Mr yang valid.");
  }
}

function hitungMolDariPartikel() {
  const partikel = parseFloat(document.getElementById("jumlah-partikel").value);
  const NA = 6.022e23;

  if (!isNaN(partikel)) {
    const mol = partikel / NA;
    tampilkanHasil(`Mol = ${mol.toExponential(3)} mol`);
  } else {
    tampilkanHasil("Masukkan jumlah partikel yang valid.");
  }
}

function hitungMolDariVolume() {
  const volume = parseFloat(document.getElementById("volume-gas").value);
  const volumeMolar = 22.4; // L/mol pada STP

  if (!isNaN(volume)) {
    const mol = volume / volumeMolar;
    tampilkanHasil(`Mol = ${mol.toFixed(3)} mol`);
  } else {
    tampilkanHasil("Masukkan volume gas yang valid.");
  }
}

function hitungMolProduk() {
  const molPereaksi = parseFloat(document.getElementById("mol-pereaksi").value);
  const koefPereaksi = parseFloat(document.getElementById("koef-pereaksi").value);
  const koefProduk = parseFloat(document.getElementById("koef-produk").value);

  if (!isNaN(molPereaksi) && !isNaN(koefPereaksi) && koefPereaksi !== 0 && !isNaN(koefProduk)) {
    const molProduk = molPereaksi * (koefProduk / koefPereaksi);
    tampilkanHasil(`Mol produk = ${molProduk.toFixed(3)} mol`);
  } else {
    tampilkanHasil("Masukkan semua nilai koefisien dan mol pereaksi dengan benar.");
  }
}
