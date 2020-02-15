// Buatlah Function Yang Memiliki 1 Parameter.
// Berisikan Simbol ( * ) dan Simbol ( = ). 
// Ketika Function di Jalankan, dan Berisikan Angka.
// Maka Hasil Output Panjang dan Tingginya Sama.
// Baris Pertama Sampai Akhir Kombinasi Simbol Simbol ( * ) dan Simbol ( = ).
// Kecuali Baris Tengah Hanya Simbol ( * ).


// Function Declaration Yang Memiliki 1 Paramater.
function printSquare(size) {
    // Constanta Star Berisi Simbol (Spasi*Spasi) = ( * ).
    const star = ' * ';
    const equal = ' = ';

    // Jika Paramater Berisi String.
    if (typeof (size) === 'string') {
        return console.log("Paramater Harus Angka dan Ganjil!"); // Tampil Pada Console.
    }

    // Pengulangan for, di Mulai Dari Angka 1 Sampai Angka Yang di Isikan Pada Paramater size.
    for (var i = 1; i <= size; i++) {
        // (Step 1)
        // Jika Nilai size di Bagi 2 dan Di Tambah 1.
        // Berfungsi Untuk Menambil Nilai Tengah Pada Paramater Size.
        if (Math.floor(size / 2 + 1) === i) {
            // Simbol ( * ) di Cetak Sampai Angka Yang di Isikan Pada Paramater size.
            console.log(star.repeat(size)); // Tampil Pada Console!
        }
        // Kecuali Selain Itu
        else {
            // Kombinasi Simbol Simbol ( * ) dan Simbol ( = ).
            console.log(star + equal.repeat(size - 2) + star); // Tampil Pada Console!
        }
    }
    return size; // Mengembalikan Nilai size.
}

printSquare(5); // Menjalankan Function printSquare.
printSquare("5"); // Menjalankan Function printSquare.