let apartamento = {
    quartos: 2,
    tipo: 'Apartamento',
    endereco: 'Avenida Principal, 456 - Centro',
    andar: 7,
}

console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}° andar na ${apartamento.endereco}.`)

let produtoEmbalado = {
    nome: 'Laptop HP',
    categoria: 'Eletrônicos',
    peso: 1.5,
    preco: 3500.00,
}

console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso}kg, está à venda por R$${produtoEmbalado.preco.toLocaleString('pt-Br', {style:'currency', currency: 'BRL'})}.`)

class Imovel {
    constructor(quartos,tipo,endereco){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereco = endereco;
    }
    exibirInformacoes(){
    return `${this.tipo} com ${this.quartos} quartos, localizado(a) na ${this.endereco}.`;
    }
}

let casa = new Imovel(2, 'Sobrado', 'Centro');
console.log(casa.exibirInformacoes())

let ap = new Imovel(3, 'Apartamento', 'periferia')
console.log(ap.exibirInformacoes())