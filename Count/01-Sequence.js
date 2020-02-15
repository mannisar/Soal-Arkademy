function sequence(x, y) {
    // Jika Paramater x Lebih Kecil Dari Y. Salah!
    if (x < y) {
        console.log("false"); // Tampil Pada Console.
    }
    // Jika Paramater x Lebih Besar Dari Y. Benar!
    else {
        let number = 29;
        // let Ax = [y];
        // let Ay = y;
        // let sequence = [Ax, Ay];

        for (let i = 1; i < number; i++) {
            var Ax = [];

            Ax[i] = y;
            Ax[i] = Ax[i] *= Ax[i] % x;
            // Ax[i] = Ax[i] * Ax[i] % x;
            // Ax[i] = y * y % (x + i);

            console.log(Ax);
        }

        // return Ax[number];
    }
}

sequence(5, 3);

/*var fib = [0, 1];
for (var i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    console.log(fib);
} 

function fibonacci(number) {
    let sequence = [5, 3];

    for (let i = 2; i < number; i++) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    console.log(sequence);
    return sequence[number - 1];
}

fibonacci(29); */