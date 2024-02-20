var agora = new Date()
var hora = agora.getHours
if (hora >= 18) {
    console.log('Agora são ' + hora + ' PM.')
    console.log('Boa Noite')
} else if (hora >= 12) {
    console.log('Agora são ' + hora + ' PM.')
    console.log("Boa Tarde")
} else if (hora >= 6) {
    console.log('Agora são ' + hora + ' AM.')
    console.log('Bom diaa!')
} else {
    console.log('Agora são ' + hora + ' AM.')
    console.log('Boa Madrugada!')
}
