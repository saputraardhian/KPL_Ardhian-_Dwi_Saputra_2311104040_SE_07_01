TP Modul 12 

Pada tahap ini, dikembangkan aplikasi GUI sederhana menggunakan Electron.js untuk menentukan tanda dari sebuah bilangan. Antarmuka aplikasi terdiri dari satu textbox untuk input angka, satu tombol untuk mengeksekusi proses, dan satu label untuk menampilkan hasil. Antarmuka dirancang dalam file index.html, sementara logika aplikasi ditulis dalam script.js.

Saat pengguna memasukkan angka dan menekan tombol, fungsi cekTanda() akan dijalankan. Fungsi ini akan mengambil nilai input, mengonversinya ke integer, dan memanggil CariTandaBilangan() untuk menentukan apakah angka tersebut "Negatif", "Nol", atau "Positif", lalu menampilkan hasilnya secara dinamis pada layar.

Pengujian performa dilakukan saat aplikasi dalam keadaan idle (tidak ada input) menggunakan Task Manager, dan tercatat bahwa konsumsi CPU dan GPU berada di angka 0.0%, menunjukkan bahwa aplikasi sangat ringan. Saat pengguna memberikan input, terdapat sedikit peningkatan konsumsi sumber daya dengan CPU sebesar 0.3% dan GPU sebesar 0.6%, yang merupakan respons wajar dan ringan untuk proses logika sederhana.

Untuk memastikan akurasi fungsi, dilakukan pengujian logika menggunakan perintah console.assert() pada beberapa skenario: bilangan negatif, nol, dan positif. Semua pengujian berhasil dijalankan tanpa error, menandakan bahwa fungsi CariTandaBilangan() bekerja sesuai harapan.

 Jurnal Modul 12 
 
Aplikasi GUI ini dibuat menggunakan framework Electron.js, dengan antarmuka HTML yang menampilkan dua textbox untuk input angka a dan b, satu tombol untuk memulai perhitungan, dan satu label hasil. File index.html digunakan untuk desain antarmuka, dan logika aplikasinya ditulis dalam file script.js.

Saat tombol ditekan, fungsi prosesPangkat() akan mengambil nilai dari textbox, lalu memanggil fungsi hitungPangkat(a, b). Fungsi ini bertugas menghitung nilai a pangkat b menggunakan iterasi manual, tanpa menggunakan fungsi bawaan seperti Math.pow().

Fungsi hitungPangkat mencakup validasi kondisi sebagai berikut:

Jika b = 0, hasil = 1 (identitas pangkat),

Jika b < 0, hasil = -1,

Jika b > 10 atau a > 100, hasil = -2 (batasan input),

Jika hasil melebihi batas Number.MAX_SAFE_INTEGER, maka dianggap overflow dan hasil = -3.

Pengamatan performa saat idle menunjukkan konsumsi CPU dan GPU di angka 0.0%. Saat pengguna memberikan input dan memicu proses perhitungan, CPU naik menjadi 0.2% dan GPU menjadi 0.1%. Ini disebabkan oleh proses iterasi sebanyak b kali dan pengecekan overflow di setiap langkah.

Pengujian logika dilakukan menggunakan perintah console.assert() yang ditulis dalam fungsi testCariNilaiPangkat(), mencakup semua kondisi logika penting. Seluruh test berhasil dijalankan dengan benar, menunjukkan bahwa fungsi hitungPangkat() telah bekerja optimal dan mencakup semua kemungkinan skenario input.

![image](https://github.com/user-attachments/assets/bcac0097-5ba5-48fc-8fe3-c3b8cfafaaf5)

![image](https://github.com/user-attachments/assets/10556384-10e5-4a47-841e-4bb23e883688)
