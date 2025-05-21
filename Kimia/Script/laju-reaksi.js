function prosesSoal() {
  const soal = document.getElementById("soal").value.toLowerCase();
  let k = 0;
  let konsentrasi = {};
  let orde = {};
  let jawaban = "";

  try {
    // Ekstrak nilai k
    const kMatch = soal.match(/\bk\s*=\s*([0-9.]+)/);
    if (kMatch) k = parseFloat(kMatch[1]);

    // Ekstrak [A], [B], ...
    const regexKons = /\[([a-z])\]\s*=\s*([0-9.]+)/g;
    let match;
    while ((match = regexKons.exec(soal)) !== null) {
      konsentrasi[match[1]] = parseFloat(match[2]);
    }

    // Ekstrak orde reaksi
    const regexOrde = /berorde\s*([0-9])\s*terhadap\s*([a-z])/g;
    while ((match = regexOrde.exec(soal)) !== null) {
      const zat = match[2];
      const o = parseInt(match[1]);
      orde[zat] = o;
    }

    // Hitung laju reaksi
    let laju = k;
    for (let zat in orde) {
      const C = konsentrasi[zat];
      const o = orde[zat];
      laju *= Math.pow(C, o);
    }

    jawaban = `Laju reaksi: v = ${laju.toFixed(3)} mol/L.s`;
  } catch (e) {
    jawaban = "Terjadi kesalahan dalam pengolahan soal.";
  }

  document.getElementById("jawaban").innerHTML = `<p>${jawaban}</p>`;
}

// ✅ Untuk data dari tabel eksperimen
function hitungOrdeReaksi() {
  const table = document.getElementById("data-table");
  const rows = table.querySelectorAll("tbody tr");

  const data = [];

  rows.forEach((row) => {
    const cells = row.querySelectorAll("input");
    const A = parseFloat(cells[0].value);
    const B = parseFloat(cells[1].value);
    const rate = parseFloat(cells[2].value);
    if (!isNaN(A) && !isNaN(B) && !isNaN(rate)) {
      data.push({ A, B, rate });
    }
  });

  if (data.length < 2) {
    document.getElementById("hasil-analisis").innerHTML = "<p style='color:red;'>Minimal dua percobaan diperlukan.</p>";
    return;
  }

  let m = null, n = null;

  for (let i = 0; i < data.length - 1; i++) {
    const d1 = data[i];
    const d2 = data[i + 1];

    const deltaA = d2.A !== d1.A && d2.B === d1.B;
    const deltaB = d2.B !== d1.B && d2.A === d1.A;

    if (deltaA) {
      m = Math.log(d2.rate / d1.rate) / Math.log(d2.A / d1.A);
    } else if (deltaB) {
      n = Math.log(d2.rate / d1.rate) / Math.log(d2.B / d1.B);
    }
  }

  let output = "<h3>Hasil Analisis:</h3>";
  if (m !== null) output += `<p>Orde terhadap A: <strong>${m.toFixed(2)}</strong></p>`;
  if (n !== null) output += `<p>Orde terhadap B: <strong>${n.toFixed(2)}</strong></p>`;

  if (m !== null && n !== null) {
    output += `<p>Persamaan laju reaksi: <strong>v = k × [A]<sup>${m.toFixed(1)}</sup> × [B]<sup>${n.toFixed(1)}</sup></strong></p>`;
  }

  document.getElementById("hasil-analisis").innerHTML = output;
}
function tambahBaris() {
  const tabel = document.getElementById("data-table").getElementsByTagName('tbody')[0];
  const barisBaru = tabel.insertRow();

  const percobaanKe = tabel.rows.length;
  const selPercobaan = barisBaru.insertCell(0);
  selPercobaan.innerText = percobaanKe;

  for (let i = 0; i < 3; i++) {
    const sel = barisBaru.insertCell(i + 1);
    const input = document.createElement("input");
    input.type = "number";
    input.step = "any";
    sel.appendChild(input);
  }
}
