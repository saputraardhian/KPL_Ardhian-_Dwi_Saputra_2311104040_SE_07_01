Jawaban Tugas Pendahuluan – Design Pattern Observer
A. Contoh Penerapan Observer Pattern
Observer pattern sangat cocok digunakan ketika terdapat satu objek (disebut sebagai subject) yang mengalami perubahan, dan perubahan tersebut perlu diinformasikan secara otomatis kepada satu atau lebih objek lainnya (disebut observers).
Salah satu contoh penerapan pattern ini adalah pada sistem notifikasi portal berita. Saat admin portal menambahkan berita baru, seluruh pengguna yang telah terdaftar akan secara otomatis menerima notifikasi mengenai berita tersebut. Dengan kata lain, saat terjadi perubahan data pada subject (berita baru), semua observer (pengguna) akan langsung mendapatkan pemberitahuan.

B. Langkah-langkah Implementasi Observer Pattern
Langkah-langkah umum untuk mengimplementasikan design pattern Observer adalah sebagai berikut:

Pertama, kita membuat class observer (dalam hal ini Pengguna) yang memiliki metode update() untuk menerima notifikasi.

Kedua, kita membuat class subject (dalam hal ini Berita) yang bertugas mengelola daftar observer, dan memiliki metode attach() untuk menambahkan observer, detach() untuk menghapus observer, serta notify() untuk memberikan update kepada semua observer saat data berubah.

Di dalam class Berita, juga terdapat metode tambahBerita() yang akan mengubah state dan secara otomatis memanggil notify().

Dalam implementasinya, kita membuat beberapa instance Pengguna sebagai observer dan mendaftarkannya ke objek Berita.

Ketika method tambahBerita() dipanggil, semua observer yang terdaftar akan menerima update melalui method update() masing-masing. Jika observer dihapus melalui detach(), maka ia tidak akan lagi menerima notifikasi.

C. Kelebihan dan Kekurangan Observer Pattern
Observer pattern memiliki sejumlah kelebihan. Pertama, loose coupling antara subject dan observer, karena subject tidak perlu tahu detail implementasi observer. Kedua, sistem menjadi lebih mudah dikembangkan karena penambahan observer baru tidak memerlukan perubahan pada subject. Ketiga, sistem dapat melakukan update secara real-time ke semua observer saat subject berubah.
Namun demikian, pattern ini juga memiliki beberapa kekurangan. Jika jumlah observer sangat banyak, proses notifikasi bisa memakan banyak resource. Selain itu, urutan eksekusi observer tidak dapat dipastikan, dan alur program bisa menjadi sulit dilacak karena adanya notifikasi otomatis yang terjadi di belakang layar.

Implementasi Program – Observer Pattern
Program ini menggunakan dua class, yaitu Berita sebagai subject dan Pengguna sebagai observer.
Class Berita memiliki atribut observers (array observer yang terdaftar) dan pesanTerbaru sebagai state. Metode attach() digunakan untuk menambah observer, detach() untuk menghapus observer tertentu, notify() untuk mengirim notifikasi ke semua observer, dan tambahBerita() untuk mengubah isi berita sekaligus memicu notifikasi.
Sementara itu, class Pengguna memiliki atribut nama dan method update() untuk menerima berita baru dari subject.
Dalam pengujian program, dua pengguna bernama "Agung" dan "Rifki" didaftarkan sebagai observer ke objek portalBerita. Saat sebuah berita ditambahkan, keduanya menerima notifikasi. Kemudian, pengguna "Rifki" dihapus dari daftar observer. Ketika berita baru ditambahkan lagi, hanya "Agung" yang menerima notifikasi.

Jawaban Jurnal – Design Pattern Singleton
A. Contoh Penerapan Singleton Pattern
Design pattern Singleton digunakan ketika kita ingin memastikan bahwa hanya ada satu instance dari suatu class yang digunakan di seluruh program. Contoh penggunaannya adalah dalam manajemen koneksi database, di mana hanya diperlukan satu objek koneksi untuk efisiensi dan konsistensi data. Contoh lainnya adalah pada sistem logging, di mana seluruh bagian sistem mencatat ke satu logger yang sama, sehingga tidak perlu membuat logger baru di setiap bagian kode.

B. Langkah-langkah Implementasi Singleton Pattern
Untuk mengimplementasikan pattern Singleton, langkah pertama adalah membuat constructor dalam class bersifat privat, agar objek tidak bisa diinstansiasi secara langsung dari luar class. Selanjutnya, dibuat sebuah variabel statis untuk menyimpan satu-satunya instance dari class tersebut. Terakhir, dibuat metode statis yang mengembalikan instance tersebut. Jika instance belum ada, maka akan dibuat terlebih dahulu; jika sudah ada, langsung dikembalikan.
Dalam implementasi JavaScript, kita menggunakan Immediately Invoked Function Expression (IIFE) untuk menjaga agar instance tetap private dan hanya bisa diakses melalui method ambilInstansi().

C. Kelebihan dan Kekurangan Singleton Pattern
Beberapa kelebihan dari pattern ini antara lain adalah: memberikan kontrol akses global terhadap objek (melalui satu titik akses), menghemat memori karena hanya satu objek yang dibuat, serta menjaga konsistensi data global karena semua bagian aplikasi menggunakan instance yang sama.
Namun, pattern ini juga memiliki kekurangan. Pertama, sulit untuk melakukan testing karena instance global sulit dimodifikasi atau diganti. Kedua, tidak fleksibel untuk diwariskan karena konstruktor bersifat privat. Ketiga, jika digunakan dalam lingkungan multithreading, perlu kehati-hatian agar tidak terjadi race condition.

Implementasi Program – Singleton Pattern
Pada file singleton.js, terdapat satu objek bernama SatuAja yang merupakan implementasi dari pattern Singleton. Di dalamnya, method ambilInstansi() memastikan hanya ada satu objek yang dibuat, yaitu objek yang memiliki properti nama bernilai "Ardhian".
Ketika method ini dipanggil beberapa kali dan disimpan dalam variabel berbeda, semuanya tetap mengarah pada objek yang sama, sesuai prinsip Singleton.
