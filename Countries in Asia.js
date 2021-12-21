Get all the countries from Asia continent /region using Filter function

//CODE
var XMLHttpRequest = require("xhr2");
var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);

request.send();

request.onload = function () {
  var data = JSON.parse(request.response);
  //console.log(data);

  let result = data.filter((data) => {
    if (data.region === "Asia") {
      let Asia = [];
      Asia.push(data.name);

      console.log(...Asia);
    }
  });
};

//OUTPUT
Afghanistan
Armenia
Azerbaijan
Bahrain
Bangladesh
Bhutan
Brunei Darussalam
Cambodia
China
Georgia
Hong Kong
India
Indonesia
Iran (Islamic Republic of)
Iraq
Israel
Japan
Jordan
Kazakhstan
Kuwait
Kyrgyzstan
Lao People's Democratic Republic
Lebanon
Macao
Malaysia
Maldives
Mongolia
Myanmar
Nepal
Korea (Democratic People's Republic of)
Oman
Pakistan
Palestine, State of
Philippines
Qatar
Saudi Arabia
Singapore
Korea (Republic of)
Sri Lanka
Syrian Arab Republic
Taiwan
Tajikistan
Thailand
Timor-Leste
Turkey
Turkmenistan
United Arab Emirates
Uzbekistan
Viet Nam
Yemen
