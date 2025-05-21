// termokimia.js
let reaksi = [];

function tambahReaksi() {
  const persamaan = document.getElementById("persamaan").value;
  const deltaH = parseFloat(document.getElementById("deltaH").value);

  if (!persamaan || isNaN(deltaH)) {
    alert("Mohon masukkan reaksi dan nilai ΔH yang valid.");
    return;
  }

  reaksi.push({ persamaan, deltaH, factor: 1 });
  renderReaksi();
}

function renderReaksi() {
  const container = document.getElementById("reaksiList");
  container.innerHTML = "";

  let total = 0;
  let penjelasan = [];

  reaksi.forEach((r, i) => {
    total += r.deltaH * r.factor;

    const div = document.createElement("div");
    div.className = "reaksi-item";
    div.innerHTML = `
      ${r.factor === -1 ? "Dibalik: " : r.factor !== 1 ? `Dikali ${r.factor}: ` : ""}
      ${r.persamaan}, ΔH = ${r.deltaH * r.factor} kJ
      <button onclick="balikReaksi(${i})">Balik</button>
      <button onclick="kaliReaksi(${i}, 2)">×2</button>
      <button onclick="kaliReaksi(${i}, 0.5)">×½</button>
      <button onclick="hapusReaksi(${i})">Hapus</button>
    `;

    if (r.factor === -1) penjelasan.push(`Reaksi ke-${i + 1} dibalik → ΔH jadi negatif (prinsip Hess)`);
    else if (r.factor !== 1) penjelasan.push(`Reaksi ke-${i + 1} dikali ${r.factor} → ΔH dikalikan (prinsip Hess)`);

    container.appendChild(div);
  });

  document.getElementById("totalDeltaH").innerText = `ΔH total = ${total.toFixed(2)} kJ`;
  document.getElementById("penjelasan").innerText = penjelasan.join(". ");
}

function balikReaksi(index) {
  reaksi[index].factor *= -1;
  renderReaksi();
}

function kaliReaksi(index, faktor) {
  reaksi[index].factor *= faktor;
  renderReaksi();
}

function hapusReaksi(index) {
  reaksi.splice(index, 1);
  renderReaksi();
}

function contohPembakaran() {
  reaksi = [
    { persamaan: "CH₄ + 2O₂ → CO₂ + 2H₂O", deltaH: -890, factor: 1 },
    { persamaan: "C + O₂ → CO₂", deltaH: -393, factor: 1 }
  ];
  renderReaksi();
}

function jawabSoal() {
  const soal = document.getElementById("soal-input").value.trim().toLowerCase();
  let jawaban = "";

  if (soal.includes("pembakaran metana")) {
    jawaban = `Reaksi pembakaran metana:<br>CH₄ + 2O₂ → CO₂ + 2H₂O<br>ΔH = -890.3 kJ (dilepaskan)`;
  } else if (soal.includes("co menjadi co2")) {
    jawaban = `Reaksi: CO + ½O₂ → CO₂<br>ΔH = -283.0 kJ (dibentuk dari pembakaran tidak sempurna karbon)`;
  } else {
    jawaban = "Soal belum dikenali oleh sistem. Silakan cek kembali atau gunakan kata kunci umum.";
  }

  document.getElementById("jawaban-soal").innerHTML = `<h3>Jawaban:</h3><p>${jawaban}</p>`;
}
