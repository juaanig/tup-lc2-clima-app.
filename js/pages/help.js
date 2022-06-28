const btn = document.getElementById('button');

document.getElementById('form-help').addEventListener('submit', function(event) {
  event.preventDefault();

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

});