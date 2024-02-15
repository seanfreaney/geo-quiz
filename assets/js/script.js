// Array of countries

const countries = [
{
    name: "Austria" ,
    capital: "Vienna" ,
    language: ["German"],
    population: 8.96
},
{
    name: "Belgium" ,
    capital: "Brussels" ,
    language: ["German", "Dutch", "French"],
    population: 11.69
},
{   
    name: "Switzerland", 
    language: ["German", "French", "Italian", "Romansh"],
    capital: "Bern",
    population: 8.65
},
{
    name: "Bulgaria",
    capital: "Sofia",
    language: ["Bulgarian"],
    population: 6.69
},
{
    name: "Croatia",
    capital: "Zagreb",
    language: ["Croatian"],
    population: 4.01
},
{
    name: "Cyprus",
    capital: "Nicosia",
    language: ["Greek", "Turkish"],
    population: 1.24
},
{
    name: "Czechia",
    capital: "Prague",
    language: ["Czech"],
    population: 10.50
},
{
    name: "Denmark",
    capital: "Copenhagen",
    language: ["Danish"],
    population: 5.91
},
{
    name: "Estonia",
    capital: "Tallinn",
    language: ["Estonian"],
    population: 1.32
},
{
    name: "Finland",
    capital: "Helsinki",
    language: ["Finnish"],
    population: 5.55
},
{
    name: "France",
    capital: "Paris",
    language: ["French"],
    population: 64.75
},
{
    name: "Germany",
    capital: "Berlin",
    language: ["German"],
    population: 83.30
},
{
    name: "Greece",
    capital: "Athens",
    language: ["Greek"],
    population: 10.34
},
{
    name: "Hungary",
    capital: "Budapest",
    language: ["Hungarian"],
    population: 10.16
},
{
    name: "Ireland",
    capital: "Dublin",
    language: ["Irish", "English"],
    population: 5.06
},
{
    name: "Italy",
    capital: "Rome",
    language: ["Italian"],
    population: 58.87
},
{
    name: "Latvia",
    capital: "Riga",
    language: ["Latvian"],
    population: 1.83
},
{
    name: "Lithuania",
    capital: "Vilnius",
    language: ["Lithuanian"],
    population: 2.72
},
{
    name: "Luxembourg",
    capital: "Luxembourg",
    language: ["Luxembourgish", "French", "German"],
    population: 0.654
},
{
    name: "Malta",
    capital: "Valletta",
    language: ["Maltese"],
    population: 0.535
},
{
    name: "Netherlands",
    capital: "Amsterdam",
    language: ["Dutch"],
    population: 17.62
},
{
    name: "Poland",
    capital: "Warsaw",
    language: ["Polish"],
    population: 37.75
},
{
    name: "Portugal",
    capital: "Lisbon",
    language: ["Portuguese"],
    population: 10.25
},
{
    name: "Romania",
    capital: "Bucharest",
    language: ["Romanian"],
    population: 19.90
},
{
    name: "Slovakia",
    capital: "Bratislava",
    language: ["Slovak"],
    population: 5.47
},
{
    name: "Slovenia",
    capital: "Ljubljana",
    language: ["Slovenian"],
    population: 2.12
},
{
    name: "Spain",
    capital: "Madrid",
    language: ["Spanish"],
    population: 47.5
},
{
    name: "Sweden",
    capital: "Stockholm",
    language: ["Swedish"],
    population: 10.6
},
{
    name: "Russia",
    capital: "Moscow",
    language: ["Russian"],
    population: 145.000000
},
{
    name: "England",
    capital: "London",
    language: ["English"],
    population: 56.000000
},
{
    name: "Scotland",
    capital: "Edinburgh",
    language: ["English", "Scots", "Scottish", "Scottish Gaelic"],
    population: 5.45
},
{
    name: "Wales",
    capital: "Cardiff",
    language: ["Welsh", "English"],
    population: 3.100000
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
                checkAnswerPopulation();
            } else {
                let game = this.getAttribute("data-type");
                runGame(game);
            }
        });
    }
});

// sketch functions (Love Maths)

function runGame (game) {
    
    // generate random country from countries array
    let randomIndex = Math.floor(Math.random() * countries.length);
    randomCountry = countries[randomIndex].name;

    if (game === "start") {
        displayCountry(randomCountry);
        correctAnswer(); // Call correctAnswer after setting randomCountry
    }

}

function correctAnswer () {

    // Find country object from the countries array (W3 Schools find method)
    let country = countries.find(country => country.name === randomCountry);

    // Find capital of the country object
    let correctCapital = country.capital;

    // Find languages of country object
    let correctLanguages = country.language; 

    // Find population of the country object
    let population = country.population;

    // Round population to nearest ten thousand and display as decimal
    // let roundedPopulation = Math.round(population / 10000) / 100;
    
    return [correctCapital, correctLanguages, population];

}

function checkAnswer () {

    // Check answer method taken from Love Maths
    // Take values from input elements and trim whitespace
    let userAnswerCity = document.getElementById("box1").value.trim();
    let userAnswerLanguage = document.getElementById("box2").value.trim();

    // Call correctAnswer to get correct capital and languages
    let [correctCapital, correctLanguages] = correctAnswer(); // Array destructuring MDN web docs

    // Check capital city answer
    if (userAnswerCity.toLowerCase() === correctCapital.toLowerCase()) {
        alert("Correct city")
    } else {
        alert("Incorrect. The correct city was " + correctCapital);
    }

    // Check language answer - allow for  (W3 Schools find method)
    let languageMatch = correctLanguages.find(language => language.toLowerCase() === userAnswerLanguage.toLowerCase());
    if (languageMatch) {
        alert("Correct language!");
    } else {
        alert("Incorrect language. The correct language(s) is/are: " + correctLanguages.join(", ")); // note here
    }
}

function checkAnswerPopulation(population) {

    // Youtube #SmartCode Javascript tutorials
    // Select all buttons with 'population class'
    let allButtons = document.querySelectorAll(".population");

    // register click event for each button
    allButtons.forEach(bt =>{
        bt.addEventListener('click', (e) =>{
            // When a button is clicked, check value is equal to population
            let chosenButton = parseFloat(e.target.innerHTML); // Parse ChosenButton value to float for comparison (Flexiple.com)
            console.log("Chosen Button value:", chosenButton); // this function only works when I log this value to the console
            console.log(population); // log value to console to compare values in attempt to debug
            if (chosenButton === population) {
                alert("Correct Population!")
            } else {
                alert("Incorrect population. The correct population is " + population);
            }
        });
    });
}


function displayCountry (randomCountry) {
    // Get population from correctAnswer array
    let population = correctAnswer()[2];
    // Add and Subtract 10% from population for multiple choice option
    let populationMinus = (population * 0.9).toFixed(2); // toFixed() logic from BaseDash
    let populationPlus = (population * 1.1).toFixed(2); // toFixed() logic from BaseDash

    // Randomly shuffle the values
    let populations = [population, populationMinus, populationPlus];
    populations = shuffle(populations);

    // Display randomCountry name and population options
    document.getElementById("country").textContent = randomCountry;
    document.getElementById("radio-pop").textContent = populations[0].toString();
    document.getElementById("radio-pop1").textContent = populations[1].toString();
    document.getElementById("radio-pop2").textContent = populations[2].toString();
}

// Function to shuffle array elements - Fisher-Yates sorting Algorithim (freeCodeCamp)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}