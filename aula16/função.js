function parimp(n) {
    if (n%2==0) {
        return `O número ${n} é PAR!`
    } else {
        return `O número ${n} é IMPAR!`
    }
}

var n = 7
var res = parimp(n)
console.log(res)