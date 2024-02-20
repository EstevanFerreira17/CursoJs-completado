let num = [2,9,10,1,57]

/*//adicionar numero:
    num[4] = 7
      //ou
    num.push(7)  //.push: manda pro final da sequencia

//saber o comrprimento da array:
    num.length 
    console.log(`comprimento da array num: ${num.length}`)

//ordenar numeros em ordem crescente
    num.sort()

console.log(num)
num.sort((a,b) => a - b)

for (var i=0; i<num.length; i++) {
    console.log(`valor na posição ${i}: ${num[i]}`)
}

//ou (so funciona com arrays):

for (var i in num) {
    console.log(`valor na posição ${i}: ${num[i]}`)
}*/
var n = 57
var cont = num.indexOf(n)
if (cont == -1) {
   console.log('Numero nao encontrado!')
} else {
    console.log(`o numero ${n} foi encontado na posição ${cont} do array "num": `)
    console.log(num)
}



