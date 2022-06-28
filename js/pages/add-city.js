const city = document.getElementById('add-city');
const buttonAdd = document.getElementById('agregar');

async function validacion(ciudad){

    let listaCiudades = getCitiesFromLocalStorage()
    let second = listaCiudades.includes(ciudad)?ciudad : 0;
    
    switch(ciudad){
        case "":
            alert('complete el campo')
            break;
        case second:
            loader()
            value = 0
            break;
        default:
            loader();
            value = await apiResponse(ciudad) != Error ? true : false ;
            break;
    }

    return value;
}
 
async function addNewCityToLocalStorage() {

    let ciudad = (city.value).toUpperCase().trim();
    let cities = getCitiesFromLocalStorage()
    let condicion = await validacion(ciudad)

    switch (condicion){
        case true:
            spinner.style.display = 'none'
            cities.push(ciudad);
            messages(1); 
            localStorage.setItem('CITIES', JSON.stringify(cities));
            break;

        case false:
            spinner.style.display = 'none'
            messages(3); 
            break;

        case 0:
            spinner.style.display = 'none';
            messages(2);
            break;
    }
}

buttonAdd.addEventListener('click',addNewCityToLocalStorage);