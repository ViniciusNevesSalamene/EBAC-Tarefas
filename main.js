const form = document.getElementById('form-num')

function biggernum(a,b){
    if (a > b) {
        return false
    }else if (a < b) {
        return true
    }else{
        return 'equals'
    }
}
form.addEventListener('submit',function (e){
    e.preventDefault();
    var numA = document.getElementById('num-A')
    var numB = document.getElementById('num-B')
    var isbigger = biggernum(numA.value, numB.value)
    if (isbigger){
        alert('VERDADEIRO!!!\nO número B é maior que o número A')
    }else if (isbigger == 'equals') {
        alert('FALSO!!!\nO número B é igual ao número A')
    }else{
        alert('FALSO!!!\nO número B é menor que o número A')
    }
    numA.value = ''
    numB.value = ''
})