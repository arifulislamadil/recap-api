const countries = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
countries();

const displayCountries = (countries) => {
  // for(const country of countries){
  //     console.log(country.name);
  // }
  {
    countries.map((country) => {
      const container = document.getElementById("countries-container");
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${country.name}</h3>
        <button onclick='(displayCountry("${country.name}"))'>Details</button>
        `;
      container.appendChild(div);
    });
  }
};

const displayCountry = (country) => {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((res) => res.json())
    .then((data) => displayDetails(data[0]));
};

const displayDetails = (country) => {
  const container = document.getElementById("display-details");
  container.innerHTML = `
       <div>
       <h3>${country.name}</h3>
       <h4>${country.capital}</h4>
       <h4>${country.population}</h4>
       <img src=${country.population} alt=""></div>
        `;
};
