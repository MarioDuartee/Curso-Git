// seleciona o documento no html e guardar na variavel titulo
var titulo = document.querySelector(".titulo");
// altera o texto
titulo.textContent = "Aparecida Nutricionista";

// guarda na variavel pacientes todo o documento com a classe paciente
var pacientes = document.querySelectorAll(".paciente");

    // navegar paciente por paciente
for (var i = 0; i < pacientes.length; i++) {

    // a cada paciente no indice i partindo do indice 0 guarda na variavel paciente e faz alguma coisa
    var paciente = pacientes[i];

    // guardar na variavel uma classe do html
    var tdPeso = paciente.querySelector(".info-peso");
    //logo se guarad na variavel peso o conteudo da classe, texto ou numero
    var peso = tdPeso.textContent;

    // faz o mesmo que o de cima mas na variavel altura
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    // apenas guardar o doc.html.class
    var tdImc = paciente.querySelector(".info-imc");

    // aqui se usa uma função pra validar o peso e altura
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    // se a negação do peso valido for falso, faça isso
    // ou seja se ele for !pesoEhValido siguinifica = se ele for falso, faça isso!
    if (!pesoEhValido) {
        // imprime no console
        console.log("Peso inválido!");
        // apenas para melhor entendimento do que ele vira (false)
        pesoEhValido = false;
        // exibe na tela que o peso é invalido
        tdImc.textContent = "Peso inválido";
        // adiciona uma classe chamada paciente-invalido para o css trabalhar em cima da classe criada
        paciente.classList.add("paciente-invalido");
    }


    // se a negação da altura valido for falso, faça isso
    // mesmo raciocinio da negação de cima
    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    // se os dois forem verdadeiro faça isso
    if (pesoEhValido && alturaEhValida) {
        // calcula na função IMC
        var imc = calculaImc(peso, altura);
        // depois de calculado exibir na tela o calculo
        tdImc.textContent = imc;
    }
}
// fim da função for


// calcula o imc
function calculaImc(peso, altura) {
    var imc = 0;
    // realiza o calculo
    imc = peso / (altura * altura);

    // e o retorna o calculo com apenas 2 casa decimais
    return imc.toFixed(2);
}

// função que retorna booleano
function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}
// função que retorna booleano
function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
