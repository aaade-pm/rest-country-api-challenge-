//Variables
const countryCards = document.querySelectorAll(".country-card");
const modeToggle = document.getElementById("dark-mode-btn");
const body = document.body;
const contentCards = document.querySelectorAll(".card-content");
const filterOptionButtons = document.querySelectorAll(".filter-option");
const filterButton = document.querySelector(".filter-btn");
const filterOptions = document.querySelector(".filter-options");
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

    //Applies the dark-mode-element style to the filter options
    filterOptions.classList.toggle("dark-mode-element");

    //iterates through the content of the country card and applies the dark-mode-element style class
    contentCards.forEach(card => {
        card.classList.toggle("dark-mode-element");
    });

    //iterates through the filter options and applies the dark-mode-element style class
    filterOptionButtons.forEach(filter => { 
        if (body.classList.contains("dark-mode")) {
            filter.style.backgroundColor = "var(--dark-mode-elements)";
            filter.style.color = "var(--multi-use-color)";
            // Add other dark mode styles as needed
        } else {
            filter.style.backgroundColor = ""; // Reset to default
            filter.style.color = ""; // Reset to default
            // Remove other dark mode styles as needed
        }
        });

        //iterates through the html tags with id="nav" and applies the dark-mode-element style class
    navs.forEach(nav => {
        nav.classList.toggle("dark-mode-element");
    });
})

filterButton.addEventListener("click",()=>{
    //using the if statement to toggle the visibility of the filter options
    //if (filterOptions.style.visibility === "visible") {
    //filterOptions.style.visibility = "hidden";
    //} else if (filterOptions.style.visibility === "hidden") {
    //filterOptions.style.visibility = "visible";
    //}

    //using the ternary operator to toggle the visibility of the filter options
    filterOptions.style.visibility = filterOptions.style.visibility === "visible" ? "hidden" : "visible";
})

