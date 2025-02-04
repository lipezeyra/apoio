document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // lógica para enviar os dados para o back-end
    console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
    
    alert('Mensagem enviada com sucesso!');
});
