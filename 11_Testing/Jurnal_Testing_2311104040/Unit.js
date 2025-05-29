function testCariNilaiPangkat() {
    console.assert(hitungPangkat(5, 0) === 1, "Test Case 1 Failed");       // 5^0 = 1
    console.assert(hitungPangkat(3, -2) === -1, "Test Case 2 Failed");     // pangkat negatif = error
    console.assert(hitungPangkat(150, 2) === -2, "Test Case 3 Failed");    // bilangan > 100 = error
    console.assert(hitungPangkat(4, 15) === -2, "Test Case 4 Failed");     // pangkat > 10 = error
    console.assert(hitungPangkat(3, 4) === 81, "Test Case 5 Failed");      // 3^4 = 81
    console.assert(hitungPangkat(9, 9) === 387420489, "Test Case 6 Failed"); // normal case

    console.log("All test cases completed.");
}

testCariNilaiPangkat();