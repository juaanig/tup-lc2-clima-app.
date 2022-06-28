const card = document.getElementById('card');
const selectCity = document.getElementById('city-select');
const buttonConsult = document.getElementById('consultar');

let flag ;

function addOptions(){
    try{ 
        let array = getCitiesFromLocalStorage()
        array.forEach((element) => {
            selectCity.add(new Option(element,element))
        });
    }
    catch{
        messages(5);
    }
}

function insertCard(data){ 
    try{
        let datos = data;
    
        bodyCard =`
        <h3>${datos.name}</h3>
        <img src="http://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png" alt="sun" >
        <p>Temperatura: ${datos.main.temp}°</p>
        <p>Sensación térmica: ${datos.main.feels_like}°</p>
        <p>Humedad: ${datos.main.humidity}</p>
        <p>Velocidad del viento: ${datos.wind.speed}Km/h</p>
        <p>Presión: ${datos.main.pressure} P</p>
        `
        
        card.innerHTML = bodyCard;
        card.style.display = 'block';
        flag = true ;

        selectCity.addEventListener('change',aux) 
    }catch{
        messages(6);
    }
    
}

async function aux(){ 
    try{ 

        switch(selectCity.value){
            case '0':
                messages(4);
                break;
                
            default:
                loader()
                if (loader()){card.style.display = 'none';}
                setTimeout(()=>{apiResponse(selectCity.value,1)},2100)
                break;
        }
                
    }catch{
        messages(6);
    }
}

addOptions();

buttonConsult.addEventListener('click',aux);