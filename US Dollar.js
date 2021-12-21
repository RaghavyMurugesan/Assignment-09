Print the country which uses US Dollars as currency.

//_______CODE____________

var XMLHttpRequest = require("xhr2");
var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);

request.send();

request.onload = function () {
  var data = JSON.parse(request.response);
  //console.log(data[4].currencies);

  let result = data.filter((data) => {
    if (data.currencies[0].symbol === "$") {
      let dollar = [];
      dollar.push(data.name);
      console.log(...dollar);
    }
  });
};

//______OUTPUT________
American Samoa
Anguilla
Antarctica
Antigua and Barbuda
Argentina
Australia
Bahamas
Barbados
Belize
Bermuda
Bonaire, Sint Eustatius and Saba
British Indian Ocean Territory
United States Minor Outlying Islands
Virgin Islands (British)
Virgin Islands (U.S.)
Brunei Darussalam
Canada
Cayman Islands
Chile
Christmas Island
Cocos (Keeling) Islands
Colombia
Cook Islands
Cuba
Dominica
Dominican Republic
Ecuador
El Salvador
Fiji
Grenada
Guam
Guyana
Heard Island and McDonald Islands
Hong Kong
Jamaica
Kiribati
Liberia
Marshall Islands
Mexico
Micronesia (Federated States of)
Montserrat
Namibia
Nauru
New Zealand
Niue
Norfolk Island
Northern Mariana Islands
Palau
Pitcairn
Puerto Rico
Saint Kitts and Nevis
Saint Lucia
Saint Vincent and the Grenadines
Singapore
Solomon Islands
Suriname
Taiwan
Timor-Leste
Tokelau
Trinidad and Tobago
Turks and Caicos Islands
Tuvalu
United States of America
Uruguay
