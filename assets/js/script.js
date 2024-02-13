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
    language: ["German", "French", "Italian", "Romansh"],
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

    // Find capital of the country object
    let correctCity = country.capital;

    // Find languages of country object
    let correctLanguages = country.language; 

    // Find population of the country object
    let population = country.population;

    // Round population to nearest ten thousand and display as decimal
    let roundedPopulation = Math.round(population / 10000) / 100;
    
    return [correctCity, correctLanguages, roundedPopulation];

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

function checkAnswerPopulation() {

    // Youtube #SmartCode Javascript tutorials
    // Select all buttons with 'population class'
    let allButtons = document.querySelectorAll(".population");

    // Create variable to store the value of chosen button
    let chosenButton = 0;  
    // register click event for each button
    allButtons.forEach(bt =>{
        bt.addEventListener('click', (e) =>{
            // When a button is clicked, set chosenButton to its text content
            chosenButton =e.target.innerHTML;
            console.log(chosenButton);
        })
    });
}


function displayCountry (randomCountry) {
    // Get rounded population from correctAnswer array
    let roundedPopulation = correctAnswer()[2];
    // Add and Subtract 10% from population for multiple choice option
    let roundedPopulationMinus = (roundedPopulation * 0.9).toFixed(2); // toFixed() logic from BaseDash
    let roundedPopulationPlus = (roundedPopulation * 1.1).toFixed(2); // toFixed() logic from BaseDash

    // Randomly shuffle the values
    let populations = [roundedPopulation, roundedPopulationMinus, roundedPopulationPlus];
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