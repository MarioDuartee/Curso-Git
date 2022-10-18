var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    // this siguinifica isso, ou melhor: o elemento chamado
    // testa se tem algo digitado, se sim faz isso, se não remove a classe invisivel de todos.
    if (this.value.length > 0) {
        // percorre todos os paciente e faz alguma coisa
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            // nova expressao regular, new RegExp serve: Uma expressão regular (regular expression ou Regex) é uma sequência de caracteres 
            // que forma um padrão de pesquisa. Ao procurar dados em um texto, você pode usar esse padrão de pesquisa para descrever o que está procurando.
            // Uma expressão regular pode ser um único caractere ou um padrão mais complicado. Expressões regulares podem ser usadas para executar todos
            // os tipos de pesquisa de texto e operações de substituição de texto.

            // "i" siguinifica a op~]ao case sensitive esta desativado, ou seja vai buscar maiusculos e minusculos
            var expressao = new RegExp(this.value, "i"); 

            // serve para testa mesmo
            // aqui estamos pedindo para a condição testar se a expressao(conteudo do input inserido) tem alguns caracteres iguais(testando um a um caracter)
            // se tem iguais aos nomes das tabelas, ou melhor nome.textContent de cada tr
            // ou seja, testar se tem algum pedacinho do texto inserido no input.
            if (!expressao.test(nome)) {
                // a negação do teste, ou seja, se a cada caracter adicionado for diferente dos nomes guardados na variavel nome
                // adiciona a classe invisivel
                paciente.classList.add("invisivel");
            } else {
                // se o que tiver no test, ou seja, se cada letra inserida no test for igual com os nomes guardado na variavel nome, remover a classe invisivel
                paciente.classList.remove("invisivel");
            }
        }

    } else {
        // condicão criada para apenas remover a classe invisivel se não tiver nada digitado
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});