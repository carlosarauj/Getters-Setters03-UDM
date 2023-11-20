class Pessoa {
  constructor (nome, sobre){
    this.nome = nome
    this.sobre = sobre
  }

  get nomeCompleto(){
    return this.nome + ' ' + this.sobre
  }

  set nomeCompleto(valor){
    valor = valor.split(' ')
    this.nome = valor.shift()
    this.sobre = valor.join(' ')
  }
}

let p1 = new Pessoa ('Carlos', 'Araújo')
p1.nomeCompleto = 'Carlos Araújo Ferreira'

console.log(p1.nome)
console.log(p1.sobre)
console.log(p1.nomeCompleto)