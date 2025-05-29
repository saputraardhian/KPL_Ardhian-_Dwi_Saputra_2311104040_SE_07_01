const { AkarPersamaanKuadrat, HasilKuadrat } = require('./AljabarLib');

console.log("=== TEST LIBRARY ALJABAR ===");

// Ganti angka: dari [1, -3, -10] menjadi [2, -7, 3]
let akar = AkarPersamaanKuadrat([2, -7, 3]);
console.log("Akar persamaan 2x^2 - 7x + 3 =", akar);

// Ganti angka: dari [2, -3] menjadi [3, 5]
let kuadrat = HasilKuadrat([3, 5]);
console.log("Hasil kuadrat dari (3x + 5)^2 =", kuadrat);
