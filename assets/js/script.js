const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const campoNome = document.querySelector('#nome');
  const campoEmail = document.querySelector('#email');
  const campoSubject = document.querySelector('#assunto');
  const campoMessage = document.querySelector('#mensagem');

  const txtNome = document.querySelector('#txtNome');
  const txtEmail = document.querySelector('#txtEmail');
  const txtSubject = document.querySelector('#txtSubject');

  let valido = true;

  if (campoNome.value.length < 3) {
    if (txtNome) txtNome.innerHTML = 'O Nome deve ter no mínimo 3 caracteres.';
    campoNome.focus();
    valido = false;
  } else {
    if (txtNome) txtNome.innerHTML = '';
  }

  if (!campoEmail.value.match(emailRegex)) {
    if (txtEmail) txtEmail.innerHTML = 'Digite um E-mail válido.';
    campoEmail.focus();
    valido = false;
  } else {
    if (txtEmail) txtEmail.innerHTML = '';
  }

  if (campoSubject.value.length < 5) {
    if (txtSubject) txtSubject.innerHTML = 'O Assunto deve ter no mínimo 5 caracteres.';
    campoSubject.focus();
    valido = false;
  } else {
    if (txtSubject) txtSubject.innerHTML = '';
  }

  if (!valido) return;

  // Se tudo estiver válido, mostra o alerta e limpa os campos
  alert("Formulário Enviado com Sucesso!");

  campoNome.value = '';
  campoEmail.value = '';
  campoSubject.value = '';
  campoMessage.value = '';
});
