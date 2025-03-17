
const coundryDetails=document.querySelector('.coundryDetails');

const countryName= new URLSearchParams(window.location.search).get('name');
fetch(`https://restcountries.com/v3.1/name/${countryName}`).then((res)=>res.json().then((data)=>{
console.log(data)
  data.forEach(element => {
  console.log(element)
 coundryDetails.innerHTML=`
 
  <img src="${element.flags.svg}" alt="flag">
      <div class="detailTextContainer">
        <h2>${element.name.common}</h2>
      <div class="detail">
        <p><b>Native Name : </b>${element.name.nativeName.official?element.name.nativeName.official:"N/A"}</p>
        <p><b>Population: </b>${element.population}</p>
        <p><b>Region: </b>${element.region}</p>
        <p><b>Sub Region: </b>${element.subregion}</p>
        <p><b>Capital: </b>${element.capital}</p>
        <p><b>Top Level Domain: </b>${element.domain?element.domain:"N/A"}</p>
        <p><b>Currencies : </b>${element.currencies.EUR}</p>
        <p><b>Languages : </b>${element.languages.fra}</p>
 `
  });

}
))

