import entradaDados from 'readline-sync';

let valor=entradaDados.question('Valor: ');
let parcelas=entradaDados.question('Total de pacelas: ');

for (let contador=1;contador<parcelas;contador++){
    let valorParcela=valor/contador;
    console.log("Nº de parcelas:"+contador+" com o valor "+valorParcela.toFixed(2))
}
// Estrutura de Repetição com While

let cont=0;
while(cont<10){
    console.log("Contador nº:"+cont);
    cont++;
}

//Percorrendo um array com while;

let funcionarios=['Luan','Magno','Zeca'];
let contadorNovo=0;
while(contadorNovo<funcionarios.length){
    console.log("Nosso Funcionario é: "+funcionarios[contadorNovo])
    contadorNovo++
};

//Criando um sistema de repetição que imprima quando o numero for impar ou par

let numeros=[1,2,3,4,5,6,7,8,9,10,11,22,33,44,55];
let novoContador=0 ;

while(novoContador<numeros.length){
    if (numeros[novoContador]%2===0){
        console.log(numeros[novoContador]+": esse numero é par")
    }else{
        console.log(numeros[novoContador]+": esse numero é impar")
    }
    novoContador++;
}