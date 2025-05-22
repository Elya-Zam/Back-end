import input from 'readline-sync';

let dia = input.question('Informe um dia da semana (em números): ')

switch(dia){
    case '1':
        console.log('Domingo')
        break;
    case '2':
        console.log('Segunda')
        break;
    case '3':
        console.log('Terça')
        break;
    case '4':
        console.log('Quarta')
        break;
    case '5':
        console.log('Quinta')
        break;
    case '6':
        console.log('Sexta')
        break;
    case '7':
        console.log('Sabado')
        break;
    default:
        console.log('Semana so vai ate sabado(7)')       
}

let mes = input.question('Informe um mes do ano (em números): ')

switch(mes){
    case '1':
        console.log('Janeiro')
        break;
    case '2':
        console.log('Fevereiro')
        break;
    case '3':
        console.log('Março')
        break;
    case '4':
        console.log('Abril')
        break;
    case '5':
        console.log('Maio')
        break;
    case '6':
        console.log('Junho')
        break;
    case '7':
        console.log('Julho')
        break;
    case '8':
        console.log('Agosto')
        break;
    case '9':
        console.log('Setembro')
        break;
    case '10':
        console.log('Outubro')
        break;
    case '11':
        console.log('Novembro')
        break;
    case '12':
        console.log('Dezembro')
        break;
    default:
        console.log('O ano vai até o mes de Dezembro(12)')       
}

let n1 = input.questionInt('Informe um numero para o calculo: ')
let n2 = input.questionInt('Informe um numero para o calculo: ')
let sentenças = input.question('\nQual a setença matemática que você deseja utilizar: \nAdição --- digite (+) \nSubtração --- digite (-) \nMultiplicação --- digite (*) \nDivição --- digite (/) \n\nQual sentença será escolhida: ')

switch (sentenças) {
    case '+':
        console.log(`${n1} + ${n2} = ${n1 + n2}`)
        break;
    case '-':
        console.log(`${n1} - ${n2} = ${n1 - n2}`)
        break;
    case '*':
        console.log(`${n1} * ${n2} = ${n1 * n2}`)
        break;
    case '/':
        console.log(`${n1} / ${n2} = ${n1 / n2}`)
        break;
    default:
        console.log('Nós ainda não preparamos essa operação \nVolte mais tarde por favor')
        break;
}

let sau = input.questionFloat('Informe seu salário: ')
let cat = input.question('Escolha as categorias: \nA    B\nC    D\nQual será categoria escolhida: ').toUpperCase()
let bonus = 0

switch (cat) {
    case 'A':
        bonus = sau*0.05
        console.log(`O seu salario após a bonificação é ${(sau+bonus).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`)
        break
    case 'B':
        bonus = sau*0.10
        console.log(`O seu salario após a bonificação é ${(sau+bonus).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`)
        break;
    case 'C':
        bonus = sau*0.15
        console.log(`O seu salario após a bonificação é ${(sau+bonus).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`)
        break
    case 'D':
        bonus = sau*0.20
        console.log(`O seu salario após a bonificação é ${(sau+bonus).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`)
        break
    default:
        console.log('Essa opção não existe')
}