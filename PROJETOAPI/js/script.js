const campoCep = document.querySelector("#cep");
/* document = documento html que está no navegador
queryselector() = está procurando o elemento no caso #cep */

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {

    Event.preventDefault();

    const cep = campoCep.value;

    console.log("CEP digitado:", cep);

    const cepFormatado = cep.replace("-", "");

    const url = `https://viacep.com.br/ws/${cepFormatado}/json/`;

    console.log(url);

    fetch(url)
        .then(function(resposta){
            
            return resposta.json();

        })
        .then(function(dados){

            campoLogradouro.textContent = dados.logradouro;
            campoBairro.textContent = dados.bairro;
            campoCidade.textContent = dados.localidade;
            campoEstado.textContent = dados.uf;

            campoResultadoCep.textContent = dados.cep;

        });

});

/* addEventListener = o js vai observar o elemento e mandara ele fazer algo quando algo acontece
event.preventDefault() = "navegador, não faça o comportamento padrão. eu vou cuidar disso." 
.replace = pegue o conteúdo de cep e substitua - por nada (isso que estamos fazendo é um tratamento)
fetch() = js vá nessa url e peça os dados para ela
.then(function(resposta) = aqui basicamente vai ficar a resposta da API
.textContent = pegue o elemento campoLogradouro e coloque dentro dele o valor de dados.logradouro*/