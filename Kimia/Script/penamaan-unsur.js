// Data unsur & klasifikasi
const unsurData = {
  'H': 'nonlogam',
  'He': 'nonlogam',
  'Li': 'logam',
  'Be': 'logam',
  'B': 'metaloid',
  'C': 'nonlogam',
  'N': 'nonlogam',
  'O': 'nonlogam',
  'F': 'nonlogam',
  'Ne': 'nonlogam',
  'Na': 'logam',
  'Mg': 'logam',
  'Al': 'logam',
  'Si': 'metaloid',
  'P': 'nonlogam',
  'S': 'nonlogam',
  'Cl': 'nonlogam',
  'Ar': 'nonlogam',
  'K': 'logam',
  'Ca': 'logam',
  'Fe': 'logam',
  'Cu': 'logam',
  'Zn': 'logam',
  'Br': 'nonlogam',
  'I': 'nonlogam',
  'Ag': 'logam',
  'Pb': 'logam'
};

// Tampilkan opsi dropdown
window.onload = function () {
  const daftarUnsur = Object.keys(unsurData);
  const select1 = document.getElementById('unsur1');
  const select2 = document.getElementById('unsur2');

  daftarUnsur.forEach(unsur => {
    const option1 = new Option(unsur, unsur);
    const option2 = new Option(unsur, unsur);
    select1.add(option1);
    select2.add(option2);
  });

  tampilkanTabelKlasifikasi(); // tampilkan tabel klasifikasi saat halaman load
};

function tampilkanPenamaan() {
  const u1 = document.getElementById('unsur1').value;
  const u2 = document.getElementById('unsur2').value;

  const jenis1 = unsurData[u1];
  const jenis2 = unsurData[u2];

  const output = document.getElementById('penamaanOutput');

  let hasil = `<p><strong>${u1}</strong> adalah ${jenis1}, <strong>${u2}</strong> adalah ${jenis2}.</p>`;

  if (jenis1 === 'logam' && jenis2 === 'nonlogam') {
    hasil += `
      <h3>Senyawa Ionik</h3>
      <p>Penamaan: ${u1} + ${u2} → Nama logam + nama nonlogam diakhiri -ida</p>
      <p>Contoh: ${u1}${u2} → ${u1} ...ida</p>
    `;
  } else if (jenis1 === 'nonlogam' && jenis2 === 'logam') {
    hasil += `
      <h3>Senyawa Ionik</h3>
      <p>Urutan seharusnya logam dulu. Penamaan: Nama logam + nama nonlogam + -ida</p>
    `;
  } else if (jenis1 === 'nonlogam' && jenis2 === 'nonlogam') {
    hasil += `
      <h3>Senyawa Kovalen</h3>
      <p>Gunakan awalan Yunani: mono-, di-, tri-, dst.</p>
      <p>Contoh: CO₂ → Karbon dioksida</p>
    `;
  } else if (jenis1 === 'logam' && jenis2 === 'logam') {
    hasil += `
      <h3>Paduan Logam (Alloy)</h3>
      <p>Bukan senyawa ionik atau kovalen. Contoh: Kuningan, Perunggu.</p>
    `;
  } else {
    hasil += `<p>Kombinasi tidak dikenali.</p>`;
  }

  output.innerHTML = hasil;
}

// Fungsi tambahan untuk menampilkan klasifikasi unsur
function tampilkanTabelKlasifikasi() {
  const klasifikasiOutput = document.createElement('div');
  klasifikasiOutput.innerHTML = "<h3>📊 Klasifikasi Unsur:</h3>";

  const klasifikasi = {
    logam: [],
    nonlogam: [],
    metaloid: []
  };

  for (const [unsur, tipe] of Object.entries(unsurData)) {
    if (klasifikasi[tipe]) {
      klasifikasi[tipe].push(unsur);
    }
  }

  for (const [kategori, unsurList] of Object.entries(klasifikasi)) {
    klasifikasiOutput.innerHTML += `
      <strong>${kategori.toUpperCase()}</strong>: ${unsurList.join(', ')}<br>
    `;
  }

  document.body.insertBefore(klasifikasiOutput, document.getElementById('penamaanOutput'));
}