// Buatlah Function Yang Memiliki 2 Paramater.
// Merubah Kata Yang Memiliki Huruf Hidup/Vokal (aiueo).
// Menjadi Huruf (i).
// Ketika Function di Jalankan, Isikan Paramater Pertama Sebuah Kata.
// Lalu Isikan Paramater Kedua Huruf (i).

// Function Declaration Yang Memiliki 2 Paramater.
function substituteVowels(string, replace) {
    // Variable reVocal Mempunyai Nilai Regex => (aiueo)
    // Mempunyai (gi) Yaitu Global dan Inlinie.
    // Global Berfungsi Mengulangi dna Mencari Semua Kata Yang Cocok.
    // (i) Inline Berfungsi Jika Huruf Kapital dan Huruf Kecil di Anggap Sama. Contoh: Salman = salman.
    var reVocal = /[aiueo]/gi;
    // Variable reString Untuk Mereplace Huruf Paramater Pertama Dengan Paramater Kedua.
    var reString = string.replace(reVocal, replace);
    // (Step 1) Jika Huruf (aiueo) di Temukan.
    if (reVocal.test(string)) {
        // Jika Benar, Tampil Pesan!
        // alert(reString, "\n" + "Terdapat Huruf Vokal!"); // Tampil Pada Popup
        console.log(reString, "\n" + "Terdapat Huruf Vokal!"); // Tampil Pada Console.
    } else {
        // Jika Salah, Tampil Pesan!
        // alert(reString, "\n" + "Tidak Ada Huruf Vokal!"); // Tampil Pada Popup
        console.log(reString, "\n" + "Tidak Ada Huruf Vokal (aiueo)!"); // Tampil Pada Console.
    }
    return reString; // Mengembalikan Nilai reString.
}

substituteVowels("Orang jahat adalah orang baik yang tersakiti", "i"); // Menjalankan Function substituteVowels.
substituteVowels("try fly fry cry", "x"); // Menjalankan Function substituteVowels.