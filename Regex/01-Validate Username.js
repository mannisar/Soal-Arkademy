// buatlah function yang memiliki 1 Parameter.
// panjang username minimal 4 dan maksimal 10.
// di awali dan diakhiri 1 huruf ( x ) kecil.
// hanya berisi huruf besar.
// tidak boleh berisi huruf kecil.
// tidak boleh berisi angka.
// tidak boleh  berisi symbol.

// Function Declaration Yang Memiliki 1 Paramater.
function checkUsername(username) {
    // (Step 1) Cek Apakah Panjang Username Minimal 4 dan Maksimal 10.
    if (username.length < 4 || username.length > 10) {
        // Jika Salah, Tampil Pesan!
        // alert("Panjang Username Minimal 4 dan Maksimal 10!"); // Tampil Pada Popup.
        console.log("InValid! ", username); // Tampil Pada Console.
        console.log("Panjang Username Minimal 4 dan Maksimal 10!"); // Tampil Pada Console.
    } else {
        // Jika Benar, Selanjutnya
        // (Step 2) Cek Apakah di Awali 1 Huruf ( x ) Kecil.
        if (username[0] != "x" || username.match(/^[x]{2,8}[A-Z]{2,8}[x]$/)) {
            // Jika Salah, Tampil Pesan!
            // alert("Harus di Awali 1 Huruf ( x ) Kecil!"); // Tampil Pada Popup.
            console.log("InValid! ", username); // Tampil Pada Console.
            console.log("Harus di Awali 1 Huruf ( x ) Kecil!"); // Tampil Pada Console.
        } else {
            // Jika Benar, Selanjutnya
            // (Step 3) Cek Apakah di Akhiri 1 Huruf ( x ) Kecil.
            if (username.match(/^[x][A-Z]{2,8}$/) || username.match(/^[x][A-Z]{2,8}[x]{2,8}/)) {
                // Jika Salah, Tampil Pesan!
                // alert("Harus di Akhiri 1 Huruf ( x ) Kecil!"); // Tampil Pada Popup.
                console.log("InValid! ", username); // Tampil Pada Console.
                console.log("Harus di Akhiri 1 Huruf ( x ) Kecil!"); // Tampil Pada Console.
            } else {
                // Jika Benar, Selanjutnya
                // (Step 4) Cek Seluruh Kombinasi.
                if (username.match(/^[x][A-Z]{2,8}[x]$/)) {
                    // Jika Benar, Selesai!
                    console.log("Valid! ", username);
                } else {
                    // Jika Salah, Tampil Pesan!
                    // alert("Harus di Akhiri 1 Huruf ( x ) Kecil!"); // Tampil Pada Popup.
                    console.log("InValid! ", username); // Tampil Pada Console.
                    console.log("Hanya Boleh Berisi Huruf Besar! Tidak Boleh Kombinasi!"); // Tampil Pada Console.
                }
            }
        }
    }
    return username; // Mengembalikan Nilai username.
}

checkUsername('xMANNISARx'); // Menjalankan Function checkUsername.