
const countriesContainer = document.querySelector('.countryContainer')

  fetch(`https://restcountries.com/v3.1/all`)
  .then((res)=>res.json())
  .then((data)=>{
    data.forEach(country => {
      
      const countryCard = document.createElement('a');
      countryCard.classList.add('country_card');
      countryCard.innerHTML=`
  <img src="${country.flags.svg}" alt="flag">
       <div class="cardText"> 
        <h3 class="cardTitle">${country.name.common}</h3>
        <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
        <p><b>Region: </b>${country.region}</p>
        <p><b>Capital: </b>${country.capital}</p>
        </div>
`
countriesContainer.append(countryCard);
    });
  
  });
  
  