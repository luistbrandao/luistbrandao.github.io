// Funcionalidade do formulário de contato
const form = document.querySelector('#contato form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Simulação de envio do formulário
  const name = document.querySelector('#contato input[name="name"]').value;
  const email = document.querySelector('#contato input[name="email"]').value;
  const message = document.querySelector('#contato textarea[name="message"]').value;

  // Exemplo de feedback ao usuário
  alert(`Olá, ${name}! Sua mensagem foi enviada.\n\nEmail: ${email}\nMensagem: ${message}`);

  // Limpar o formulário
  form.reset();
});
