const buttonAdd = document.getElementById('agregar')
const city = document.getElementById('add-city')
const mensajeExito = document.getElementById('message-success-1')
const apiKey = '490f182a9740a768a20dd06c4c31071e'
let citiesList = []

//========================================================= 
/*
guarde la nueva ciudad en el listado de ciudades del localStorage. 
 HAY QUE REALIZAR UNA FUNCION QUE VALIDE QUE LA CIUDAD INGRESADA NO ESTÉ EN EL LOCAL STORAGE

 Si se intenta agregar una ciudad que ya está guardada, se debe mostrar un
 cartel de error. En el caso de que la ciudad no se encuentre guardada, agregarla al listado e
 informar el guardado con un mensaje de éxito
*/

 function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if(cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function addNewCityToLocalStorage(newCity) {
    let cities = getCitiesFromLocalStorage();
    cities.push(newCity);
    localStorage.setItem('CITIES', JSON.stringify(cities));
    return cities
}
//========================================================= 

//================= BUTTON TO ADD CITY ==================== 
buttonAdd.addEventListener('click',()=>{  

    let ciudad = city.value //PARSEAR TODO A MAYUSCULA PARA QUE NO HAYA ERRORES POR CASESENSITIVE
    let lista_ciudades = getCitiesFromLocalStorage()   

    if(lista_ciudades.includes(ciudad)){
        alert('CIUDAD YA INGREASADA')
    }else{

        addNewCityToLocalStorage(ciudad)

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
        .then( response => response.json() )
        .then( data => {
            let datos = Object.entries(data) //PARSEAMOS LOS DATOS Y LOS CONVETIMOS EN UNA LISTA DE LISTAS 
            console.log(datos);
        } )
        .catch(e => console.log(e))

        mensajeExito.style.display = 'block';

        setTimeout(()=>{mensajeExito.style.display = 'none'},10000)

    }

});
//========================================================= 