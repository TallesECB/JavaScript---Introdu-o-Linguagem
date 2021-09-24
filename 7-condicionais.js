console.log('Trabalhando com condicionais');
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
console.log("Destionos possíveis:");
console.log(listaDeDestinos);


//IF básico
if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);
}else{
    console.log("Não é maior de idade e não posso vender");
}

console.log(idadeComprador < 18); //menor 
console.log(idadeComprador > 18); //maior
console.log(idadeComprador <= 18); //menor ou igual
console.log(idadeComprador >= 18); //maior ou igual
console.log(idadeComprador == 18); //igual

const estaAcompanhada = true; //exemplo utilizado para fazer a condição de compra ou não
const estaAcompanhadaEmbarque = false; //exemplo utilizado para permitir ou não embarque
const temPassagemComprada = true;

//if encadeado 
if (idadeComprador >= 18) {
    console.log("Comprador maior de idadade");
    listaDeDestinos.splice(1,1); // removendo item
}else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado - Vendido");
    listaDeDestinos.splice(1,1); //removedo item
} else {
    console.log("Não é maior de idade e não posso vender");
}

//utilizando operadores
if (idadeComprador >= 18 || estaAcompanhada == true) { 
    console.log("Comprador maior de idade");
} else {
    console.log("Não é maior de idade e não posso vender");
}


console.log("Embarque: \n")
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar devido a ser menor de idade e não estar acompanhado");
} 