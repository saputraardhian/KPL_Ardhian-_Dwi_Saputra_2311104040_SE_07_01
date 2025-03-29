Penjelasan Kode untuk Jurnal 

Kode pertama dalam Jurnal berisi dua kelas utama, yaitu VideoSayaTube dan PenggunaSayaTube, yang digunakan untuk merepresentasikan sistem sederhana dalam platform berbasis video.  
Kelas VideoSayaTube memiliki atribut id, yang berupa angka acak lima digit untuk membedakan setiap video, judul sebagai nama video, dan jumlahTayang yang dimulai dari nol. Untuk menambahkan jumlah tayangan, digunakan metode tambahJumlahTayang(jumlah) yang memastikan nilai yang dimasukkan harus positif. Selain itu, terdapat metode cetakDetailVideo() yang mencetak informasi video ke konsol, termasuk ID, judul, dan jumlah tayangan.  

Kelas PenggunaSayaTube merepresentasikan seorang pengguna dalam sistem dengan atribut id, yang juga berupa angka acak, namaPengguna, serta videoDiunggah, yang merupakan array untuk menyimpan daftar video yang telah diunggah oleh pengguna. Pengguna dapat menambahkan video menggunakan metode tambahVideo(video), menghitung total jumlah tayangan dari semua video dengan hitungTotalTayang(), serta menampilkan daftar video yang diunggah menggunakan cetakSemuaVideo().  
Dalam implementasinya, dibuat objek pengguna dengan nama "Ardhian Dwi Saputra", kemudian sepuluh video ulasan film ditambahkan ke akun pengguna. Setiap video diberikan jumlah tayangan acak hingga 1000 sebelum ditambahkan ke akun. Setelah semua video ditambahkan, daftar video dan total jumlah tayangan ditampilkan ke konsol.  

Pada kode kedua dalam Jurnal, dibuat kelas SayaTubeVideo dengan validasi dasar. Kelas ini memiliki atribut id, title, dan playCount. Metode IncreasePlayCount(count) digunakan untuk menambah jumlah tayangan dengan memastikan bahwa angka yang diberikan harus positif. Selain itu, metode PrintVideoDetails() menampilkan detail video ke konsol.  
Dalam penggunaannya, dibuat objek video dengan judul "Ardhian Dwi Saputra", kemudian jumlah tayangan ditambah sebanyak lima kali, dan hasilnya ditampilkan ke konsol.  

Penjelasan Kode untuk Tugas Pendahuluan (TP)

Pada kode pertama dalam TP, dilakukan pengembangan lebih lanjut terhadap kelas SayaTubeVideo dengan menerapkan prinsip Design by Contract (DBC) untuk memastikan keamanan program.  
Beberapa validasi tambahan diterapkan pada kelas ini, seperti memastikan bahwa judul tidak boleh kosong dan memiliki panjang maksimal 200 karakter. Selain itu, jumlah tayangan yang dapat ditambahkan dalam satu kali pemanggilan dibatasi hingga 25.000.000, dan dilakukan pengecekan integer overflow agar nilai tidak melebihi batas maksimum Number.MAX_SAFE_INTEGER.  
Metode IncreasePlayCount(count) diperbarui dengan blok try-catch untuk menangani kesalahan seperti input yang tidak valid atau jumlah tayangan yang melebihi batas aman. Jika terjadi kesalahan, program tidak akan berhenti tetapi hanya menampilkan pesan error di konsol.  
Dalam implementasi kode ini, dibuat instance pengguna dengan nama "Review Film Ardhian", lalu tiga video dengan jumlah tayangan yang berbeda ditambahkan. Masing-masing video diberikan jumlah tayangan sebanyak 1 juta, 2 juta, dan 1,5 juta. Setelah video ditambahkan ke akun pengguna, daftar video beserta total jumlah tayangan ditampilkan ke konsol.  

Pada kode kedua dalam TP, dilakukan penyempurnaan lebih lanjut dengan validasi yang lebih ketat. Salah satu perubahan utama adalah pembatasan panjang judul video menjadi maksimal 100 karakter, serta jumlah maksimal penambahan play count dalam satu panggilan metode IncreasePlayCount() diturunkan menjadi 10.000.000. Selain itu, terdapat postcondition baru yang membatasi jumlah video yang ditampilkan dalam daftar maksimal delapan video agar tidak terlalu panjang.  
Beberapa pengujian tambahan juga dilakukan untuk memastikan keandalan sistem. Dicoba untuk membuat video dengan judul yang melebihi 100 karakter, yang kemudian menghasilkan error karena tidak memenuhi syarat validasi. Selain itu, dicoba menambahkan jumlah tayangan yang melebihi batas maksimal, yang juga menyebabkan error muncul.  
Untuk menguji integer overflow, dilakukan percobaan dengan menambahkan jumlah tayangan dalam sebuah loop, di mana sistem berhasil menangani skenario ini dengan menampilkan pesan error tanpa menyebabkan crash pada program.  
Dalam implementasi akhirnya, dibuat sebuah video berjudul "Tutorial install By - Ardhian S", kemudian berbagai pengujian dilakukan untuk melihat bagaimana sistem menangani input yang tidak valid serta mencegah integer overflow. Hasil akhirnya kemudian ditampilkan ke konsol.  

