console.log('Trabalhando com Loops')
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2,1); 
    temPassagemComprada = true;
} else {
    console.log("Não é maior de Idade e não posso vender");
    temPassagemComprada = false;
}

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

//loop que irá mostrar apenas um dos dentinos, o 0 que no caso é salvador
let contador = 0;
while(contador<3){
    console.log(listaDeDestinos[contador]);
    contador += 1;
    if(contador == 3) {
        // se o if fosse igual a 2 iria mostrar apenas salvador e são paulo quando ele fizesse o condicional iria dar contador == 2 
        //mas n teria printado ainda pois o console . log vem antes e iria entrar pro break, se colocar == 3 ele ainda mostra um undefined pois n temos o valor 2 no array, 
        //já que rio de janeiro foi deletado no slice anterior.
        break
    }
}



//para mostrar os outros destinos precisando de um contador para acrescenter mais um a variavel e ir passando pelo array
contador = 0; 
while(contador<3){
    if(listaDeDestinos[contador] == 'São Paulo'){
        console.log("Destino existe") 
    }else{ 
        console.log("Destino não existe");
    }
    contador += 1;
} 

contador = 0;
let destinoExiste = false
while(contador<3){ //while de exemplo da utilização do break e encerrando após o contador chegar ao condicional de encerramento do while

    if(listaDeDestinos[contador] == destino){ //essa variavel de destino tem como conteudo dentro dela, 'Curitiba' a qual não está no array, então o destino não existe
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
    console.log(contador)
}        

console.log("Destino existe: ", destinoExiste); //debbuger




if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}


while(contador<3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}


for(let cont = 0 ; cont <3 ; cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        }
}



for(let i = 0 ; i <3 ; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        }
}