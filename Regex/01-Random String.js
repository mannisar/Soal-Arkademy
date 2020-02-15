// Buatlah Function Yang Memiliki 1 Paramater.
// Ketika Function di Isikan String.
// Maka String Akan Mengacak dan Tidak Berurut.

// Function Declaration Yang Memiliki 1 Paramater.
function randomize(string) {
    var string = string.split("");
    var leString = string.length;

    // Pengulangan for
    for (var i = leString; i > 0; i--) {
        // Variable reString Mengacak String
        var raString = Math.floor(Math.random() * i);
        var tmpString = string[i];
        string[i] = string[raString];
        string[raString] = tmpString;
    }
    return string.join(""); // Mengembalikan Nilai string dengan join.
}

console.log(randomize("Salman")); // Menjalankan Function randomize.