const axios = require('axios');

const makeHTTPRequestForCountries = () =>
    axios.get('https://restcountries.eu/rest/v2/all').then((res) => res);

export default makeHTTPRequestForCountries;
