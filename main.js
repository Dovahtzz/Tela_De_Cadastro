function registrar() {
    let senhaInput = document.getElementById('senha');
    let confirmarSenhaInput = document.getElementById('confirmar');
    let mensagem = document.getElementById('mensagem');

    if (senhaInput.value !== confirmarSenhaInput.value) {
        mensagem.textContent = "As senhas não coincidem.";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Registrado com sucesso!";
        mensagem.style.color = "green";
        limparCampos();
    }
}

    function limparCampos() {
        let campos = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
        campos.forEach(function (campo) {
        campo.value = "";
    });
}
