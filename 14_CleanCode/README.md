Kode ini terdiri dari dua kelas utama: `Calculator` dan `SimpleDatabase`. Kelas `Calculator` memiliki satu method statis bernama `sumThreeNumbers` yang digunakan untuk menjumlahkan tiga angka atau lebih. Method ini menerima parameter dalam bentuk *spread* (`...numbers`), melakukan validasi agar semua input berupa angka, lalu menghitung totalnya menggunakan fungsi `reduce`. Jika ada input yang bukan angka, maka akan dilemparkan error.

Sementara itu, kelas `SimpleDatabase` dirancang untuk menyimpan nilai-nilai sederhana bersama dengan informasi waktu penyimpanan (timestamp). Setiap kali method `add()` dipanggil, data akan disimpan ke dalam array `entries` dalam bentuk objek yang memuat nilai dan waktu saat data ditambahkan. Method `printAll()` akan mencetak semua data yang tersimpan lengkap dengan timestamp yang diformat dalam bentuk string waktu UTC, dengan sedikit modifikasi agar tampak lebih ramah dibaca (misalnya mengganti "GMT" atau "UTC" menjadi "AM").

Kode ini bisa dijalankan langsung menggunakan Node.js, dan cocok digunakan sebagai contoh untuk memahami dasar-dasar penggunaan class, method statis, array, dan manajemen waktu di JavaScript.

OUTPUT :

Data 1: 15, disimpan pada: Tue, 04 Jun 2025 13:10:45 AM

Data 2: 25, disimpan pada: Tue, 04 Jun 2025 13:10:45 AM

Data 3: 60, disimpan pada: Tue, 04 Jun 2025 13:10:45 AM
