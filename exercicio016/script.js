
var ini = document.querySelector('div#inicio')
var f = document.querySelector('div#fim')
var p = document.querySelector('div#pas')
var res = document.querySelector('div#res')
for (i = ini ; i <= f; i = i + p) {
    res.innerHTML = ` ${i},`
}