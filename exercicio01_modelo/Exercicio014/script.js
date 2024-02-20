function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var bom = document.getElementById('bom')
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotodia.png'
        document.body.style.background = '#abd2ff'
        bom.innerHTML = '<strong>Bom Dia!!!</strong>'
    } else if ( hora >= 12 && hora <18) {
        //boa tarde dd8028
        img.src = 'fototarde.png'
        document.body.style.background = '#dd8028'
        bom.innerHTML = '<strong>Boa Tarde!!!</strong>'
    } else {
        //boa noite 0c0f25
        img.src = 'fotonoite.png'
        document.body.style.background = '#0c0f25'
        bom.innerHTML = '<strong>Boa Noite!!!</strong>'
    }
}
