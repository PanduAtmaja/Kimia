function generateInput() {
  const jumlah = parseInt(document.getElementById("jumlahIsotop").value);
  const form = document.getElementById("inputForm");
  form.innerHTML = "";

  for (let i = 0; i < jumlah; i++) {
    form.innerHTML += `
      <div>
        <label>Isotop ${i + 1} - Massa: </label>
        <input type="number" step="any" id="massa${i}" required />
        <label>Kelimpahan (%): </label>
        <input type="number" step="any" id="kelimpahan${i}" required />
      </div>
    `;
  }
}

function hitungMassaAtom() {
  const jumlah = parseInt(document.getElementById("jumlahIsotop").value);
  let total = 0;

  for (let i = 0; i < jumlah; i++) {
    const massa = parseFloat(document.getElementById(`massa${i}`).value);
    const kelimpahan = parseFloat(document.getElementById(`kelimpahan${i}`).value);
    total += massa * (kelimpahan / 100);
  }

  document.getElementById("hasilMassa").innerText =
    `Massa atom rata-rata = ${total.toFixed(4)}`;
}
