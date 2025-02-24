//if
const a = 5
const b = 4
const c = 7

if (a > b) {
    console.log('a is greater than b')
}

if (a % 2 == 0) {
    console.log('habis dibagi 2')
}else if  (b % 2 == 0) {
    console.log('b habis dibagi 2')
}else if (c % 2 == 0) {
    console.log('c habis dibagi 2')
}else {
    console.log('Semua value tidak habis dibagi 2')
}

//switch
let pilihan = 2

switch(pilihan){
    case 1:
        console.log('ini pilihan 1')
        break;
    case 2:
        console.log('ini pilihan 2')
        break;
    case 3:
        console.log('ini pilihan 3')
        break;
    default:
        console.log('pilihan tidak ada')
}