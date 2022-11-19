let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
];
for (let curso of cursos_idiomas){
    console.log('Nome do curso: '+curso.nome)
    console.log('Carga horaria: '+curso.carga_horaria+' horas')
    console.log('Preço: '+curso.preco+',00')
    let valor=curso.preco/curso.carga_horaria

    if (valor>=15){
        console.log('Valor hora/aula superior ou igual a R$15,00')
    }else{
        console.log('Valor hora/aula inferior a R$15,00')
    }
    console.log('\n')
}