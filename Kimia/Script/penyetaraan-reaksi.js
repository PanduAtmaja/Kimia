function parseMolekul(molekul) {
  const regex = /([A-Z][a-z]*)(\d*)/g;
  let match;
  const atomCount = {};

  while ((match = regex.exec(molekul)) !== null) {
    const elem = match[1];
    const count = match[2] === "" ? 1 : parseInt(match[2]);
    atomCount[elem] = (atomCount[elem] || 0) + count;
  }
  return atomCount;
}

function parseReaksi(reaksi) {
  const parts = reaksi.split("->");
  if (parts.length !== 2) return null;
  const kiri = parts[0].split("+").map(m => m.trim());
  const kanan = parts[1].split("+").map(m => m.trim());
  return { kiri, kanan };
}

function getUnsurSemua(kiri, kanan) {
  const setUnsur = new Set();

  kiri.forEach(m => {
    const atom = parseMolekul(m);
    Object.keys(atom).forEach(e => setUnsur.add(e));
  });
  kanan.forEach(m => {
    const atom = parseMolekul(m);
    Object.keys(atom).forEach(e => setUnsur.add(e));
  });
  return Array.from(setUnsur);
}

function buatMatriks(kiri, kanan, unsur) {
  const baris = unsur.length;
  const kolom = kiri.length + kanan.length;
  const matriks = [];

  for (let i = 0; i < baris; i++) {
    matriks[i] = [];
    for (let j = 0; j < kolom; j++) {
      matriks[i][j] = 0;
    }
  }

  unsur.forEach((u, i) => {
    kiri.forEach((m, j) => {
      const atom = parseMolekul(m);
      matriks[i][j] = atom[u] || 0;
    });
    kanan.forEach((m, j) => {
      const atom = parseMolekul(m);
      matriks[i][j + kiri.length] = -(atom[u] || 0);
    });
  });

  return matriks;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return a * b / gcd(a, b);
}

function gaussJordan(matriks) {
  const rowCount = matriks.length;
  const colCount = matriks[0].length;

  let lead = 0;
  for (let r = 0; r < rowCount; r++) {
    if (colCount <= lead) break;
    let i = r;
    while (matriks[i][lead] === 0) {
      i++;
      if (i === rowCount) {
        i = r;
        lead++;
        if (colCount === lead) return matriks;
      }
    }
    [matriks[i], matriks[r]] = [matriks[r], matriks[i]];

    const lv = matriks[r][lead];
    for (let j = 0; j < colCount; j++) matriks[r][j] /= lv;

    for (let i = 0; i < rowCount; i++) {
      if (i !== r) {
        const lv2 = matriks[i][lead];
        for (let j = 0; j < colCount; j++) {
          matriks[i][j] -= lv2 * matriks[r][j];
        }
      }
    }
    lead++;
  }
  return matriks;
}

function cariKoefisien(matriks) {
  // Solusi koefisien ada di kolom terakhir (free variable 1)
  // ambil koef di baris terakhir + 1
  const colCount = matriks[0].length;
  const koef = [];

  for (let i = 0; i < colCount - 1; i++) {
    koef.push(matriks[i][colCount - 1]);
  }
  koef.push(1);

  // Cari Kelipatan Persekutuan Terkecil agar semua bilangan bulat
  const denominators = koef.map(n => {
    const str = n.toString();
    if (!str.includes(".")) return 1;
    const decimalPart = str.split(".")[1];
    return Math.pow(10, decimalPart.length);
  });

  let kelipatan = denominators.reduce((acc, val) => lcm(acc, val), 1);

  const koefInt = koef.map(n => Math.round(n * kelipatan));

  // Sederhanakan dengan gcd
  let gcdAll = koefInt.reduce((acc, val) => gcd(acc, val));
  const koefSederhana = koefInt.map(n => n / gcdAll);

  return koefSederhana;
}

function setarakanReaksi() {
  const input = document.getElementById("reaksiInput").value.trim();
  const hasilDiv = document.getElementById("hasilSetaraan");
  hasilDiv.innerText = "";

  const parsed = parseReaksi(input);
  if (!parsed) {
    hasilDiv.innerText = "Format reaksi salah. Gunakan tanda '->' sebagai pemisah.";
    return;
  }

  const { kiri, kanan } = parsed;
  const unsur = getUnsurSemua(kiri, kanan);
  const matriks = buatMatriks(kiri, kanan, unsur);

  // Tambah kolom konstanta nol
  matriks.forEach(row => row.push(0));

  // Tambah persamaan supaya solusi tak trivial
  matriks.push(new Array(kiri.length + kanan.length + 1).fill(0));
  matriks[matriks.length - 1][0] = 1;

  // Jalankan eliminasi Gauss-Jordan
  const rref = gaussJordan(matriks);

  const koef = cariKoefisien(rref);

  // Bentuk hasil string reaksi yang sudah setara
  let hasil = "";
  kiri.forEach((m, i) => {
    if (koef[i] !== 1) hasil += koef[i];
    hasil += m;
    if (i < kiri.length - 1) hasil += " + ";
  });

  hasil += " → ";

  kanan.forEach((m, i) => {
    const idx = i + kiri.length;
    if (koef[idx] !== 1) hasil += koef[idx];
    hasil += m;
    if (i < kanan.length - 1) hasil += " + ";
  });

  hasilDiv.innerText = hasil;
}

document.getElementById("btnSetarakan").addEventListener("click", setarakanReaksi);
