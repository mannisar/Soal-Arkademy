// Buatlag Function Yang Memiliki 1 Paramater.
// Panjang Password 7 Karakter.
// Kombinasi 1 Angka, 1 Simbol, dan 5 Huruf Besar.

// Function Declaration Yang Memiliki 1 Paramater.
function checkPassword(password) {
    // Jika Panjang Password 7 Karakter . Harus Tepat!
    if (password.length == 7) {
        // Jika Password Tidak Huruf Besar.
        if (!password.match(/[A-Z]/)) {
            console.log("Harus 5 Huruf Besar!"); // Tampil Pada Console.
        }
        // Jika Benar, Selanjutnya
        else {
            // Jika Password Tidak Ada Angka. Minimal 1!
            if (!password.match(/(?=.*[0-9])[0-9]/)) {
                console.log("Minimal 1 Angka!"); // Tampil Pada Console.
            }
            // Jika Benar, Selanjutnya
            else {
                // Jika Password Tidak Ada Simbol. Minimal 1!
                if (!password.match(/(?=.*\W)[\W]/)) {
                    console.log("Minimal 1 Simbol!"); // Tampil Pada Console.
                }
                // Jika Benar!
                else {
                    console.log("Valid! ", password); // Tampil Pada Console.
                }
            }
        }
    }
    // Jika Panjang Password Tidak Tepat!
    else {
        console.log("Panjang Harus 7 Karakter!"); // TAmpil Pada Console.
        console.log("Kombinasi 1 Angka, 1 Simbol, dan 5 Huruf Besar!"); // TAmpil Pada Console.
    }
    return password; // Mengembalikan Nilai password.
}

checkPassword("M@N1SAR"); // Menjalankan Function checkPassword.