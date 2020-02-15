// Buatlah Function Yang Memiliki 1 Parameter.
// Berisikan Simbol ( * ).
// Ketika Function di Jalankan, dan Berisikan Angka.
// Maka Hasil Output Panjang dan Tingginya Sama.
// Hanya Baris Awal dan Akhir Saja.
// Baris Selanjutnya Tidak Boleh Ada Output ( * ).


// Function Declaration Yang Memiliki 1 Paramater.
function printSquare(size) {
    // Constanta Star Berisi Simbol (Spasi*Spasi) = ( * ).
    const star = ' * ';
    // Pengulangan for, di Mulai Dari Angka 1 Sampai Angka Yang di Isikan Pada Paramater size.
    for (var i = 1; i <= size; i++) {
        // (Step 1)
        // Jika Nilai size di Bagi size = 1, Baris Awal! Selanjutnya 
        if (Math.floor(size / size) === i) {
            // Simbol ( * ) di Cetak Sampai Angka Yang di Isikan Pada Paramater size.
            console.log(star.repeat(size)); // Tampil Pada Console!
        }
        // Kecuali Jika Nilai size, Baris Akhir! Selanjutnya
        else if (Math.floor(size) === i) {
            // Simbol ( * ) di Cetak Sampai Angka Yang di Isikan Pada Paramater size.
            console.log(star.repeat(size));
        }
        // Kecuali Baris Awal dan Akhir! Selanjutnya
        else {
            // Simbol ( * ) di Cetak Sampai Angka Yang di Isikan Pada Paramater size.
            // "   " => Yaitu Spasi 3x Sesuai Paramater size.
            console.log(star + "   ".repeat(size - 2) + star);
        }
    }
    return size; // Mengembalikan Nilai size.
}

printSquare(7); // Menjalankan Function printSquare.