1.	`Jurnal_KodeBuah.js`

Deskripsi:

Program ini mencocokkan nama buah dengan kode identifikasi unik menggunakan struktur data berbasis objek. Implementasi dilakukan menggunakan class dan interaksi input/output via command-line.

Fitur Utama:

-	Menampilkan daftar buah dan kodenya.

-	Input nama buah dari pengguna.

-	Menampilkan kode buah sesuai input atau pesan error jika tidak ditemukan.

Struktur Class:

-	`KodeBuah`

-	`dataKodeBuah`: Objek mapping buah kode.

-	`getKodeBuah(namaBuah)`: Mengembalikan kode buah.

-	`listBuah()`: Menampilkan daftar buah yang tersedia.

2.	`Jurnal_PosisiKarakterGame.js`

Deskripsi:

Simulasi perubahan posisi karakter game (Berdiri, Jongkok, Terbang, Mendarat) berdasarkan state yang diubah. Cocok untuk mengenalkan finite state machine sederhana dalam konteks permainan.

Fitur Utama:

-	State awal: "Berdiri".

-	Fungsi untuk mengubah state dan menampilkan aksi sesuai state.
 
-	Pemetaan state ke aksi dengan objek literal.

Struktur Class:

-	`PosisiKarakterGame`

-	`state`: Menyimpan posisi saat ini.

-	`ubahState(stateBaru)`: Mengubah dan menampilkan aksi.

-	`tampilkanAksi()`: Menampilkan aksi berdasarkan state saat ini.

3.	`management.js`

Deskripsi:

Simulasi sistem manajemen perusahaan dengan hirarki class `Orang`, `Karyawan`, dan `Manajer`. Ditambah class
`Departemen` untuk mengelola karyawan.

Fitur Utama:

-	Penggunaan pewarisan class.

-	Enkapsulasi properti `nama` dan `bonus`.

-	Perhitungan pendapatan total untuk manajer.

-	Informasi lengkap departemen.

Struktur Class:

-	`Orang` `Karyawan` `Manajer`

-	`perkenalan()`: Override sesuai jabatan.

-	`Departemen`

-	`getInfoDepartemen()`: Informasi nama, manajer, jumlah karyawan.

4.	`TP_DoorMachine.js`

Deskripsi:
 
Simulasi sederhana pintu otomatis menggunakan konsep Finite State Machine (FSM) dengan dua state: "Terkunci" dan "Terbuka".

Fitur Utama:

-	State awal adalah "Terkunci".

-	Fungsi untuk mengubah status pintu.

-	Validasi status dengan output deskriptif.

Struktur Class:

-	`DoorMachine`

-	`state`: Status saat ini.

-	`ubahState(stateBaru)`: Ubah status pintu.

-	`tampilkanStatus()`: Output kondisi pintu.

5.	`TP_KodePos.js`

Deskripsi:

Program berbasis CLI untuk mencari kode pos dari kelurahan tertentu. Cocok untuk simulasi aplikasi layanan publik atau administrasi.

Fitur Utama:

-	Menampilkan daftar kelurahan.

-	Input nama kelurahan dari pengguna.

-	Output kode pos atau pesan jika tidak ditemukan.

Struktur Class:

-	`KodePos`

-	`dataKodePos`: Mapping kelurahan kode pos.

-	`getKodePos(kelurahan)`: Mengembalikan kode pos.

-	`listKelurahan()`: Tampilkan semua kelurahan.
