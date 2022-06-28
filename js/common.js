const spinner = document.getElementById('spinner');
const sectionMessages = document.getElementById('messages-add-city');
const sectionMessages2 = document.getElementById('messages-index');
const sectionMessages3 = document.getElementById('messages-help');


function loader(){
    spinner.style.display = 'block'
    setTimeout(()=>{spinner.style.display = 'none'},2000);
    return true;
}

function getCitiesFromLocalStorage() {

    let cities = localStorage.getItem("CITIES");

    if(cities){cities = JSON.parse(cities);} 
    else { cities = [];}
    return cities;
}

function apiResponse(ciudad,stage=0){

    let value = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=490f182a9740a768a20dd06c4c31071e&units=metric&lang=es`)
    .then( (response) => {
        if(response.status == 200){return response.json()}
        if(response.status == 404){ throw new Error}
    })
    .then( data => stage == 1?insertCard(data):data )
    .catch((e)=>{ 
        console.log(e)
        return Error
    })

    return value;

}

function messages(condicion){

    const div = document.createElement('div')

    switch (condicion) {
        case 1:
            div.setAttribute('class','message-success') ;
            div.innerText = 'Ciudad agregada con éxito'
            div.style.display = 'block';
            sectionMessages.appendChild(div)
            setTimeout(()=>{div.style.display = 'none'},3000)
            break;
        case 2:
            div.setAttribute('class','message-waring') ;
            div.innerText = 'La ciudad ingresada ya se encuentra almacenada'
            div.style.display = 'block';
            sectionMessages.appendChild(div)
            setTimeout(()=>{div.style.display = 'none'},3000)
            break;    
        case 3:
            div.setAttribute('class','message-error') ;
            div.innerText = 'Error: La ciudad ingresada no se encuentra en la API o se produjo un error al consultar'
            div.style.display = 'block';
            sectionMessages.appendChild(div)
            setTimeout(()=>{div.style.display = 'none'},3000)
            break;            
        case 4:
            div.setAttribute('class','message-error') ;
            div.innerText = 'Selecciones una ciudad'
            div.style.display = 'block';
            sectionMessages2.appendChild(div)
            setTimeout(()=>{div.style.display = 'none'},3000)
            break;
        case 5:
            div.setAttribute('class','message-error') ;
            div.innerText = 'Por favor agregue una ciudad'
            div.style.display = 'block';
            sectionMessages2.appendChild(div)
            setTimeout(()=>{div.style.display = 'none'},3000)
            break;
        case 6:
            div.setAttribute('class','message-error') ;
            div.innerText = 'Error: se produjo un error al consultar'
            div.style.display = 'block';
            sectionMessages2.appendChild(div)
            setTimeout(()=>{div.style.display = 'none'},3000)
            break;            
        case 7:
            div.setAttribute('class','message-success') ;
            div.innerText = 'Mensaje enviado con éxito'
            div.style.display = 'block';
            sectionMessages3.appendChild(div)
            setTimeout(()=>{div.style.display = 'none'},15000)
            break;
    }
        
}