// Vai ler em JSON

function gerarObjeto(){
    var pessoa = {
        nome: "Maria",
        idade: 25,
        altura: 1.85, 
        aluno: true,
        formaturas: [2006, 2013, 2017],
        cursos: ["técnico", "Graduação ", "Mestrado"],
        cnh : { numero: "123456", categoria: "AB"},

        // Dentro do JSON primeiro é chave e o outro é valor =  {nome: "José", idade: 10}.
        

        filhos: [
            {nome: "José", idade: 10},
            { nome: "Julia", idade: 14},
            { nome: "Isabel", idade: 7}
        ],


        netos: [
            {nome: "Joelma", idade: 10},
            { nome: "Manoel", idade: 14}
        ],
        endereco: null
    }
    $("#dadosJSON").html(JSON.stringify(pessoa));
}

function lerJSON(){
    var xhttp = new XMLHttpRequest();

    // Tratar resposta
    xhttp.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            var pessoa = JSON.parse(this.responseText);texto = "Nome: " + pessoa.nome + "<br>";
            texto += "Idade: " + pessoa.idade + "<br>"
            texto += "Altura: " + pessoa.altura + "<br>";
            texto += "Número da CNH: " + pessoa.cnh.numero + "<br>"; // Acrescentei
            texto += "Categoria da CNH: " + pessoa.cnh.categoria + "<br>";
            
            texto += "Filhos: <br>";

            // Este forEach serve para percorrer um array = lista
            // Dentro do forEach foi criado uma variavel filho
            /* Dentro das chaves vou programar o que é para fazer com cada filho,
            no caso o forEach dara ou fara tantos ciclos forem necessarios conforme 
            o tamanho da variavel filho, ele é um array que vai se transformar em dois
            a cada volta, vai acessar o conteúdo texto */
            pessoa.filhos.forEach(filho => {
                texto += "Nome: "+ filho.nome + "<br>"
                + " - Idade: " + filho.idade + "<br>";
            });
            // Shit +Alt + seta para baixo replica linha
            $("#resposta").html(texto);

            // ========================Eu criei================================= 
            // E acrescentei no arquivo de extensão JSON.
            
            texto += "Netos: <br>";
            pessoa.netos.forEach(neto => {
                texto += "Nome: "+ neto.nome + "<br>"
                + " - Idade: " + neto.idade + "<br>";
            });
            // Shit +Alt + seta para baixo replica linha
            $("#resposta").html(texto); // Aqui vai trazer a resposta em html.
        }
    }

    xhttp.open("GET", "meujson.json", true);
    /* Abaixo testei no modo POST e não deu certo 
    xhttp.open("POST", "meujson.json", true);
    */
    xhttp.send();
}