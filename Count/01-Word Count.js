// Buatlah Function Yang Memiliki 1.
// Menghitung Kata Dalam Satu Kalimat.

// Function Declaration Yang Memiliki 1 Paramater.
function WordCount(Str) {
    // Jika Benar,
    // Paramater Str Berisikan String.
    if (typeof (Str) === 'string') {
        // leStr Berfungsi Untuk Menghitung Jumlah Kata Dalam Satu Kalimat.
        // Split.(" ") => Mencari Kata.
        let leStr = Str.split(" ").length;
        // reChar Berfungsi Hanya Untuk Mencari Sebuah Kata Yaitu Huruf Kecil Maupun Besar Saja.
        let reChar = Str.match(/\b[a-z]+\b/gi).length;

        console.log(reChar + "/" + leStr); // Tampil Pada Console
    }
    // Jika Salah,
    // Paramater Str Bukan String
    else {
        console.log("Paramater Harus String!"); // Tampil Pada Console.
    }
    return Str; // Mengembalikan Nilai Str.
}

WordCount("Ini Adalah Sebuah Kata"); // Menjalankan Function WordCount
WordCount("2 Pasang Sendal Hilang"); // Menjalankan Function WordCount
WordCount(33); // Menjalankan Function WordCount