//document.querySelector seleciona uma tag do domento indicado com
//titulo.innerHTML e o texto que vc quer colocar na tag.

//document.querySelector seleciona uma tag do domento indicado com
//titulo.innerHTML e o texto que vc quer colocar na tag.

//função não precisa estar antes de ser acionada
let listaDenumerossorteados = [];
let maxNumber = 10;
let numeroSecreto = gerarNumeroaleatorio();
let tentativas = 1;

//simplificar o codigo
function exibirTextonatela(tag,texto){
   let substituto = document.querySelector(tag);
   substituto.innerHTML = texto;
}

//serve para n repetir o codigo
function mensageminicial(){
exibirTextonatela("h1", "Jogo do Numero secreto!")
exibirTextonatela("p", "Escolha um numero  de  1 á 10");
}
console.log(numeroSecreto);

mensageminicial();

//function serve para criar uma ação;
//não se usa while em função no botao pois nao funciona;
function verificarChute(){
   let chute = document.getElementById("unico").value;
       if(chute == numeroSecreto){
           exibirTextonatela("p","Você acertou o numero secreto era "+numeroSecreto);
           // fazer a troca caso seja plural
           let palavratentativas = tentativas > 1 ? "tentativas": "tentativa";
           exibirTextonatela("h1", "Você acertou com "+tentativas +" "+palavratentativas+" parabens.");
           document.getElementById("reiniciar").removeAttribute("disabled");
       }else if(chute > numeroSecreto){
           exibirTextonatela("p","O numero secreto é menor que "+ chute);
       }else{
           exibirTextonatela("p","O numero secreto é maior que "+ chute);
       }
       tentativas++;
       limpaCampo();
}

//limpa o campo do jogo
function limpaCampo(){
chute = document.querySelector("input");
chute.value= "";
}

//reinicia o jogo
function novoJogo(){
   numeroSecreto = gerarNumeroaleatorio();
   limpaCampo();
   tentativas = 1;
   mensageminicial();
   document.getElementById("reiniciar").setAttribute("disabled", true);
}

//gera um numero aleatorio
function gerarNumeroaleatorio() {
   let numeroEscolhido = parseInt(Math.random() * maxNumber + 1 );
   let qtdDenumerosnalista = listaDenumerossorteados.length;

   if(qtdDenumerosnalista == maxNumber){
    listaDenumerossorteados = [];
   }

   if (listaDenumerossorteados.includes(numeroEscolhido)){
    return gerarNumeroaleatorio();
   }else{
    listaDenumerossorteados.push(numeroEscolhido);
    console.log(listaDenumerossorteados);
    return numeroEscolhido;
   }
}