import input from 'readline-sync';
Math.random()

let num = input.questionInt('Informe o número para gerar a tabuada: ');
let cont = 1;
while (cont <= 10) {
    console.log(`----Tabuada do número ${num} X ${cont} = ${num*cont}`);
    cont++;
}

let alu = input.questionInt('Informe o número de alunos: ');

let contAlun = 1;
let contNot = 0;

while (contAlun <= alu) {
    console.log(`Aluno ${contAlun}`);

    let contBrimnstrom = 1;
    let somaMedias = 0;

    while (contBrimnstrom <= 4) {
        let nota = input.questionInt(`Informe a nota do ${contBrimnstrom}º Bimestre do aluno ${contAlun}: `)
        somaMedias = somaMedias+nota;
        contBrimnstrom++;
        
    }

    let mediaaluno = somaMedias/4;
    contNot+=mediaaluno;
    console.log(`Media do Aluno ${contAlun}: ${mediaaluno.toFixed(2)}`)
    contAlun++;
}
let mediageralturma = contNot/contAlun
console.log(`Média Geral da Turma: ${mediageralturma.toFixed(2)}`)


const numAlea = Math.floor(Math.random()*100)+1;
let chute;

do {
    chute= input.questionInt('tente adivinhar o número (entre 1 e 100): ')
    if(chute === numAlea) {
        console.log('parabens! você acertou o número ')

    } else if(chute<numAlea) {
        console.log('Tente um numero maior')
    } else {
        console.log('Tente um numero menor')
    }

} while (chute !== numAlea);


let imp = 1;
let nome = input.question(`informe o nome da ${imp}° pessoa: `)
let salario= input.questionInt(`Informe o seu salario de ${nome}: `)

if (salario < 2100){
    imp = 0;
}else if (salario <= 2000){
    imp = salario * 0.075;
}else if (salario <= 3750){
    imp = salario * 0.15;
}else if (salario <= 4660){
    imp = salario * 0.225;
}else{
    imp = salario * 0.275;
}

console.log(`\n--- Imposto de renda a ser pago---`);
console.log(`Nome: ${nome} \nImposto de renda: R$ ${imp.toFixed(2)}\n`);