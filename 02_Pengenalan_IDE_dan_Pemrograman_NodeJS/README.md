1. File: variable-local-global.js
Kode ini menunjukkan perbedaan antara variabel global dan lokal.
Variabel globaVariable dideklarasikan di luar fungsi, sehingga bisa diakses dari mana saja dalam file.
Sementara itu, variabel localVariable hanya ada di dalam fungsi getMyIdentity dan tidak bisa diakses dari luar fungsi.
Fungsi getMyIdentity akan mencetak nama dan NIM menggunakan kedua variabel tersebut.
Jika baris console.log(localVariable) yang dikomentari dijalankan, maka akan terjadi error karena mencoba mengakses variabel lokal dari luar fungsi.

2. File: variables.js
Kode ini menjelaskan penggunaan variabel dengan var, const, dan let.
Variabel nama pertama kali dideklarasikan dengan var dan nilainya "Ardhian", lalu ditimpa dengan nilai baru "ayam".
Hal ini bisa terjadi karena var memungkinkan deklarasi ulang dalam cakupan yang sama.
Kemudian ada variabel nim yang dideklarasikan dengan const, artinya nilainya tetap dan tidak bisa diubah.
Terakhir, fullname dideklarasikan dengan let, yang bersifat fleksibel tapi tidak bisa dideklarasikan ulang di cakupan yang sama.

3. File: funtion.js
Kode ini memperkenalkan tiga cara mendeklarasikan fungsi di JavaScript, yaitu:
   Function declaration (perkalian)
   Arrow function (penjumlahan)
   Function expression dengan nama (pembagian)
Semua fungsi tersebut menerima dua angka sebagai parameter dan mengembalikan hasil operasi matematika (perkalian, penjumlahan, dan pembagian).
Setiap hasilnya kemudian dicetak ke layar menggunakan console.log.

4. File: if-else-switch.js
Kode ini menjelaskan penggunaan percabangan if-else dan switch.
Pertama, kode memeriksa apakah nilai a lebih besar dari b, dan jika benar akan mencetak pesan ke layar.
Lalu dilakukan pemeriksaan berantai menggunakan if-else if untuk melihat apakah a, b, atau c habis dibagi 2.
Jika salah satu kondisi terpenuhi, pesan yang sesuai akan ditampilkan. Jika tidak, maka akan mencetak bahwa tidak ada nilai yang habis dibagi 2.
Terakhir, bagian switch digunakan untuk menentukan tindakan berdasarkan nilai variabel pilihan.
Jika pilihan bernilai 2, maka akan mencetak "ini pilihan 2". Jika nilainya tidak cocok dengan case yang ada, maka bagian default akan dijalankan.


Untuk hasil output semua file :
![image](https://github.com/user-attachments/assets/ba7ff3c6-ae7f-45b6-a80b-d2d8c2c5da2d)
