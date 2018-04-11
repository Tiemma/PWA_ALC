//Users should be able to view top headlines based on country (filters)

let newsHeaders = new Headers();
newsHeaders.append('X-API-KEY', 'b3c78eee8e3d40a1abce2227d5fb59fa');

let countriesHeaders = new Headers();
countriesHeaders.append('Access-Control-Allow-Origin', '*')

let GET_request_config = {
    method: 'GET',
    headers: newsHeaders,
    mode: 'cors',
    cache: 'default'
};

let GET_countries_config = {
    method: 'GET',
    headers: countriesHeaders,
    mode: 'no-cors',
    cache: 'default'
};

function genRequest(endpoint) {
    return new Request(endpoint);
}

function genHeadlineCards(article){
    return `<div class="col s12 m6 l4"><div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${article.urlToImage}" alt="News Image">
    </div>
    <div class="card-content">
    <span class="card-title activator grey-text text-darken-4">
        ${article.title}
    </span>
      <a href="${article.url}" target="_blank" class="right article-link">
      Main Article
      <i class="material-icons">call_made</i>
      </a>
    </div>
    <div class="card-reveal">
<span class="card-title grey-text text-darken-4">${article.author} Wrote This<i class="material-icons right">close</i></span>
    <h4 class="description-header">Short Description</h4>      
    <p>${article.description}</p>
    </div>
    </div>
  </div>`
}

function getNewsByCountry(country=""){

    if(!country){
        country = document.getElementById('countries').value
    }

    let request = genRequest(`https://newsapi.org/v2/top-headlines?country=${country}`);


    //Get the top headlines
    getTopNews(request);
}

function getNewsBySource(source=""){
    if(!source){
        source = document.getElementById('sources').value
    }

    let request = genRequest(`https://newsapi.org/v2/top-headlines?sources=${source}`);

    //Get the top headlines
    getTopNews(request);
}

function getTopNews(newsRequest){
    fetch(newsRequest, GET_request_config)
        .then(response => {
            addToCache(newsRequest.url, GET_request_config);
            return response.json();
        })
        .then(response => {
            top_Headlines = document.getElementById('top-headlines');
            top_Headlines.innerHTML = "";
            if(!response.totalResults){
                return top_Headlines.innerHTML = "<p>No articles for this country/source</p>";
            }else{
                response.articles.forEach(function (article, key) {
                    top_Headlines.insertAdjacentHTML('beforeEnd', genHeadlineCards(article));
                })
            }
        });
}

//Get the list of all countries
let countriesRequest = genRequest('countries.json');
fetch(countriesRequest)
    .then(response => response.json())
    .then(countries => {
        countries.forEach(function (country, key){
            //Select needed fields from response
            country_ISO3166 = country.cca2;
            country = country.name.common;
            if(country_ISO3166 && country){
                //Create option tag and add values to tag
                let option = new Option();
                option.value = country_ISO3166;
                option.text = country;
                document.getElementById('countries').appendChild(option);     
            }                                                                                                       
        })
    });


//Get the list of all sources
let sourceRequest = genRequest('https://newsapi.org/v2/sources');
fetch(sourceRequest, GET_request_config)
    .then(response => response.json())
    .then(sources => {
       sources.sources.forEach(function(source, key){
           source_id = source.id
           source_name = source.name
           if(source_id && source_name){
               //Create option tag and add values to tag
               let option = new Option();
               option.value = source.id;
               option.text = source.name;
               document.getElementById('sources').appendChild(option);  
           }
       })
       initSelect(); 
    });

 