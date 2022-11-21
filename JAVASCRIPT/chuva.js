const chuvas_meteoros = [
    { nome: "Alfa Centaurídeos",            pico: "Fev 8",   velocidade: "56 km/s"},
    { nome: "Gama Normídeos",                pico: "Mar 14",  velocidade: "56 km/s"},
    { nome: "Pi Pupídeos",                               pico: "Abr 23",  velocidade: "18 km/s"},
    { nome: "Eta Aquáridas",                       pico: "Mai 5",   velocidade: "66 km/s"},
    { nome: "Alfa Capricornídeos",          pico: "Jul 30",  velocidade: "23 km/s"},
    { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",  velocidade: "41 km/s"},
    { nome: "Piscis Austrinídeos",                         pico: "Jul 28",  velocidade: "35 km/s"},
    { nome: "Fenícidas",                    pico: "Dez 6",   velocidade: "18 km/s"},
    { nome: "Pupidas-Velidas",                   pico: "Dez 12",  velocidade: "40 km/s"}
];

console.log('=== CHUVA DE METEOROS - HEMISFÉRIO SUL ===\n')


for (const chuva of chuvas_meteoros){
    let nome_local=chuva.nome;
    let pico_local=chuva.pico;
    let velocidade_local=chuva.velocidade.replace('km/s', 'quilômetros por segundo ');
    
    let picos=pico_local.split(' ')
    console.log(picos[0]+' : '+picos[1])

    let pico_Mes=picos[0];
    let pico_Dia=picos[1];

    pico_mes_Nome='';

    switch(pico_Mes){
        case 'Jan':
            pico_mes_Nome='Janeiro'
            break;
        case 'Fev':
            pico_mes_Nome='Fevereiro'
            break;
        case 'Mar':
            pico_mes_Nome='Março'
            break;
        case 'Abr':
            pico_mes_Nome='Abril'
            break;
        case 'Mai':
            pico_mes_Nome='Maio'
            break;
        case 'Jun':
            pico_mes_Nome='Junho'
            break;
        case 'Jul':
            pico_mes_Nome='Julho'
            break;
        case 'Ago':
            pico_mes_Nome='Agosto'
            break;     
        case 'Set':
            pico_mes_Nome='Setembro'
            break;  
        case 'Out':
            pico_mes_Nome='Outubro'
            break;  
        case 'Nov':
            pico_mes_Nome='Novembro'
            break;  
        case 'Dez':
            pico_mes_Nome='Dezembro'
            break;  
        default:
            pico_mes_Nome='Mês inválido';
            break;
    }

    console.log('Nome:'.padEnd(30,'.')+nome_local)
    console.log('Pico:'.padEnd(30,'.')+pico_Dia+' de '+pico_mes_Nome)
    console.log('Velocidade:'.padEnd(30,'.')+velocidade_local)
    console.log('\n')
}