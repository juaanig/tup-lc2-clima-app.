const nameHelp = document.getElementById('name');  
const emailHelp = document.getElementById('mail');  
const mensajeHelp = document.getElementById('area');  
const btn = document.getElementById('button');

function helpValid(){
  
  let final = true ;

  if(nameHelp.value.trim()=="" || mensajeHelp.value.trim()=="" || emailHelp.value.trim()==""){
    final=false;
    alert('Complete los campos e ingrese una dirección de correo valida'); 
  } 
  
  return final
}


document.getElementById('form-help').addEventListener('submit', function(event) {
  event.preventDefault();
  if(helpValid()){

    btn.value = 'Sending...';
    const serviceID = 'default_service';
    const templateID = 'template_2ejr8np';
    
    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      messages(7);
    }, (err) => {
      btn.value = 'Enviar';
      alert('Error al enviar la consulta');
    });
  }
    
});