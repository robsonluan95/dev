let pokemon='PiKaChu!'

console.log(pokemon.toLowerCase())
console.log(pokemon.toUpperCase())

console.log(`\nSem o uso do trim()\n `);
// Método trim();

let num1='(87)99473365';
let num2='  (87)99473365   ';

if (num1==num2){
    console.log('Iguais');
}else{
    console.log('Diferentes');
}
num3=num2.trim();
console.log(`\nCom o uso do trim()\n `);
if(num1==num3.trim()){
    console.log('Iguais apos o uso do Trim()')
}else{
    console.log('Fez algo de errado')
}

console.log('\n Uso de SUBSTR() - SUBSTRING()\n');

let frase='Eu vou conseguir isso é uma promessa!';
console.log('\nEu vou conseguir isso é uma promessa!\n');

console.log(frase.substr(3,13)+': Imprimindo (3.13) da frase');
console.log(frase.substring(3,13)+': Imprimindo a mesma (3,13) da frase');
console.log('So pra entender que imprimir substring voce digita o inicio e quantas deseja e substring o indece inicial e final\n');


let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamamho=conteudo.length// dando a variavel o tamanho da string
let resumo='';//Declarando uma variavel que ira ser usada   

if (tamamho>100){
    resumo=conteudo.substr(0,97);
    resumo=resumo+'...';

}else {
    resumo=conteudo;
}

console.log(resumo);

console.log('\n Uso do indexOf\n')

let usandoIndexOF='Brasil o pais do futebol';

let retornoFrase=usandoIndexOF.indexOf('pais')
console.log(retornoFrase)

console.log('\n Uso do split()\n')

let paises_string = "Brasil Espanha Canadá Irlanda Suíça";

let paises_array = paises_string.split(" ");

console.log(paises_array);