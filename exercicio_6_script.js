//Exercício 6 da Lista 3.1_CS
var codfonte = document.getElementById('cod_fonte');
var resposta = document.getElementById('resposta');
var saldoinicial = document.getElementById('saldo_inicial');
var valordepositado = document.getElementById('valor_depositado');
var chequedescontado = document.getElementById('cheque_descontado');
var mensagem;
function calcular() {
    var novosaldo;
    novosaldo = Number(saldoinicial.value) + Number(valordepositado.value) - Number(chequedescontado.value);
     if(novosaldo > 0) {
        mensagem = "O seu novo saldo é positivo. "+"Novo saldo: R$ "+ novosaldo.toFixed(2).replace(".", ",");
    } else {
        mensagem = "Novo saldo: R$ "+novosaldo.toFixed(2).replace(".", ",");
    }
    resposta.innerHTML = mensagem;
}

