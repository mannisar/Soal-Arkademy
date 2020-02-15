// Buatlah Function Yang Memiliki 1 Paramater.
// Ketika Function di Jalankan dan Paramater angka Berisi Nilai.
// Maka Hitung Berapa Kali Mereka Berjabat Tangan


// Function Declaration Yang Memiliki 1 Paramater.
function handshake(angka) {
    // Variable result Menampung Nilai Parameter Angka, Ketika di Isi Nilai.
    var result = 0;
    // Pengulangan for dari 0 Sampai Kurang dari Nilai angka Yang Di Inginkan.
    // i++ Artinya Setiap Pengulangan Akan di Tambah Nilai +1
    for (var i = result; i < angka; i++) {
        // 0 = 0 + 1 <= 1
        // 1 = 1 + 2 <= 3
        // 3 = 3 + 3 <= 6
        // 6 = 6 + 4 <= 10 
        // 10 = 10 + 5 <= 15 BERHENTI! Karena Pengulangan Sampai 5x!

        // Menampung Nilai Variable i
        result = result + i;
    }
    console.log('result: ' + result);
    return angka; // Mengembalikan Nilai angka.
}

handshake(6); // Menjalankan Function handshake