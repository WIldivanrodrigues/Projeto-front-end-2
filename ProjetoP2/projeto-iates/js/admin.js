document.getElementById("acesso").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let objLoginSenha = {
        email: email,
        senha: senha
    };

    let resultado = validarUsuario(objLoginSenha);
    


    if (resultado === true) {
        window.location.href = "mensagens.html";
    } else {
        alert("E-mail ou senha incorretos.");
    }
});
