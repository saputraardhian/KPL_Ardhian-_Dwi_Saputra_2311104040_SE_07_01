Program ini adalah sebuah sistem autentikasi sederhana yang berjalan di terminal menggunakan Node.js. Program ini menggunakan modul fs untuk mengelola file, readline untuk interaksi dengan pengguna melalui command line, dan crypto untuk mengamankan password dengan hashing SHA-256.

Pertama, program menyimpan data akun dalam sebuah file JSON bernama akun_terdaftar.json. Ketika program dijalankan, ia menampilkan menu yang memungkinkan pengguna untuk memilih antara mendaftar (register) atau masuk (login).

Saat mendaftar, pengguna diminta memasukkan username dan password. Username harus terdiri dari huruf saja tanpa angka atau simbol, sedangkan password harus memiliki panjang antara 8 sampai 20 karakter, mengandung minimal satu simbol khusus, dan tidak boleh mengandung username di dalamnya. Jika input valid, password tersebut akan diubah menjadi hash menggunakan SHA-256 dan data akun disimpan ke dalam file JSON, kecuali jika username tersebut sudah terdaftar sebelumnya.

Untuk login, pengguna cukup memasukkan username dan password. Program kemudian akan mengambil data akun yang tersimpan, mengubah password yang dimasukkan menjadi hash, dan mencocokkannya dengan data yang ada. Jika username dan hash password cocok, maka login berhasil dan pengguna disambut dengan pesan selamat datang. Jika tidak cocok, program menampilkan pesan bahwa username atau password salah.

Secara keseluruhan, program ini bertujuan memberikan sistem login dan pendaftaran yang sederhana dan aman dengan menggunakan hashing untuk melindungi password, serta validasi input untuk memastikan format data yang benar sebelum disimpan.

![image](https://github.com/user-attachments/assets/f46ef225-e1c5-477e-99f0-7e9068994b61)
