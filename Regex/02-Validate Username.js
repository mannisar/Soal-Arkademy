// Buatlah Function Yang Memiliki 1 Paramater.
// Panjang Username Minimal 5 dan Maksimal 12.
// Harus di Awali Huruf Kecil.
// Tidak Boleh Ada Huruf Besar.
// Tidak Boleh Menggunakan Special Karakter Kecuali underscore ( _ ).

// Function Declaration Yang Memiliki 1 Paramater.
function checkUsername(username) {
    // letUser Menampung Panjang Karakter.
    let leUser = username.length;
    // Jika Salah,
    // Panjang Username Kurang Dari 5 dan Lebih Dari 12!
    if (leUser < 5 || leUser > 12) {
        console.log("Panjang Username Minimal 5 dan Maksimal 12!"); // Tampil Pada Console.
    }
    // Jika Benar, Selanjutnya
    else {
        // Jika Salah,
        // Tidak Boleh Ada Huruf Besar!
        if (username.match(/[A-Z]/g)) {
            console.log("Tidak Boleh Ada Huruf Besar!"); // Tampil Pada Console.
        }
        // Jika Benar, Selanjutnya
        else {
            // Jika Salah,
            // Tidak Boleh Menggunakan Special Karakter! Kecuali _
            if (username.match(/[|~`!@#$%^&*()+?.,<=>-]/g)) {
                console.log("Tidak Boleh Menggunakan Special Karakter Kecuali underscore ( _ )!"); // Tampil Pada Console.
            }
            // Jika Benar, Selanjutnya
            else {
                // Jika Benar,
                // Validasi Menggunakan Regex Kombinasi Huruf Besar dan Angka!
                if (username.match(/[a-z 0-9]/)) {
                    console.log("Valid! ", username); // Tampil Pada Console.
                }
                // Jika Salah
                else {
                    console.log("InValid! ", username); // Tampil Pada Console.
                }
            }
        }
    }
    return username; // Mengembalikan Nilai username.
}

checkUsername("mannisar_30"); // Menjalankan Function checkUsername.