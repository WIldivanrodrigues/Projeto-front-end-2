$(document).ready(function () {
        $('#form-contato').on('submit',function (e) {e.preventDefault();

          var nome = $('#nome').val().trim();
          var email = $('#email').val().trim();
          var mensagemTexto = $('#msg').val().trim();

          var mensagem = {
            nome: nome,
            email: email,
            mensagem: mensagemTexto
          };

          inserirMensagem(mensagem);
          alert('Sua mensagem enviada, aguarde contato da nossa equipe.');
          $('#form-contato')[0].reset();
        });
      });
      