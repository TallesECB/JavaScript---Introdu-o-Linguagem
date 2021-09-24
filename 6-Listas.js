console.log(`Trabalhando com listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log(`Destinos possíveis`);
console.log(salvador, saoPaulo, rioDeJaneiro);


const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) 


// listaDeDestinos = 2;  se tentarmos modificar o valor desta variavel, não dá, dá erro

//listaDeDestinos.splice(2,1); serve para excluir os itens, o primeiro numero é a partir de qual posição o segundo a quantidade 
//(exemplo - Curitiba 0, Salvador 1, São Paulo 2, Rio de Janeiro 3) um splice(3,1) deletaria apenas o RJ, um splice(2,2) deletar São Paulo e Rio de Janeiro
//um splice (2,1) deletar apenas São Paulo

//listaDeDestinos.splice(3,1);

console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);
