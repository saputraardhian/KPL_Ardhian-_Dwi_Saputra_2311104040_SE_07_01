

### **Tugas Pendahuluan KPL (Sinkron dengan Kode)**

Dalam tugas pendahuluan ini, dibuat sebuah program Node.js yang menggunakan pendekatan modular dengan memisahkan antara file utama dan library eksternal. File utama (`main.js`) mengimpor modul dari `AljabarLib`, yang berisi dua fungsi utama: `AkarPersamaanKuadrat` dan `HasilKuadrat`. Fungsi `AkarPersamaanKuadrat` digunakan untuk menghitung akar-akar dari persamaan kuadrat menggunakan rumus diskriminan, sedangkan `HasilKuadrat` menghitung hasil kuadrat sempurna dari bentuk $(ax + b)^2$. Pada tahap awal, sempat terjadi error karena kesalahan pada path impor modul, namun setelah diperbaiki sesuai struktur direktori yang benar, program berhasil dijalankan. Tugas ini bertujuan untuk memahami penggunaan `require`, `module.exports`, serta pembentukan struktur proyek Node.js yang modular.



### **Tugas Jurnal KPL (Sinkron dengan Kode)**

Tugas jurnal ini berfokus pada pembuatan library matematika bernama `MatematicalLibrary` dalam Node.js yang terdiri dari empat fungsi utama: `FPB`, `KPK`, `Turunan`, dan `Integral`.

* Fungsi **FPB** menggunakan algoritma Euclidean untuk menentukan faktor persekutuan terbesar.
* Fungsi **KPK** memanfaatkan hasil dari FPB untuk menghitung kelipatan persekutuan terkecil dengan rumus $\text{LKM} = \frac{a \times b}{\text{FPB}(a, b)}$.
* Fungsi **Turunan** menerima array koefisien polinomial dan mengembalikan turunan pertamanya dalam bentuk string.
* Fungsi **Integral** juga bekerja dengan array koefisien dan mengembalikan hasil integral tak tentu dalam format string, dengan tambahan konstanta `C` di akhir.

Seluruh fungsi didefinisikan dalam file `index.js` dan diimpor ke `main.js` menggunakan `require`. Di file utama, setiap fungsi dipanggil dan hasilnya ditampilkan ke konsol. Struktur ini menunjukkan pemanfaatan `module.exports` untuk ekspor fungsionalitas dan juga manipulasi array sebagai representasi persamaan matematika, selaras dengan praktik pembangunan pustaka di Node.js.

