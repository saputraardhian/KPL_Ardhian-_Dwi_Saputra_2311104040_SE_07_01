function testCariTandaBilangan() {
    console.assert(CariTandaBilangan(-10) === "Negatif", "Test Case 1 Gagal");
    console.assert(CariTandaBilangan(0) === "Nol", "Test Case 2 Gagal");
    console.assert(CariTandaBilangan(20) === "Positif", "Test Case 3 Gagal");
    console.log("Semua test selesai.");
}

testCariTandaBilangan(); 
