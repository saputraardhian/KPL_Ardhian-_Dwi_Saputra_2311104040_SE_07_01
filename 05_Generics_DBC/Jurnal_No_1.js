class Penjumlahan {
    JumlahTigaAngka(a, b, c) {
      return a + b + c;
    }
  }
  
  const penjumlahan = new Penjumlahan();
  let angka1 = "23";
  let angka2 = "11";
  let angka3 = "40";
  let nimTerakhir = 3;
  
  let hasil;
  
  if (nimTerakhir === 1 || nimTerakhir === 2) {
    hasil = penjumlahan.JumlahTigaAngka(parseFloat(angka1), parseFloat(angka2), parseFloat(angka3));
    console.log(`Hasil penjumlahan (float): ${hasil}`);
  } else if (nimTerakhir === 3 || nimTerakhir === 4 || nimTerakhir === 5) {
    hasil = penjumlahan.JumlahTigaAngka(Number(angka1), Number(angka2), Number(angka3));
    console.log(`Hasil penjumlahan (double/Number): ${hasil}`);
  } else if (nimTerakhir === 6 || nimTerakhir === 7 || nimTerakhir === 8) {
    hasil = penjumlahan.JumlahTigaAngka(parseInt(angka1, 10), parseInt(angka2, 10), parseInt(angka3, 10));
    console.log(`Hasil penjumlahan (int): ${hasil}`);
  } else if (nimTerakhir === 9 || nimTerakhir === 0) {
    hasil = penjumlahan.JumlahTigaAngka(BigInt(angka1), BigInt(angka2), BigInt(angka3));
    console.log(`Hasil penjumlahan (long/BigInt): ${hasil}`);
  }
  