const COORDS="coords";
const API_KEY="955114380d6bdff16c69f9eb73ec633d";
const weather=document.querySelector(".js-weather");

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature=json.main.temp;
        const place=json.name;
        weather.innerText=`${temperature}@${place}`
    });
}

function handleGeoError(){
    console.log("cant access");
}

function saveCoord(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj={
        latitude:latitude,
        longitude:longitude
    }
    saveCoord(coordsObj);
    getWeather(latitude,longitude);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadCoords=localStorage.getItem(COORDS);
    if(loadCoords===null){
        askForCoords();
    }else{
        const parseCoords=JSON.parse(loadCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();