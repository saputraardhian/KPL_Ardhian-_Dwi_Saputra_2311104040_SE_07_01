function CariTandaBilangan(a) {
    if (a < 0) {
        return "Negatif";
    } else if (a > 0) {
        return "Positif";
    } else {
        return "Nol";
    }
}

function cekTanda() {
    const input = document.getElementById("inputAngka").value;
    const output = document.getElementById("outputHasil");

    const angka = parseInt(input);

    if (isNaN(angka)) {
        output.textContent = "Masukkan angka yang valid!";
        return;
    }

    const hasil = CariTandaBilangan(angka);
    output.textContent = `Hasil: ${hasil}`;
}