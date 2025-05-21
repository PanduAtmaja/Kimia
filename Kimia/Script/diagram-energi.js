let chart; // variabel global agar bisa diupdate

function gambarDiagram() {
  const deltaH = parseFloat(document.getElementById("deltaH").value);
  const ctx = document.getElementById("diagramEnergi").getContext("2d");

  if (isNaN(deltaH)) {
    alert("Silakan masukkan angka ΔH yang valid.");
    return;
  }

  const reaktan = 100; // Titik awal energi
  const produk = reaktan + deltaH;

  const warna = deltaH < 0 ? "green" : "red";
  const labelReaksi = deltaH < 0 ? "Eksoterm (melepas energi)" : "Endoterm (menyerap energi)";
  const ikon = deltaH < 0 ? "▼" : "▲";

  document.getElementById("jenis-reaksi").innerHTML = `${ikon} Reaksi ${labelReaksi}, ΔH = ${deltaH} kJ/mol`;

  const data = {
    labels: ["Reaktan", "Produk"],
    datasets: [{
      label: "Energi",
      data: [reaktan, produk],
      borderColor: warna,
      backgroundColor: warna,
      tension: 0.4,
      pointRadius: 6,
      pointBackgroundColor: warna,
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          title: {
            display: true,
            text: 'Energi (kJ/mol)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Lintasan Reaksi'
          }
        }
      }
    }
  };

  if (chart) {
    chart.destroy();
  }
  chart = new Chart(ctx, config);
}
