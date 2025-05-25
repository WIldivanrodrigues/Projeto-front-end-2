$(document).ready(function() {
            let mensagens = obterMensagens();

            let tbody = $("#tabelaMensagens tbody");

            if (mensagens.length === 0) {
                tbody.append("<tr><td colspan='3'>Nenhuma mensagem encontrada.</td></tr>");
            } else {
                mensagens.forEach(function(msg) {
                    let linha = `<tr>
                                    <td>${msg.nome}</td>
                                    <td>${msg.email}</td>
                                    <td>${msg.mensagem}</td>
                                </tr>`;
                    tbody.append(linha);
                });
            }
        });