import process from "process";
import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// anjaiicekcek
input.question("Siapa nama kamu: ", (nama) => {
  input.question("Jurusan kamu: ", (jurusan) => {
    input.question("Universitas kamu: ", (universitas) => {
      input.question("Umur kamu: ", (umur) => {
        console.info(`\n========================`);
        console.info(`Nama        : ${nama}`);
        console.info(`Jurusan     : ${jurusan}`);
        console.info(`Universitas : ${universitas}`);
        console.info(`Umur        : ${umur} tahun`);

        input.close();
      });
    });
  });
});
