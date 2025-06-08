1. Native Parsing (native-parsing.js)
Fungsi: Parsing data menggunakan modul bawaan Node.js

Fitur:
•	Import dua modul: querystring untuk mengurai query string dan url untuk memecah URL

•	Parsing komponen URL (hostname, query parameters)

•	Konversi string JSON {"name":"Revan","age":21} menjadi objek JavaScript menggunakan JSON.parse

•	Parsing query string name=Revan&age=21 menjadi objek key-value

Contoh URL: http://localhost:3000?search=test

•	Menggunakan url.parse() untuk memecah URL

•	Menampilkan bagian query dengan ({ search: "test" })

________________________________________

2. AST Parsing (ast-parsing.js)
Fungsi: Membaca dan menguraikan kode JavaScript menggunakan Abstract Syntax Tree (AST)
Teknologi: Library acorn

Proses:

•	AST adalah representasi struktur kode yang memudahkan analisis dan manipulasi programatik

•	Menggunakan fungsi greet(name) sebagai contoh kode JavaScript

•	Parsing dengan acorn.parse() menghasilkan struktur AST dalam format JSON

•	Berguna untuk memahami struktur internal kode secara detail

________________________________________

3. CSV Parsing (csv-parsing.js)
Fungsi: Membaca dan memproses file CSV menggunakan modul csv-parser

Proses:

•	Menggunakan fs untuk membaca file data.csv secara streaming

•	Data CSV dikonversi menjadi objek JavaScript dan ditampilkan ke konsol

•	Setelah parsing selesai, menampilkan pesan "CSV parsing complete"

Kegunaan: Ideal untuk membaca data tabular dari file spreadsheet

________________________________________

4. HTML Parsing (html-parsing.js)
   
Fungsi: Parsing HTML menggunakan library Cheerio (jQuery-like untuk Node.js)

Fitur:
•	Mirip dengan jQuery untuk manipulasi DOM di server-side

•	Parsing string HTML dan mengekstrak teks dari elemen menggunakan selector

•	Loop melalui setiap elemen dalam daftar HTML

•	Menampilkan isi teks setiap elemen satu per satu


Hasil OUTPUT :
![image](https://github.com/user-attachments/assets/3ef39714-c517-47c7-8df0-a27b597c1e0a)

![image](https://github.com/user-attachments/assets/3b33d7d4-395c-4929-af25-5674704be7a9)

![image](https://github.com/user-attachments/assets/3db4e05e-7ae4-4b7d-97b7-a4ce9d5e9c99)
