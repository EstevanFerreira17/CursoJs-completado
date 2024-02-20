function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background = '#071357'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'homemcrianca.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //velho
                img.setAttribute('src', 'homemvelho.png')
            }
        } else {
            genero = 'Mulher'
            document.body.style.background = '#96013a'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'mulhercrianca.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                //velho
                img.setAttribute('src', 'mulhervelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos:   ' + genero + ' com ' + idade + ' anos!'
        res.appendChild(img)

    }
}