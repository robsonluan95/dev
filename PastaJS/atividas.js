// let cursos_idiomas=
//  [
//     { nome: "Inglês", preco: 2500, carga_horaria: 160 },
//     { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
//     { nome: "Francês", preco: 3600, carga_horaria: 200 },
//     { nome: "Chinês", preco: 5500, carga_horaria: 400 },
//     { nome: "Alemão", preco: 3800, carga_horaria: 230 }
// ];

// for (let curso of cursos_idiomas){

    
// let nome_curso= curso.nome;
    
// let preco_curso= curso.preco;
    
// let carga_horaria_curso= curso.carga_horaria;

//     let preco_hora_curso = preco_curso/carga_horaria_curso;

//     console.log("Nome do curso: " + nome_curso);
//     console.log("Carga horária do curso: " + carga_horaria_curso + " horas");
//     console.log("Preço do curso: R$" + preco_curso + ",00");

    
//     if(preco_hora_curso>=15){
//         console.log("Hora/aula superior ou igual a R$15,00");
//     } else {
//         console.log("Hora/aula inferior a R$15,00");
//     }

//     console.log("\n");

// }

// let contador = 0;

// do{

//     console.log(contador);
//     contador++;

// } while(contador<=5);


// let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// let contador = 0;

// for ( let propriedade in meses ) {

//     console.log(mes[propriedade]);
//     contador++;
// }

// let disciplinas = [
//     { id: 1, nome: "português", carga_horaria: 250 },
//     { id: 2, nome: "matemática", carga_horaria: 220 },
//     { id: 3, nome: "história", carga_horaria: 150 },
//     { id: 4, nome: "geografia", carga_horaria: 150 },
//     { id: 5, nome: "inglês", carga_horaria: 70 }
// ];

// for (let disciplina of disciplinas ){

//     let id_disciplina = disciplina.id;
//     let nome_disciplina = disciplina.nome;
//     let carga_horaria_disciplina = disciplina.carga_horaria;

//     console.log("Id da disciplina: " +id_disciplina );
//     console.log("Nome da disciplina: " +nome_disciplina);
//     console.log("Carga horária da disciplina: "+carga_horaria_disciplina );

//     console.log("\n");

// }


// let produtos=[
//     { id: 1, nome: "pizza", preco: 50 },
//     { id: 2, nome: "macarronada", preco: 25 },
//     { id: 3, nome: "lasanha", preco: 45 },
//     { id: 4, nome: "nhoque", preco: 30 }
// ];

// let desconto = 5;

// for (let contador=0; contador<produtos.length ;contador++){

//     let produto = produtos[contador];
    
//     for(let propriedade in produto){

//         if ( propriedade == "preco" ) {

//             let preco = propriedade;

//             let novo_preco = produto[preco] - desconto;

//             console.log("preço atualizado: R$" + novo_preco + ",00");

//         } else {

//             console.log(propriedade + ": " + produto[propriedade]);
//         }

//     }

//     console.log("\n");
// }

// let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

// let percentual_desconto = 5;

// for ( let propriedade in carro ) {

//     if ( propriedade == "preco" ) {

//         let preco = propriedade;
//         console.log(preco)

//         let desconto = ( carro[preco] * percentual_desconto ) / 100;

//         let novo_preco = carro[preco] - desconto;

//         console.log("novo preço: R$" + novo_preco + ",00");

//     } else {

//         console.log(propriedade + ": " + carro[propriedade]);

//     }

// }

// let meses
//  = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// for(let contador=0;contador<meses.length;contador++)
//  {

//     console.log(meses[contador]);

//     if ( 
// meses[contador]
//  == "Junho" ) {
//         break;
//     }

// }

// let produtos_array = [
//     { id: 1, nome: "mouse", preco: 50 },
//     { id: 2, nome: "teclado", preco: 90 },
//     { id: 3, nome: "monitor", preco: 350 },
//     { id: 4, nome: "nobreak", preco: 600 },
// ];

// let percentual_desconto = 10;

// for ( let produto of produtos_array ) {

//     let nome = produto.nome;
//     let preco = produto.preco;

//     let valor_desconto = (preco * percentual_desconto) / 100;
//     let novo_preco = preco - valor_desconto;

//     console.log("Novo valor do produto " + nome + ": R$" + novo_preco + ",00");

// }


// let produtos=[
//     { id: 1, nome: "pizza", preco: 50 },
//     { id: 2, nome: "macarronada", preco: 25 },
//     { id: 3, nome: "lasanha", preco: 45 },
//     { id: 4, nome: "nhoque", preco: 30 }
// ];

// let desconto = 5;

// for (let contador=0;contador<produtos.length;contador++){

//     let produto = produtos[contador];

    
// for (let propriedade in produto ){

//         if ( propriedade == "preco" ) {

//             let preco = propriedade;

//             let novo_preco = produto[preco] - desconto;

//             console.log("preço atualizado: R$" + novo_preco + ",00");

//         } else {

//             console.log(propriedade + ": " + produto[propriedade]);
//         }

//     }

//     console.log("\n");
// }

// let livros = ["Dom Quixote","Guerra e Paz ","A Montanha Mágica","Cem Anos de Solidão"];
// let contador = 0;

// while ( contador < livros.length ) {

//     console.log(livros[contador]);
//     contador++;

// }

let aluno = [{ nome: "Marcos", email: "marcos@email.com", idade: 25 }, { nome:"ssda", email: "marsscos@email.com", idade: 5 }]

// for(let dados in aluno){
//     console.log(aluno[dados]);
// }

for(let dados2 of aluno){
    console.log(dados2)
}