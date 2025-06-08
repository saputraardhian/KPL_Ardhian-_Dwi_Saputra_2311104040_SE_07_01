const fs = require("fs");
const readline = require("readline");
const crypto = require("crypto");

const FILE_PATH = "akun_terdaftar.json";

// Hashing password dengan SHA-256
function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

// Validasi input
function validateCredentials(username, password) {
  const allowedChars = /^[A-Za-z]+$/;
  const specialChars = /[!@#$%^&*]/;

  if (!allowedChars.test(username)) {
    return "Username hanya boleh mengandung huruf alfabet.";
  }

  if (password.length < 8 || password.length > 20) {
    return "Password harus antara 8 hingga 20 karakter.";
  }

  if (!specialChars.test(password)) {
    return "Password wajib memiliki minimal satu simbol khusus (!@#$%^&*).";
  }

  if (password.toLowerCase().includes(username.toLowerCase())) {
    return "Password tidak boleh mengandung username.";
  }

  return null;
}

// Ambil semua akun yang tersimpan
function getStoredAccounts() {
  if (!fs.existsSync(FILE_PATH)) return [];
  return JSON.parse(fs.readFileSync(FILE_PATH));
}

// Simpan akun baru
function saveAccount(username, hashedPassword) {
  const accounts = getStoredAccounts();
  const alreadyExists = accounts.some(acc => acc.user === username);

  if (alreadyExists) {
    console.log("Username sudah terdaftar, coba yang lain.");
    return false;
  }

  accounts.push({ user: username, pass: hashedPassword });
  fs.writeFileSync(FILE_PATH, JSON.stringify(accounts, null, 2));
  return true;
}

// Proses verifikasi login
function authenticate(username, password) {
  const accounts = getStoredAccounts();
  const hash = hashPassword(password);
  return accounts.find(acc => acc.user === username && acc.pass === hash);
}

// CLI Setup
const cli = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menu awal
function showMenu() {
  console.log("\n=== Sistem Autentikasi CLI ===");
  console.log("1. Register");
  console.log("2. Login");
  cli.question("Pilih (1/2): ", (choice) => {
    if (choice === "1") {
      registerUser();
    } else if (choice === "2") {
      loginUser();
    } else {
      console.log("Pilihan tidak tersedia.");
      cli.close();
    }
  });
}

// Proses registrasi
function registerUser() {
  cli.question("Masukkan username: ", (uname) => {
    cli.question("Masukkan password: ", (pwd) => {
      const errorMsg = validateCredentials(uname, pwd);
      if (errorMsg) {
        console.log("Gagal daftar: " + errorMsg);
        cli.close();
        return;
      }

      const hash = hashPassword(pwd);
      if (saveAccount(uname, hash)) {
        console.log("Registrasi berhasil!");
      }
      cli.close();
    });
  });
}

// Proses login
function loginUser() {
  cli.question("Username: ", (uname) => {
    cli.question("Password: ", (pwd) => {
      if (authenticate(uname, pwd)) {
        console.log("Berhasil login. Selamat datang, " + uname + "!");
      } else {
        console.log("Username atau password salah.");
      }
      cli.close();
    });
  });
}

// Jalankan program
showMenu();
