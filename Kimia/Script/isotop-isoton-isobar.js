document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("atomForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const z1 = parseInt(document.getElementById("z1").value);
    const a1 = parseInt(document.getElementById("a1").value);
    const z2 = parseInt(document.getElementById("z2").value);
    const a2 = parseInt(document.getElementById("a2").value);

    const n1 = a1 - z1; // neutron atom 1
    const n2 = a2 - z2; // neutron atom 2

    let hasil = "";

    if (z1 === z2 && a1 !== a2) {
      hasil = "✅ Kedua atom adalah <strong>Isotop</strong> (Nomor atom sama, nomor massa berbeda)";
    } else if (n1 === n2 && z1 !== z2) {
      hasil = "✅ Kedua atom adalah <strong>Isoton</strong> (Jumlah neutron sama)";
    } else if (a1 === a2 && z1 !== z2) {
      hasil = "✅ Kedua atom adalah <strong>Isobar</strong> (Nomor massa sama, nomor atom berbeda)";
    } else {
      hasil = "❌ Kedua atom <strong>bukan</strong> isotop, isoton, maupun isobar.";
    }

    document.getElementById("hasil").innerHTML = hasil;
  });
});
