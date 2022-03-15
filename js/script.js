const loadCountries = () => {
    fetch ('https://restcountries.com/v3.1/all')
    .then (res => res.json ())
    .then (data => displayCountiers(data)) ;
}
const displayCountiers = (countries) => {
    console.log (countries)
    const allCountriesHtml = countries.map (country =>getCountriesHTml(country)) ;
    console.log (allCountriesHtml) 
    const container = document.getElementById ('container') ;
    container.innerHTML = allCountriesHtml.join ('') ;
}
// Option 2 
const getCountriesHTml = ({name , flags , area})=> {
    // return `
    // <div class = 'country'>
    // <h2> ${country.name.common}</h2>
    // <img src=' ${country.flags.png}'> 
    // </div>
    // `
    // option 1 
    // const {name , flags} = country ;
    return `
    <div class = 'country'>
    <h2> ${name.common}</h2>
    <p>Area: ${area}</p>
    <img src=' ${flags.png}'> 
    </div>
    `
}

loadCountries () ;
let ul = `<li>Programming<li>`; 
ul +=  `<li>Hero<li>`; 
console.log(ul);
