console.log('Imprimindo com Continue\n')
let funcionarios=[
    {id:1,nome:"Luan",salario:8700},
    {id:2,nome:"Zeca",salario:2000},
    {id:3,nome:"Xande",salario:3000},
    {id:4,nome:"Mateus",salario:3700},
    {id:5,nome:"Wesley",salario:1700},
]
let contador=0;
let contador2=0;


do{
    
    let funcionario=funcionarios[contador];
    contador++;
    if (funcionario.salario<3500){
        console.log("O funcionario: "+funcionario.nome+", com salario de :"+funcionario.salario)
        continue;
    }
    
}while(contador<funcionarios.length);

console.log('\nImprimindo com Break:\n')


do {
    let funcionario=funcionarios[contador2];
    contador2++;
    if (funcionario.salario>8000){
        console.log("O funcionario: "+funcionario.nome+", com salario de :"+funcionario.salario);
        break;
    }
}while(contador2<funcionarios.length)


console.log('\nImprimindo com For:\n')


for (let contadorFor=0;contadorFor<funcionarios.length;contadorFor++){
    let funcionarioMensal=funcionarios[contadorFor];
    if (funcionarioMensal.id>3){
        console.log("id: "+funcionarioMensal.id+" ,Nome: "+ funcionarioMensal.nome);
        continue;
    }
}