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

/*let numAd;

let Ad = Math.floor(Math.random()*100)+1;

do{
    numAd = entradaDados.questionInt('Adivinhe um número de 1 à 100: ');
    if(numAd === Ad){
        console.log('Parabéns! Você adivinhou o número.')
    }else if(numAd < Ad){
        console.log('Tente número maior.')
    }
}while(numAd !== Ad);*/

let nome = input.question(`Informe o nome da ${i}ª pessoa: `)
let salario = input.questionFloat(`Informe o salario nome de ${nome}: `)
let impostoRenda = 0


const pessoa = {
    nome: 'fulano',
    idade: 6,
    sexo: 'BB_Reborn'
}
for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`) 
}

let cores = ['Azul', 'Amarelo', 'Verde', 'Vermelho', 'Transparente']
