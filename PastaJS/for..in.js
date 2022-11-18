let carro={nome:"FastBack",marca:"Fiat",valor:150000, ano:2023};

for (let dados in carro){
    if (dados=="valor"){
        let preco=dados;
        let desconto=(carro[preco]*0.05)
        console.log('Carro sai por:'+(carro[preco]-desconto))
    }
}

console.log('For e For..in');


let alunos=[
    {id:1,nome:'Robson',funcao:"FullStack"},
    {id:2,nome:'Zeca',funcao:"Back"},
    {id:3,nome:'Xande',funcao:"Back"},
    {id:4,nome:'Mateus',funcao:"FullStack"},
    {id:5,nome:'Wesley',funcao:"Back"}
];


for(let cont=0;cont<alunos.length;cont++){
    let aluno=alunos[cont];
    for (let idNumero in aluno){
        if (idNumero=="id"){
            console.log('É funcionario da nossa empresa:'+aluno.nome);
        }
    }
}