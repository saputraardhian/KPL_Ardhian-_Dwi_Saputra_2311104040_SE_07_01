// Subject
class Berita {
  constructor() {
    this.observers = [];
    this.pesanTerbaru = "";
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify() {
    this.observers.forEach(observer => {
      observer.update(this.pesanTerbaru);
    });
  }

  tambahBerita(pesan) {
    this.pesanTerbaru = pesan;
    console.log(`Berita baru: "${pesan}"`);
    this.notify();
  }
}

// Observer
class Pengguna {
  constructor(nama) {
    this.nama = nama;
  }

  update(pesan) {
    console.log(`${this.nama} menerima notifikasi: ${pesan}`);
  }
}

// === Main Program ===
const portalBerita = new Berita();

const user1 = new Pengguna("Agung");
const user2 = new Pengguna("Rifki");

portalBerita.attach(user1);
portalBerita.attach(user2);

portalBerita.tambahBerita("Timnas Indonesia lolos ke final SEA Games!");
portalBerita.detach(user2);
portalBerita.tambahBerita("Gempa bumi terjadi di wilayah Bandung.");
