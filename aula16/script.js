var n = 10
var array = [1,2,5,4,7,9]
var filtro

// filtro para nao ter numero repetido
for (var i = 0; i < array.length; i++) {

    if ( n == array[i] ) {
        // se o Nº escolhido for igual a outro dentro do array, teste recebe 0
        console.log('Adicione numeros que ainda nao esteja na sua lista')
        filtro = 0

    } else {
        //senao, o teste recebe o numero que foi escolhido
        filtro = n

    }
}
     //teste se o numero escolhido é diferente de 0, se for, ele sera add no array
    if (filtro == 0) {
        console.log('erro')
    } else {
        array.push(filtro)
    }

console.log('array final: '+array)




/*var arrayN = ['']

        function adicionar() {

            var select = document.getElementById('select')
            //numero do input
            var n = Number(document.getElementById('txtn').value)

            //filtro
            if (n <= 0 || n > 100) {
                alert('Digite um numero dentro dos requisitos(entre 1 e 100)')
            } else {

                var filtro = 0

            for (var i = 0; i <= arrayN.length; i++) {
                if ( n == arrayN[i] ) {
                    alert('Adicione numeros que ainda nao esteja na sua lista')
                    filtro = 0
                } else {
                    alert('o numero foi para o filtro')
                    filtro = n       
                }
                i = 0
            }
                
                
                
                
                //teste se o numero escolhido é diferente de 0, se for, ele sera add no array
                if (filtro == 0) {
                    alert('nao foi escolhido')
                } else {
                    arrayN.push(filtro)
                    alert('foi escolhido')
                }
                
                //Mostar no select
                var item = document.createElement('option')
                item.text = `valor adicionado: ${arrayN}`
                select.appendChild(item)
                alert(arrayN)
            }
            
            
        }*/

//mostrar o total de numeros cadastrados
//o maior valor
//o menor valor
//a soma de todos os valores
//a media dos valores