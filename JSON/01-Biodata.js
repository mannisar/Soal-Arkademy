// Buatlah Function Yang Memiliki 2 Paramater.
// name(String) & age(Number).
// Lalu Ada address(String), hobbies(Array), is_married(Boolean), list_School(Array Of Obj), skills(Array Of Obj), dan interest_coding(Boolean).
// me-Return Value Harus Berformart JSON.

// Function Declaration Yang Memiliki 2 Paramater.
function biodata(name, age) {
    // let data
    let data = {
        name: name,
        age: age,
        address: "Bogor - Indonesia",
        hobbies: ["Playing Games Online", "Swimming", "Drink Coffe"],
        is_married: false,
        list_school: [{
            schoolname: "SMK AL-BAHRI",
            year_in: 2016,
            year_out: 2018,
            major: "RPL"
        }, {
            unviersity: "BUYA HAMKA",
            year_in: 2019,
            year_out: null,
            major: "Teknik Informatika"
        }],
        skills: [{
            skill_name: "JavaScript",
            level: "beginner"
        }, {
            skill_name: "PHP",
            level: "advanced"
        }, {
            skill_name: "JAVA",
            level: "advanced"
        }],
        interest_coding: true
    }
    return JSON.stringify(data); // Mengembalikan Nilai data.
}

console.log(biodata("Akhmad Salman Yassar", 18)); // Menjalankan Function biodata.