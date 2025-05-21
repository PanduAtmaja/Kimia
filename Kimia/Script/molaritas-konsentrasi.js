document.getElementById("hitungBtn").addEventListener("click", function () {
  const mol = parseFloat(document.getElementById("mol").value);
  const volume = parseFloat(document.getElementById("volume").value);
  const massaPelarut = parseFloat(document.getElementById("massaPelarut").value);
  const massaZat = parseFloat(document.getElementById("massaZat").value);

  const hasilDiv = document.getElementById("hasil");

  // Validasi input
  if (isNaN(mol) || mol <= 0) {
    hasilDiv.textContent = "Masukkan jumlah mol yang valid (>0).";
    hasilDiv.style.color = "red";
    return;
  }
  if (isNaN(volume) || volume <= 0) {
    hasilDiv.textContent = "Masukkan volume larutan yang valid (>0).";
    hasilDiv.style.color = "red";
    return;
  }
  if (isNaN(massaPelarut) || massaPelarut <= 0) {
    hasilDiv.textContent = "Masukkan massa pelarut yang valid (>0).";
    hasilDiv.style.color = "red";
    return;
  }
  if (isNaN(massaZat) || massaZat <= 0) {
    hasilDiv.textContent = "Masukkan massa zat terlarut yang valid (>0).";
    hasilDiv.style.color = "red";
    return;
  }

  // Hitung Molaritas (M = n / V)
  const molaritas = mol / volume;

  // Hitung Molalitas (m = n / massa pelarut)
  const molalitas = mol / massaPelarut;

  // Hitung Konsentrasi % massa/volume = (massa zat terlarut (g) / volume larutan (mL)) * 100%
  // Konversi volume liter ke mL
  const volumeML = volume * 1000;
  const konsentrasiPersen = (massaZat / volumeML) * 100;

  // Tampilkan hasil
  hasilDiv.innerHTML = `
    <p>Molaritas: <strong>${molaritas.toFixed(3)} M</strong></p>
    <p>Molalitas: <strong>${molalitas.toFixed(3)} m</strong></p>
    <p>Konsentrasi massa/volume (%): <strong>${konsentrasiPersen.toFixed(3)}%</strong></p>
  `;
  hasilDiv.style.color = "green";
});
