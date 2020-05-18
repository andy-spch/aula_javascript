

function clicou(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar!</b>";

    //console.log (document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.terabyteshop.com.br/"); //redireciona para o link e abre ele em uma nova aba do navegador
    //window.location.href = "https://www.terabyteshop.com.br/"; //redireciona para o link mas abre ele na mesma janela
}

function trocar(elemento){  //caso você use o id deixe sem o (elemento), caso use o this coloque o (elemento)
    elemento.innerHTML="<h2>Passe o mouse aqui";                                         //nesse caso aqui utilizamos a referência ao "this" colocado nos parenteses
    //document.getElementById("mousemove").innerHTML="<h2>Passe o mouse aqui</h2>";     //nesse caso utilizamos o id como referêcia
    //alert("Trocar texto");
}

function voltar(elemento){  //caso você use o id deixe sem o (elemento), caso use o this coloque o (elemento)
    elemento.innerHTML="Passe o mouse aqui";                                             //nesse caso aqui utilizamos a referência ao "this" colocado nos parenteses
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui";              //nesse caso utilizamos o id como referência
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

//  OUTRAS OPÇÕES DE COMANDOS JAVA SCRIPT ABAIXO

/* SOMA

function soma(n1,n2){
    return  n1 + n2;
};
alert(soma(5,10));
*/



/* na sentença a seguir ele utiliza a variável "validar" localmente(em uma pequena função), mas podemos utiliza-la de forma global (na declaração de funções do topo do código)

//var validar=0 //essa é a opção de declarar o validar de forma global                   
function validaIdade(idade){        //caso nenhum número seja colocado ele entenderá que o validar é igual a zero e retorna falso na função abaixo
                  
    if (idade >= 18){
        var validar;
        validar = true
    }else{
        validar = false
    }
    return validar;
};
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/



/* essa função serve para fazer a troca de uma palavra ou frase dentro do código, a primeiro momento parece pouco, mas em um código extenso, a troca pode ser necessária

function setReplace (frase, nome, novo_nome){       //aqui ele utiliza a função setReplace e declara as variáveis dentro dos parenteses
    return frase.replace(nome,novo_nome);           //aqui ele pede para retornar frase
};
alert(setReplace("Vai Japão", "Japão", "Brasil"));  //nese exemplo ele informa a frase (Vai Japão), informa o que será substituido (Japão) e o que irá substituir (Brasil)
*/



// Aula 3 //
/*  DATAS E RETORNO DE TEMPO EM FORMA DE CÓDIGO
var d=new Date();
alert(d);
alert("mês " + d.getMonth() + 1);        //ele retorna o número do mês atual, porém deve-se usar o +1 na frente porque ele começa contando do zero
alert("minutos " + d.getMinutes());
alert("dia " + d.getDay());
alert("segundos " + d.getSeconds());
*/



/* ESTRUTURA DE LAÇO DE REPETIÇÃO COM O COMANDO "PARA" EM INGLÊS "FOR"
var count;
for (count=1; count <= 5; count++){
    alert(count);
};
*/



/* ESTRUTURA DE LAÇOS DE REPETIÇÃO WHILE
var count = 0;
while (count<=5){
    console.log(count);
    alert(count);
    count++                     //pode usar count + 1 também
};
*/



/* ESTRUTURA CONDICIONAL
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/



/* ARRAY E DICIONÁRIO
var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}];              //cria uma lista em formato de formulário
console.log(frutas);                                                                //printa no console o formulário por completo
console.log(frutas[1].nome);                                                        //printa no console o nome da fruta da posição 1 "uva"
console.log(frutas[1].cor);                                                         //printa no console a cor da fruta na posicação 1 "roxa"
alert(frutas[0].cor);                                                               //printa no pop-up de alerta a cor da fruta na posição 0 "vermelha"
alert(frutas[0].nome);                                                              //printa no pop-up de alerta o nome da fruta na posição 0 "maça"
*/



/* ARRAY
var fruta = {nome:"maça", cor:"vermelha"};          //cria um objeto, como o do json, uma forma de formulário de informações
console.log(fruta);                                 //printa no console o elemento fruta
console.log(fruta.nome);                            //printa no console o elemento "nome" dentro do formulário "fruta"
alert(fruta.cor);                                   //printa no console o elemento "cor" dentro do formulário "fruta"
*/



/* ARRAY
var lista = ["maça", "pêra", "laranja"];
lista.push ("uva");                               //adiciona o intem uva á lista
lista.pop ();                                     //remove o ultimo item da lista
console.log(lista);                               //cria uma lista e indica para a lista completa
console.log(lista[1]);                            //cria uma lista e indica para apenas a posição 1, que no caso é a posição da pera
alert (lista[1]);                                 //cria um alerta e indica apenas a posição 1 da lista, que no caso é a posição da pera
console.log(lista.length);                        //conta a quantidade de itens na lista criada
console.log(lista.reverse());                     //serve para inverter os itens de uma lista
console.log(lista.toString());                    //transforma a lista em uma string (texto)
console.log(lista.toString()[0]);                 //indica a primeira letra da lista que foi transformada em texto
console.log(lista.join(" - "));                   //cria um elemento de separação automaticamente dentro da lista, no caso a lista ficou "maça - pêra - laranja"
*/



// Aula 1 e 2 //
//  var nome = "Anderson Donnarumma";   /* barra e asterisco servem para comentar mais de uma linha no Java script, utilizar o asterisco barra para terminar */
/*  
    var idade = 28;                     // barra barra serve para comentar apenas em uma linha no Java script
    var idade2 = 10;    //string de número deve-se colocar entre aspas, apenas número como variável ele entende que é um inteiro ou real se número do conjunto dos REAIS
    var frase = "Japão é o melhor time do mundo"
    var n1 = 5;
    var n2 = 3;
*/

/* ALERT|VARIAVEIS|CONSOLE.LOG|
alert (nome + " tem idade " + idade + " anos");
alert(idade + idade2);
console.log(nome)                                           //para criar um log interno do console do navegador, para abrir o console aperte F12 no navegador
console.log(idade + idade2)                                 //O CONSOLE SERVE PARA AVALIAR OS ERROS E CORRIGI-LOS   
console.log(frase.replace("Japão","Brasil"))                //para criar uma variável frase e trocar um item da string
alert(frase.replace("Japão","Brasil"))                    //para criar um alerta com a variável frase e trocar um item da string         
console.log(frase.replace("Japão", "Brasil").toUpperCase()) //deixa em letras maiúsculas
console.log(frase.replace("Japão", "Brasil").toLowerCase()) //deixa tudo em letras minúsculas
console.log(n1*n2)                                          
*/