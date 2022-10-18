
// busca e armazena na variavel, toda a tabela
var  tabela = document.querySelector("table")

// escutador de evento de duplo click
tabela.addEventListener("dblclick", function(event){
    // event.target é o elemento quem disparou o evento
    // ou seja, foi acionado quem? o elemento tr
    //  logo o parentNode é o pai desse elemento
    // e então se adiciona uma classe chamada fadeOut
    // classe que contem uma animção de remoção
    event.target.parentNode.classList.add("fadeOut")


    // setTimeout é o tempo para ser ser executada tal função apos seu chamado
    setTimeout(function(){
        // do elemento clicado, se remove o pai
        //em 500 milisegundos.
        // aqui o tempo é em milissegundos, 1000ms é 1 segundo.
        event.target.parentNode.remove();
    }, 500);
    })