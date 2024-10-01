function validateLogin() {
    const email = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    // Validação de campos vazios
    if (!email || !passwordInput) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação do formato do e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Validação da senha
    if (passwordInput.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    // Exemplo de validação simples (você pode substituir por lógica real)
    const adminEmail = "admin@email.com";
    const adminPassword = "122333";

    if (email === adminEmail && passwordInput === adminPassword) {
        alert("Login bem-sucedido!");
    } else {
        alert("E-mail ou senha incorretos.");
    }
}

function clearInput(inputId) {
    const input = document.getElementById(inputId);
    input.value = ''; 
    input.focus();
}
