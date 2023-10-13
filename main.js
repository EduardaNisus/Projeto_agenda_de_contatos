const form = document.getElementById('form-contatos');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarLinha();
    atualizaLinha();
});

function adicionarLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    if (numeros.includes(inputNumero.value)) {
        alert(`Esse contato já está  na agenda.`)
    } else {
        nomes.push(inputNome.value);
        numeros.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';


        linhas += linha;
    };

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaLinha() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}