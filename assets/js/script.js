// Array of countries

const countries = [
{
    name: "Austria" ,
    capital: "Vienna" ,
    language: ["German"],
    population: 8959000
},
{
    name: "Belgium" ,
    capital: "Brussels" ,
    language: ["German", "Dutch", "French"],
    population: 11686000
},
{   
    name: "Switzerland",
    languages: ["German", "French", "Italian", "Romansh"],
    capital: "Bern",
    population: 8654622
},
{
    name: "Bulgaria",
    capital: "Sofia",
    language: ["Bulgarian"],
    population: 6688000
},
{
    name: "Croatia",
    capital: "Zagreb",
    language: ["Croatian"],
    population: 4008000
},
{
    name: "Cyprus",
    capital: "Nicosia",
    language: ["Greek", "Turkish"],
    population: 1244000
},
{
    name: "Czechia",
    capital: "Prague",
    language: ["Czech"],
    population: 10495000
},
{
    name: "Denmark",
    capital: "Copenhagen",
    language: ["Danish"],
    population: 5911000
},
{
    name: "Estonia",
    capital: "Tallinn",
    language: ["Estonian"],
    population: 1323000
},
{
    name: "Finland",
    capital: "Helsinki",
    language: ["Finnish"],
    population: 5545000
},
{
    name: "France",
    capital: "Paris",
    language: ["French"],
    population: 64750000
},
{
    name: "Germany",
    capital: "Berlin",
    language: ["German"],
    population: 83294000
},
{
    name: "Greece",
    capital: "Athens",
    language: ["Greek"],
    population: 10341000
},
{
    name: "Hungary",
    capital: "Budapest",
    language: ["Hungarian"],
    population: 10156000
},
{
    name: "Ireland",
    capital: "Dublin",
    language: ["Irish", "English"],
    population: 5057000
},
{
    name: "Italy",
    capital: "Rome",
    language: ["Italian"],
    population: 58870000
},
{
    name: "Latvia",
    capital: "Riga",
    language: ["Latvian"],
    population: 1830000
},
{
    name: "Lithuania",
    capital: "Vilnius",
    language: ["Lithuanian"],
    population: 2718000
},
{
    name: "Luxembourg",
    capital: "Luxembourg",
    language: ["Luxembourgish", "French", "German"],
    population: 654000
},
{
    name: "Malta",
    capital: "Valletta",
    language: ["Maltese"],
    population: 535000 
},
{
    name: "Netherlands",
    capital: "Amsterdam",
    language: ["Dutch"],
    population: 17618000
},
{
    name: "Poland",
    capital: "Warsaw",
    language: ["Polish"],
    population: 41026000
},
{
    name: "Portugal",
    capital: "Lisbon",
    language: ["Portuguese"],
    population: 10247000
},
{
    name: "Romania",
    capital: "Bucharest",
    language: ["Romanian"],
    population: 19890000
},
{
    name: "Slovakia",
    capital: "Bratislava",
    language: ["Slovak"],
    population: 5795000
},
{
    name: "Slovenia",
    capital: "Ljubljana",
    language: ["Slovenian"],
    population: 2120000
},
{
    name: "Spain",
    capital: "Madrid",
    language: ["Spanish"],
    population: 47500000
},
{
    name: "Sweden",
    capital: "Stockholm",
    language: ["Swedish"],
    population: 10600000
},
{
    name: "Russia",
    capital: "Moscow",
    language: ["Russian"],
    population: 145000000
},
{
    name: "England",
    capital: "London",
    language: ["English"],
    population: 56000000
},
{
    name: "Scotland",
    capital: "Edinburgh",
    language: ["English", "Scots", "Scottish", "Scottish Gaelic"],
    population: 5454000
},
{
    name: "Wales",
    capital: "Cardiff",
    language: ["Welsh", "English"],
    population: 3100000
}
];

// Declare at higher scope so can be accessed by all functions
let randomCountry;

// Start running game after DOM has loaded, add event listeners to buttons - (taken from Love Maths)

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let game = this.getAttribute("data-type");
                runGame(game);
            }
        });
    }

    runGame(game);

});

// sketch functions (Love Maths)

function runGame (game) {
    
    // generate random country from countries array
    let randomIndex = Math.floor(Math.random() * countries.length);
    randomCountry = countries[randomIndex].name;

    if (game === "start") {
        displayCountry(randomCountry);
    }

}

function correctAnswer () {

    // Find country object from the countries array (W3 Schools find method)
    let country = countries.find(country => country.name === randomCountry);

    return country.capital;

}

function checkAnswer () {

    // Check answer method taken from Love Maths
    let userAnswer = document.getElementById("box1").value.trim();
    let correctCapital = correctAnswer();
    
    if (userAnswer.toLowerCase() === correctCapital.toLowerCase()) {
        alert("Correct")
    } else {
        alert("incorrect. the correct answer was" + correctCapital);
    }

}

function checkAnswerLanguage () {

}

function checkAnswerPopulation () {

}

function displayCountry (randomCountry) {

    document.getElementById("country").textContent = randomCountry;

}