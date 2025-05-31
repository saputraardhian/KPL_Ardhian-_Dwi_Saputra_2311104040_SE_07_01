class Calculator {
    static sumThreeNumbers(...numbers) {
        if (!numbers.every(num => typeof num === 'number')) {
            throw new Error('Semua input harus berupa angka.');
        }
        return numbers.reduce((total, num) => total + num, 0);
    }
}

console.log(`Hasil Penjumlahan: ${Calculator.sumThreeNumbers(15, 25, 60)}`);

class SimpleDatabase {
    constructor() {
        this.entries = [];
    }

    add(value) {
        this.entries.push({
            value,
            timestamp: new Date()
        });
    }

    printAll() {
        this.entries.forEach((entry, index) => {
            const formattedTime = entry.timestamp
                .toUTCString()
                .replace(" GMT", " AM")
                .replace(" UTC", " AM");

            console.log(
                `Data ${index + 1}: ${entry.value}, disimpan pada: ${formattedTime}`
            );
        });
    }
}

const db = new SimpleDatabase();
db.add(15);
db.add(25);
db.add(60);
db.printAll();

