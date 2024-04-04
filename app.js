//Variables
const countryCards = document.querySelectorAll(".country-card");
const modeToggle = document.getElementById("dark-mode-btn");
const body = document.body;
const contentCards = document.querySelectorAll(".card-content");
const navs = document.querySelectorAll("#nav");


//Fetch data from the data.json file
async function fetchData() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        // Loop through each country card
        countryCards.forEach(countryCard => {
            // Generate a random index
            const randomIndex = Math.floor(Math.random() * data.length);

            // Select a random country
            const randomCountry = data[randomIndex];

            // Create flag image element
            const flagImg = document.createElement('img');
            flagImg.src = randomCountry.flags.svg;
            flagImg.alt = randomCountry.name; // Set alt text for accessibility
            countryCard.querySelector(".img-container").appendChild(flagImg).classList.add('img');

            // Display country information
            countryCard.querySelector(".country-name").textContent = randomCountry.name;
            countryCard.querySelector(".region").textContent = `Region: ${randomCountry.region}`;
            countryCard.querySelector(".capital").textContent = `Capital: ${randomCountry.capital}`;
            countryCard.querySelector(".population").textContent = `Population: ${randomCountry.population.toLocaleString()}`; // Format population with commas
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


//Event listeners

//The event listener that fetches the data once the page has loaded
document.addEventListener('DOMContentLoaded', ()=>{
    fetchData();
})


//The event listener that carries out the dark mode toggle operation
modeToggle.addEventListener("click",()=>{
    //Applies the darkmode style to the body
    body.classList.toggle("dark-mode");

    //Applies the dark-mode-element style to the toggle button
    modeToggle.classList.toggle("dark-mode-element");

    //iterates through the content of the country card and applies the dark-mode-element style class
    contentCards.forEach(card => {
        card.classList.toggle("dark-mode-element");
    });

        //iterates through the html tags with id="nav" and applies the dark-mode-element style class
    navs.forEach(nav => {
        nav.classList.toggle("dark-mode-element");
    });
})


