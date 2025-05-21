const strukturLewisData = {
  "H2O": {
    struktur: "O di tengah, 2 H terhubung dengan pasangan bebas di O",
    bentuk: "Bentuk V (bengkok)",
    pasanganBebas: 2,
    ikatanRangkap: 0
  },
  "CO2": {
    struktur: "O=C=O (ikatan rangkap dua ke kiri dan kanan)",
    bentuk: "Linear",
    pasanganBebas: 4,
    ikatanRangkap: 2
  },
  "NH3": {
    struktur: "N di tengah, 3 H dan 1 pasangan bebas di N",
    bentuk: "Piramida trigonal",
    pasanganBebas: 1,
    ikatanRangkap: 0
  },
  "CH4": {
    struktur: "C di tengah dengan 4 H di sekeliling (tanpa pasangan bebas)",
    bentuk: "Tetrahedral",
    pasanganBebas: 0,
    ikatanRangkap: 0
  },
  "O2": {
    struktur: "O=O (ikatan rangkap dua)",
    bentuk: "Linear",
    pasanganBebas: 4,
    ikatanRangkap: 1
  },
  "N2": {
    struktur: "N≡N (ikatan rangkap tiga)",
    bentuk: "Linear",
    pasanganBebas: 2,
    ikatanRangkap: 1
  }
};

function tampilkanStrukturLewis() {
  const input = document.getElementById("inputLewis").value.trim();
  const data = strukturLewisData[input];

  const outputDiv = document.getElementById("outputLewis");
  if (data) {
    outputDiv.innerHTML = `
      <p><strong>Struktur Lewis:</strong> ${data.struktur}</p>
      <p><strong>Bentuk Molekul:</strong> ${data.bentuk}</p>
      <p><strong>Pasangan Elektron Bebas:</strong> ${data.pasanganBebas}</p>
      <p><strong>Jumlah Ikatan Rangkap:</strong> ${data.ikatanRangkap}</p>
    `;
  } else {
    outputDiv.innerHTML = "<p>Data struktur tidak tersedia untuk senyawa tersebut.</p>";
  }
}
