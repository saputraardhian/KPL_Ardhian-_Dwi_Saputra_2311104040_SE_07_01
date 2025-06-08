________________________________________
1. TP_DoorMachine.js
File ini berisi class DoorMachine yang mensimulasikan perilaku sebuah pintu dengan dua kondisi utama: terkunci dan terbuka. Saat objek DoorMachine dibuat, pintu otomatis berada dalam keadaan terkunci, dan status ini langsung ditampilkan melalui method tampilkanStatus().
Class ini menyediakan method ubahState() untuk mengubah status pintu, misalnya dari terkunci menjadi terbuka, atau sebaliknya. Setelah status diubah, method ini juga menampilkan status terbaru pintu di konsol. Jika status yang diberikan tidak dikenali, maka akan muncul pesan peringatan bahwa status pintu tidak valid.
Pada bagian akhir program, dibuat objek pintu dan statusnya diubah dua kali: dari terkunci ke terbuka, lalu kembali terkunci.
________________________________________
2. TP_KodePos.js
File ini berfungsi untuk menampilkan daftar kelurahan dan mencari kode pos berdasarkan input pengguna melalui terminal. Di dalamnya terdapat class KodePos yang menyimpan data pasangan nama kelurahan dan kode pos dalam sebuah objek.
Class KodePos memiliki dua method utama:
•	getKodePos(): mengembalikan kode pos untuk kelurahan yang dicari.
•	listKelurahan(): menampilkan seluruh daftar kelurahan yang tersedia.
Program menggunakan modul readline bawaan Node.js untuk menerima input nama kelurahan dari pengguna. Setelah pengguna mengetikkan nama kelurahan, program mencocokkan input dengan data yang ada dan menampilkan kode pos terkait. Jika kelurahan tidak ditemukan, pesan “Kode pos tidak ditemukan” akan muncul.
________________________________________
3. Management.js
Kode ini mengilustrasikan penggunaan konsep Object-Oriented Programming (OOP) dalam manajemen sumber daya manusia di sebuah organisasi.
•	Class Orang
Menyimpan data dasar individu, yaitu nama (privat) dan usia. Method perkenalan() menampilkan kalimat pengenalan diri.
•	Class Karyawan
Turunan dari Orang yang menambahkan atribut peran dan gaji. Method perkenalan() di-override untuk menyertakan informasi pekerjaan dan gaji.
•	Class Manajer
Turunan dari Karyawan yang secara otomatis menetapkan peran “Manajer”. Menambahkan atribut jabatan dan bonus (privat). Method perkenalan() menyebutkan jabatan dan menghitung total pendapatan (gaji + bonus).
•	Class Departemen
Merepresentasikan unit kerja dengan nama departemen, manajer, dan daftar karyawan. Method getInfoDepartemen() menampilkan informasi manajer dan jumlah karyawan.
Implementasi ini menunjukkan bagaimana data personal dan profesional dapat diorganisir secara terstruktur dalam sistem manajemen perusahaan.
________________________________________
4. TP_KodeBuah.js
File ini berisi class KodeBuah yang menyimpan data pasangan nama buah dan kode uniknya dalam sebuah objek. Saat objek KodeBuah dibuat, data kode buah secara otomatis tersedia untuk digunakan.
Class ini menyediakan dua method utama:
•	getKodeBuah(namaBuah) yang menerima input nama buah dari pengguna, kemudian melakukan format penulisan agar huruf pertama kapital dan sisanya kecil (misalnya, "apel" menjadi "Apel"). Setelah itu, method ini mencari dan mengembalikan kode buah yang sesuai. Jika nama buah tidak ditemukan dalam data, method akan mengembalikan pesan "Kode buah tidak ditemukan".
•	listBuah() yang menampilkan seluruh daftar buah dan kode mereka di konsol.
Program ini menggunakan modul readline bawaan Node.js untuk menerima input nama buah dari terminal. Setelah pengguna memasukkan nama buah, program mencari kode buah terkait dan menampilkannya di layar.
________________________________________
5. PosisiKarakterGame.js
File ini berisi class PosisiKarakterGame yang mensimulasikan perubahan posisi karakter dalam sebuah game dengan beberapa kondisi: Berdiri, Jongkok, Terbang, dan Mendarat.
Saat objek PosisiKarakterGame dibuat, posisi karakter secara otomatis berada pada keadaan “Berdiri”. Class ini memiliki method ubahState(stateBaru) yang digunakan untuk mengubah posisi karakter ke kondisi baru yang diinginkan. Setiap kali posisi diubah, program akan menampilkan pesan perubahan posisi serta aksi terkait posisi tersebut.
Method tampilkanAksi() menampilkan deskripsi aksi yang sesuai dengan posisi saat ini, misalnya “posisi standby” untuk berdiri, “posisi istirahat” untuk jongkok, “posisi take off” untuk terbang, dan “posisi landing” untuk mendarat. Jika posisi yang diberikan tidak dikenali, maka akan ditampilkan pesan “Aksi tidak dikenali”.
Pada akhir program, dibuat objek karakter dan status posisinya diubah berturut-turut menjadi “Terbang”, “Mendarat”, dan “Jongkok”, dengan masing-masing perubahan ditampilkan di konsol.

OUTPUT SEMUA PROGRAM :

![image](https://github.com/user-attachments/assets/feeecd39-ba0b-4abb-bddc-1e80cbd1ebd2)

![image](https://github.com/user-attachments/assets/e75947d6-8afb-42cd-a23b-842c6c37e0c5)


