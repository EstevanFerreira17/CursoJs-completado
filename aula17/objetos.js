let amigo = {
 nome: 'Estevan',
 sexo: 'M',
 peso: 75,
 pika: 15,
 ganhar(g=0) {
    this.pika += g
 }
}

let cm = 2
amigo.ganhar(cm)
console.log(`${amigo.nome} ganhou ${cm}cm de pika, agora ele tem ${amigo.pika}cm`)