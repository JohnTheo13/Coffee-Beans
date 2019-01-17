/**
 * Functions to return update our options
 */

const varieties = ({ name }) => name; 

const countries = items => {
  const countriesList = []
  items.map(
    ({producing_countries}) => producing_countries.filter(
      country => countriesList.indexOf(country) === -1 && countriesList.push(country)));
  return countriesList;
};

function updateByCountry(country) {
  return function({ producing_countries }) {
    return producing_countries.find(item => item === country);
  }
};

function updateByDisease(disease) {
  const [d, v] = disease.split(' ');
  let diseaseName = d.toLocaleLowerCase().replace('-','_');
  if(diseaseName === "coffee_berry") {
    console.log(diseaseName);
    diseaseName += '_disease';
  }
  const value = v.toUpperCase();
  return function({ disease_resistance }) {
    return disease_resistance.some(item => item[diseaseName] && item[diseaseName] === value)
  }
};

export { varieties, countries, updateByCountry, updateByDisease };
