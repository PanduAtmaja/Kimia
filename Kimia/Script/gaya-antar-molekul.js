document.getElementById('cekGayaBtn').addEventListener('click', function () {
  const tipe = document.getElementById('tipeMolekul').value;
  const hasil = document.getElementById('hasilGaya');

  switch (tipe) {
    case 'nonpolar':
      hasil.textContent = 'Gaya dominan: Van der Waals (gaya London).';
      break;
    case 'polar':
      hasil.textContent = 'Gaya dominan: Gaya Dipol-Dipol.';
      break;
    case 'hidrogen':
      hasil.textContent = 'Gaya dominan: Ikatan Hidrogen.';
      break;
    default:
      hasil.textContent = 'Silakan pilih tipe molekul.';
  }
});
