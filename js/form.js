
// busca o html
var botaoAdicionar = document.querySelector("#adicionar-paciente");
// funcao escutador de evento
botaoAdicionar.addEventListener("click", function (event) {
    // nao atualizar pagina do 0 quando clicado
    event.preventDefault();

    // guarda na form o documento html
    var form = document.querySelector("#form-adiciona");

    // guarad na variavel a função com o parametro form
    // muito provavelmtente com o conteudo que tem dentro do form
    // exemplo : dentro da função tem comandos do tipo: form.paciente.innerHTML ou termina com textContent...
    var paciente = obtemPacienteDoFormulario(form);

    // mesmo raciocinio
    var erros = validaPaciente(paciente);

    // ainda dentro do escutador e para cada click executa essas funcoes
    // aqui para mostrar na tela mensagens de erro, essa função cria ul e li com mensagens de erros
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }
    
    adicionaPacienteNaTabela(paciente);

    // aqui é para apagar todo o formulario quando clicado
    form.reset();

    // e aqui é para quando o formulario for preenchido e sem erros, é para apagar todas as mensagens de erro.
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});


function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    // appendChild adiciona como filho
    // e mais la em cima existe uma função para guardar informacoes no pacienteTr
    // e então está sendo feito aldo dentro da função e aqui esta executando como filho
    tabela.appendChild(pacienteTr);
}


// nessa função é apenas para criar o objeto paciente e para guardar nome peso altura...
// lembre-se que a varaivel form possui todo o documento e aqui é apenas substituido e g uardado no objeto
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    // aqui o return se usa porq é para retornar e mostrar na tela(imprimir)
    return paciente;
}

// nessa função é criado uma tr e suas classes
function montaTr(paciente) {

    // cria variavel e cria elemento
    var pacienteTr = document.createElement("tr");
    // cria uma classe no elemento criado acima
    pacienteTr.classList.add("paciente");

    // appendChild cria uma elemento filho e observando cada paciente tr existe uma função
    // nessa função é cria uma classe e o valor de cada nome   (para melhor entendimento, acontece na função obtemPacienteDoFormulario uma criação de objeto e seus valores, 
    // nessa função em questão é adicionado (atraves da função montaTd) na tela os valores inserido no formulario)
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

// nessa função é criado uma classe e inserido na tela o valor de cada formulario, nome, peso...
function montaTd(dado, classe) {
    // cria variavel e um td no html
    var td = document.createElement("td");

    // adiciona no td a classe que será inserida no parametro
    td.classList.add(classe);

    // adiciona em cada td o texto de cada formulario, nome, peso, gordura...
    td.textContent = dado;

    // como sera exibido no HTML tem q ter o return.
    return td;
}

// função para erros
function validaPaciente(paciente) {

    // nesses cochetes é informado que tera uma ou mais strings.
    var erros = [];

    if (paciente.nome.length == 0) {
        // push é para inserir, colocar, adicionar
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

    // aqui é para adicionar no html cada mensagem de erro obtido na função validaPaciente
function exibeMensagensDeErro(erros) {
    
    // guarda na varia ul o documento
    var ul = document.querySelector("#mensagens-erro");
    // apaga o html
    ul.innerHTML = "";

    // função forEach é melhor que função for com erros.lenght
    // pois length é para saber quantos indices tem naquela variavel
    // forEach ja sabe quual a quantidade e ja executa a função definida
    // por exemplo: na função anterior foi guardada em cada array uma string com frases
    // na função for each ele ja sabe que naquele array possui 2, 3 ou mais indices.
    // entao nesse forEach que estamos fazendo, existe uma função com o parametro erro (que pode ser qualquer nome como parametro, pois é so para a semantica)
    // e ali ele vai fazer algo.
    erros.forEach(function (erro) {
        // aqui cria uma li
        var li = document.createElement("li");

        // insere o texto de cada string da variavel erro
        // se for mais de um array, então sera mais de um li
        li.textContent = erro;

        // e aqui insere no html o texto do li
        ul.appendChild(li);
    });
}
