Tugas Pendahuluan  
Program JavaScript yang disebutkan di atas mendefinisikan kelas `HaloGeneric`, yang memiliki metode `SapaUser(user)`. Metode ini menerima parameter `user` dan mencetak pesan sapaan ke konsol dalam format **"Halo user [nama_user]."**  

Dalam fungsi utama `main()`, sebuah objek dari kelas `HaloGeneric` dibuat. Variabel `namaPanggilan` diinisialisasi dengan string `"Praktikan"`, kemudian metode `SapaUser(namaPanggilan)` dipanggil untuk menampilkan pesan **"Halo user Praktikan"** di konsol. Program ini menggambarkan konsep dasar penggunaan kelas, metode, dan pemanggilan fungsi dalam JavaScript.  

Kode JavaScript kedua, yang menambahkan **method generic**, mendefinisikan kelas `DataGeneric` untuk menyimpan serta mencetak data. Kelas ini memiliki konstruktor `constructor(data)`, yang menerima parameter `data` dan menyimpannya dalam properti `this.data`. Selain itu, terdapat metode `PrintData()`, yang mencetak data yang tersimpan dalam format **"Data yang tersimpan adalah: [data]."**  

Dalam fungsi utama `main()`, variabel `nim` diinisialisasi dengan string `"2311104031"`, kemudian sebuah objek `data` dari kelas `DataGeneric` dibuat dengan parameter `nim`. Metode `PrintData()` dipanggil untuk menampilkan **"Data yang tersimpan adalah: 2311104031"** di konsol. Program ini mengajarkan konsep dasar pemrograman berorientasi objek di JavaScript, seperti penggunaan kelas, konstruktor, dan metode.  

Tugas Jurnal
Kode pertama, yang berjudul **"Penjumlahan"**, mendefinisikan kelas `Penjumlahan` dengan metode `JumlahTigaAngka(a, b, c)`, yang digunakan untuk menjumlahkan tiga angka yang diberikan sebagai parameter. Metode ini menghitung hasil dari ekspresi `a + b + c` dan mengembalikannya sebagai output.  

Selanjutnya, objek `penjumlahan` dibuat dari kelas `Penjumlahan`, dan metode `JumlahTigaAngka(23.1, 11.0, 40.3)` dipanggil. Hasil dari operasi tersebut adalah **74.4**, yang kemudian ditampilkan di konsol. Karena kode ini menggunakan pendekatan berbasis kelas tanpa menerapkan tipe generik seperti `<T>`, metode ini hanya berfungsi dengan tipe data numerik.  

Kode kedua, yang berjudul **"Simple Database"**, mendefinisikan kelas `SimpleDataBase`, yang berfungsi sebagai sistem penyimpanan data sederhana. Kelas ini memiliki dua properti utama:  
1. `storedData` – digunakan untuk menyimpan data yang ditambahkan.  
2. `inputDates` – mencatat waktu saat data dimasukkan.  

Metode `AddNewData(data)` digunakan untuk menambahkan data ke dalam `storedData` serta mencatat waktu penyimpanannya dalam `inputDates`. Kemudian, metode `PrintAllData()` digunakan untuk menampilkan semua data yang telah tersimpan beserta waktu pencatatannya.  

Dalam contoh penggunaannya, tiga angka **(12, 34, 56)** ditambahkan ke database menggunakan metode `AddNewData(data)`, dan `PrintAllData()` dipanggil untuk menampilkan seluruh isi database bersama dengan waktu penyimpanannya.
