const ionData = {
  // Asam kuat
  "HCl": "H⁺ + Cl⁻",
  "HBr": "H⁺ + Br⁻",
  "HI": "H⁺ + I⁻",
  "HNO3": "H⁺ + NO₃⁻",
  "HClO4": "H⁺ + ClO₄⁻",
  "H2SO4": "2H⁺ + SO₄²⁻",

  // Asam lemah (reversibel)
  "CH3COOH": "CH₃COOH ⇌ CH₃COO⁻ + H⁺",
  "H2CO3": "H₂CO₃ ⇌ H⁺ + HCO₃⁻",
  "H3PO4": "H₃PO₄ ⇌ H⁺ + H₂PO₄⁻",

  // Basa kuat
  "NaOH": "Na⁺ + OH⁻",
  "KOH": "K⁺ + OH⁻",
  "LiOH": "Li⁺ + OH⁻",
  "Ba(OH)2": "Ba²⁺ + 2OH⁻",
  "Ca(OH)2": "Ca²⁺ + 2OH⁻",

  // Basa lemah (reversibel)
  "NH3": "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻",

  // Garam
  "NaCl": "Na⁺ + Cl⁻",
  "KBr": "K⁺ + Br⁻",
  "BaCl2": "Ba²⁺ + 2Cl⁻",
  "Na2SO4": "2Na⁺ + SO₄²⁻",
  "Ca(NO3)2": "Ca²⁺ + 2NO₃⁻",
  "NH4Cl": "NH₄⁺ + Cl⁻",
  "Al2(SO4)3": "2Al³⁺ + 3SO₄²⁻",
  "FeCl3": "Fe³⁺ + 3Cl⁻",
  "MgBr2": "Mg²⁺ + 2Br⁻",

  // Ion kompleks
  "[Fe(CN)6]3-": "[Fe(CN)₆]³⁻",
  "[Cu(NH3)4]2+": "[Cu(NH₃)₄]²⁺",
  "[Ag(NH3)2]+": "[Ag(NH₃)₂]⁺"
};

function tampilkanIonisasi() {
  const input = document.getElementById("inputIonisasi").value.trim();
  const hasil = ionData[input];

  if (hasil) {
    document.getElementById("hasilIonisasi").innerText = `${input} → ${hasil}`;
  } else {
    document.getElementById("hasilIonisasi").innerText = "Data ionisasi belum tersedia untuk senyawa tersebut.";
  }
}
