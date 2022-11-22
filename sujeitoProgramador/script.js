// let nome=prompt("Qual seu nome:")
// console.log(nome)
// document.write('<h1>Bem vindo '+nome+',programador</h1>')



//Trabalhando com funções

function login() {
    let nome=prompt('Seu nome: ')
    

    if(nome==''|| nome==null){
        alert('Opa voce não digitou nada')
    }else{
        area.innerHTML=nome+" online " //Feito para escrever no local do ID =AREA
        //Para Criar um novo elemento:::

        let botaoSair=document.createElement("button")//Aqui eu crio uma variavel e com ela é criado um elemento do tipo botao
        botaoSair.innerHTML="Sair"//Aqui é selecionado o botao e o que sera escrito nele 
        botaoSair.onclick=sair;//Nessa area estamos fazendo o chamadode outra função
        area.appendChild(botaoSair)//aqui selecionado onde vai ser adicionado e o que adicionar
    }
}

function sair() {
    area.innerHTML="Ate logo...s";

}