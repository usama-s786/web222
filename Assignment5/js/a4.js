  /**
   * the following countries is a helper object for working with countries data and extracting information.
   * See countries-data.js for format of the countries data set.
   */
  let countries = {
    /**
     * Store all countries from countries-data.js on `countries.all` for convenience.
     */
    all: window.countriesData,

    /**
     * Return an array of all countries, with the Name Object replaced by the
     * appropriate translation, or English if not specified (or unknown).  For
     * example, when language="English", you would process the record for Canada into:
     *
     * {
     *     code: "CA",
     *     continent: "Americas",
     *     areaInKm2: 9984670,
     *     population: 36624199,
     *     capital: "Ottawa",
     *     name: "Canada"
     * }
     *
     * Supported languages include:
     *
     * English, Arabic, Chinese, French, Hindi, Korean, Japanese, Russian
     *
     * Uses `countries.all` as the underlying array of countries to be processed.
     *
     * HINT: IMPORTANT- make sure you don't overwrite the original name object.
     *  e.g., Using Object.create() to create a copy of the original object.
     */

    

    getByLanguage: function(language) {
      //let temp = Object.create(countries.all);
      //console.log(temp[0]);
      var result=[];
      //console.log(countries.all.length);
      for(let i=0; i<countries.all.length; i++){
        var n_country= Object.create(this.all[i]);
        if(language){
          n_country.name = this.all[i].name[language];
        }
        else{
          n_country.name = this.name[i].name['English'];
        }
        result.push(n_country);
        //console.log(countries.all[i]);
      }
      return result;
    },  

    /**
     * Return an array of countries with a population greater than or equal to
     * `minPopulation`, and possibly less than equal to `maxPopulation` (if defined)
     * otherwise allow any number greater than `minPopulation`.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {Number} minPopulation - (Required) minimum population value
     * @param {Number} maxPopulation - (Optional) maximum population value
     */

    getByPopulation: function(minPopulation, maxPopulation) {
      var outcome=[];
      var english_countries = this.getByLanguage('English');
      for(let i=0; i<english_countries.length;i++){
        if(maxPopulation){
          if(english_countries[i].population >= minPopulation && english_countries[i].population <= maxPopulation){
            outcome.push(english_countries[i]);
          }
        }
        else{
          if(english_countries[i].population >= minPopulation){
              outcome.push(english_countries[i]);
          }
        }
      }
    
      return outcome;
    }, 

    /**
     * Return an array of countries for the given `continent` with an area
     * greater than or equal to the given `area` in square KM.
     *
     * Uses getByLanguage('English') to get English names for countries.
     *
     * @param {String} continent - (Required) name of the continent (e.g., Europe)
     * @param {Number} minArea - (Required) minimum number of KM2 area
     */
    getByAreaAndContinent: function(continent, minArea) {
      return this.getByLanguage('English').filter((country)=>{
        if(country.continent == continent && country.areaInKm2 >= minArea)
        return country;
      });
    } 
  };

  let tableHelper = {
    clearTable: function() {
      //var tableRows = document.getElementById("table-rows"); 
      var tableRows = document.querySelector("#table-rows"); 
      tableRows.innerHTML = "";
    },  

    countryCodeToFlagImg: function(countryCode) {
      var image_element = document.createElement("img");
      image_element.src= "flags/" + countryCode.toLowerCase() + ".png";
      image_element.alt = "Country flag";
      return image_element;
    },

    countryToRow: function(country) {
      var table_element = document.createElement("tr");
      var table_list = document.createElement("td");
      var table_text = null;
      table_list.appendChild(this.countryCodeToFlagImg(country.code));
      table_element.appendChild(table_list);

     var header = Object.keys(country);

      for(let col in country){
        table_list=document.createElement("td");
        table_text=document.createTextNode(country[col]);
        table_list.appendChild(table_text);
        table_element.appendChild(table_list);
      }
      return table_element;
    },

    countriesToTable: function(countries) {
      this.clearTable();
      var rows = document.querySelector("#table-rows");
      countries.forEach((country)=>{
        rows.appendChild(this.countryToRow(country));
      });
    }  
  };

  function setupMenuHandlers() { 

  /*var menu_english_elem = document.querySelector("#menu_english");
    menu_english_elem.addEventListener("click", function(e){
    getByLanguage(English);
  })*/

    menuByLanguage("menu_english", "English");
    menuByLanguage("menu_arabic", "Arabic");
    menuByLanguage("menu_chinese", "Chinese");
    menuByLanguage("menu_french", "French");
    menuByLanguage("menu_hindi", "Hindi");
    menuByLanguage("menu_korean", "Korean");
    menuByLanguage("menu_japanese", "Japanese");
    menuByLanguage("menu_russian", "Russian");

    menuByPopulation("menu_population_100_000_000m", 100000000);
    menuByPopulation("menu_population_1m_2m", 1000000, 2000000);

    menuAreaContinent("menu_americas_1mkm", "Americas", 1000000);
    menuAreaContinent("menu_asia_all", "Asia", 0);
  }

  function menuByLanguage(id, language){
    var lan = document.getElementById(id);
    lan.addEventListener("click", function(e){
      tableHelper.countriesToTable(countries.getByLanguage(language));
      var subtitle = document.querySelector("#subtitle");
      subtitle.innerHTML = "List of Countries and Dependencies - Country/Dep. Name in "+language;
    });
  }

  function menuByPopulation(id, min, max){
    var population = document.getElementById(id);
    population.addEventListener("click", (e)=>{
    tableHelper.countriesToTable(countries.getByPopulation(min,max));
    var subtitle = document.querySelector("#subtitle");
    subtitle.innerHTML = "List of Countries and Dependencies - ";
    if (max){
      subtitle.innerHTML += min + " ~ " + max;
    }
    else{
      subtitle.innerHTML += "> " + min;
    }
    });
  }

  function menuAreaContinent(id, continent, minArea){
    var area=document.getElementById(id);
    area.addEventListener("click", (e)=>{
      tableHelper.countriesToTable(countries.getByAreaAndContinent(continent, minArea));
      var subtitle= document.querySelector("#subtitle");
      subtitle.innerHTML= "List of Countries and Dependencies - ";
      if(minArea==0){
        subtitle.innerHTML +="All size, Asia";
      }
      else{
        subtitle.innerHTML += "1 million Km, Americas";
      }
    });
  }

window.onload = setupMenuHandlers;

  

