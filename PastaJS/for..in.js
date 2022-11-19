let carro={nome:"FastBack",marca:"Fiat",valor:150000, ano:2023};

for (let dados in carro){
    if (dados=="valor"){
        let preco=dados;
        let desconto=(carro[preco]*0.05)
        console.log('Carro sai por:'+(carro[preco]-desconto))
    }
}

console.log('\n For e For..in \n');


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

console.log('\n Imprimindo Categoria com For OF \n');

let categorias=[
    {id: 1, nome: "Ficção científica"},
    {id: 2, nome: "Aventura"},
    {id: 3, nome: "Comédia"},
    {id: 4, nome: "Terror"},
    {id: 5, nome: "Drama"}
];


for (let categoria of categorias){

    console.log(categoria.id);
    console.log(categoria.nome);

    console.log("\n");

}

console.log('\n Imprimindo dados de clientes com For OF \n');


let clientes_banco=[
    {id:1,nome:"Jucelia",saldoConta:25000},
    {id:2,nome:"Marcos",saldoConta:5000},
    {id:3,nome:"Jose",saldoConta:200},
    {id:4,nome:"Auristela",saldoConta:500000},
    {id:5,nome:"Thiago",saldoConta:2000},
]

for (let cliente of clientes_banco){
    console.log(cliente.nome+' contém um saldo de:'+cliente.saldoConta)
}

console.log('\n Percorrendo uma colção de produtos \n');

let colecao_produtos=[
    {nome:'Mouse',valor:200},
    {nome:'Teclado',valor:500},
    {nome:'Monitor',valor:1000},
    {nome:'HeadSet',valor:350}
];
let desconto=0.1;

for (let produto of colecao_produtos ){
    let novo_valor=produto.valor-(produto.valor*desconto);

    console.log(`O valor com desconto do ${produto.nome} ficou de :${novo_valor}`)
}

console.log('\n Fazendo medias com For..OF \n');


let medias=[8,7,1,4,1];
let total=0;
for (let resul of medias){
    total=total+resul
    
}
let media=total/medias.length

console.log('Media:'+media)

if (media>=7){
    console.log('Aprovado')
}else if (media>=5){
    console.log('Recuperação')
}else{
    console.log('Reprovado')
}