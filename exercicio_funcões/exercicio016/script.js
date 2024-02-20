var array = []

function adicionar() {
    let n =  document.getElementById('txtn')
    let num = Number(n.value)
    let sel = document.getElementById('selec')
    
    if ((num > 0 && num < 100) && (array.indexOf(num) == -1)) {
        let item = document.createElement('option')
        item.text = `valor adicionado: ${num}`
        sel.appendChild(item)
        array.push(num)
    } else if (array.indexOf(num) != -1) {
        alert(`Numero ${num} ja foi adicionado!!`)
    } else {
        alert(`ERRO!! Considere usar numeros dentre os requisitos!`)     
    }
    n.value = ''
    n.focus()
}

function finalizar() {
    var res = document.getElementById('res')
    
    if (array == 0) {
        alert(`ERRO!! Adicione os números a sua lista!`)
    } else {
        array.sort((a, b) => a - b)
    let maior = array[array.length - 1]
    let menor = array[0]
    let soma = 0  
    for (i = 0; i < array.length; i++) {
        soma = soma + array[i]
        console.log(soma)
    }
    let media = soma / array.length

    res.innerHTML = ''
    
    res.innerHTML += `<p>Total de números adicionados: ${array.length}.</p>`
    res.innerHTML += `<p>O maior valor informado: ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado: ${menor}.</p>`
    res.innerHTML += `<p>A soma de todos os valores: ${soma}.</p>`
    res.innerHTML += `<p>A media de todos os valores: ${media}.</p>`
    }
    
}

