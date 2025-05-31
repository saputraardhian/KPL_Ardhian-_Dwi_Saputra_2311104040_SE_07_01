const SatuAja = (function () {
    let satuInstansi;
    function buatInstansi() {
        return { nama: "Ardhian" };
    }
    return {
        ambilInstansi: function () {
            if (!satuInstansi) satuInstansi = buatInstansi();
            return satuInstansi;
        }
    };
})();

const objekPertama = SatuAja.ambilInstansi();
console.log(objekPertama);
