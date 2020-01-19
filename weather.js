const COORDS="coords";

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
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadCoords=localStorage.getItem(COORDS);
    if(loadCoords===null){
        askForCoords();
    }else{
        
    }
}

function init(){
    loadCoords();
}

init();