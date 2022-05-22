const loadCountries = async () => {
    try {
        const res = await fetch("./countries.json");
        let countries = await res.json();
        displayCountries(countries);
    } catch(err){
        console.error(err);
    }
};

const displayCountries = (countries) => {
    const htmlString = countries.map((country) => {
        return `
        <div class="flag">
            <img src="${country.flag}" alt="flag">
            <p class="title">${country.name}</p>
            <p class="description">
                <span>Capital: ${country.capital}</span> <br>
                <span>Population: ${country.population}</span> <br>
                <span>Languages: ${country.languages}</span> <br>
                <span>Region: ${country.region}</span> <br>
            </p>
        </div>
        `;
    })
    .join("");
    document.querySelector(".flags").innerHTML = htmlString;
};

loadCountries();