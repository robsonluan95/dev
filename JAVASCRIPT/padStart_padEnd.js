let marca="Fiat";
let carro="FastBack";

let labelPreco='Valor';
let valorPreco=150000;

console.log(marca.padEnd(20,"-")+carro);
console.log(labelPreco.padEnd(20,"-")+valorPreco);
console.log('\n Troca usando REPLACE() \n');

let texto='Upa Upa POKOTO, FICA DE 4 Nos bota sem nó';
let trocaTexto=texto.replace('FICA','Vai')
console.log(trocaTexto)