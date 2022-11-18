

let funcionarios=[
    { id:1, nome:"Carlos",habilitado:false},
    { id:2,nome:"Hercules",habilitado:false},
    { id:3,nome:"Alexandre",habilitado:false},
    { id:4,nome:"Robson Luan",habilitado:true},
    { id:5,nome:"Mateus",habilitado:false},
    { id:6,nome:"Wesley",habilitado:false},
    
];

let contador=0,contadorNovo=0;

//Estrutura com uso do break
while(contador<funcionarios.length){
    if (funcionarios[contador].habilitado==true){
        console.log("O funcionario: "+funcionarios[contador].nome)
        console.log("antes do break"+contador)
        break;  
    };
    contador++
    console.log("apos do break"+contador)
}

//Estrutura com o uso do Continue
 while(contadorNovo<funcionarios.length){
    let funcionarioAtual=funcionarios[contadorNovo];
    contadorNovo++;
    if (funcionarioAtual.habilitado==false){
        continue;

    }
    console.log("Id do funcionario:"+funcionarioAtual.id)
    
    
 }