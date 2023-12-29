document.getElementById('loginForm').addEventListener('submit', function (event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Limpar a mensagem de erro anterior
    errorMessage.textContent = '';

    // Exemplo simples de autenticação de teste:
    if (email === 'usuario@example.com' && password === 'senha123') {
        alert('Login bem-sucedido! Redirecionando...');
        // redirecionar o usuário para outra página
    } else {
        errorMessage.textContent = 'Credenciais inválidas. Tente novamente.';
        event.preventDefault(); // Impedir o envio do formulário
    }
});