class VideoSayaTube {
    constructor(judul) {
      this.id = Math.floor(10000 + Math.random() * 90000);
      this.judul = judul;
      this.jumlahTayang = 0;
    }
  
    tambahJumlahTayang(jumlah) {
      if (jumlah > 0) {
        this.jumlahTayang += jumlah;
      }
    }
  
    cetakDetailVideo() {
      console.log(`ID: ${this.id}`);
      console.log(`Judul: ${this.judul}`);
      console.log(`Jumlah Tayang: ${this.jumlahTayang}`);
    }
  }
  
  class PenggunaSayaTube {
    constructor(namaPengguna) {
      this.id = Math.floor(10000 + Math.random() * 90000);
      this.namaPengguna = namaPengguna;
      this.videoDiunggah = [];
    }
  
    tambahVideo(video) {
      this.videoDiunggah.push(video);
    }
  
    hitungTotalTayang() {
      return this.videoDiunggah.reduce((total, video) => total + video.jumlahTayang, 0);
    }
  
    cetakSemuaVideo() {
      console.log(`Pengguna: ${this.namaPengguna}`);
      this.videoDiunggah.forEach((video, index) => {
        console.log(`Video ${index + 1} judul: ${video.judul}`);
      });
    }
  }
  
  const pengguna = new PenggunaSayaTube("Ardhian Dwi Saputra");
  
  const daftarFilm = [
    "Ulasan Film Oppenheimer oleh Ardhian Dwi Saputra",
    "Ulasan Film Interstellar oleh Ardhian Dwi Saputra",
    "Ulasan Film Inception oleh Ardhian Dwi Saputra",
    "Ulasan Film The Batman oleh Ardhian Dwi Saputra",
    "Ulasan Film The Dark Knight oleh Ardhian Dwi Saputra",
    "Ulasan Film Dune oleh Ardhian Dwi Saputra",
    "Ulasan Film Tenet oleh Ardhian Dwi Saputra",
    "Ulasan Film John Wick 4 oleh Ardhian Dwi Saputra",
    "Ulasan Film Parasite oleh Ardhian Dwi Saputra",
    "Ulasan Film Everything Everywhere All At Once oleh Ardhian Dwi Saputra",
  ];
  
  daftarFilm.forEach((judul) => {
    const video = new VideoSayaTube(judul);
    pengguna.tambahVideo(video);
    video.tambahJumlahTayang(100);
  });
  
  pengguna.cetakSemuaVideo();
  