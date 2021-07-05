function digito(num){
  calculadora.caixa.value += num;
  calculadora.caixa.focus();
}

function zerar(){
  calculadora.caixa.value = '';
  calculadora.caixa.focus();
}

function executar(){
  calculadora.caixa.value = eval(calculadora.caixa.value);
}

function apagar(){
 caixa = calculadora.caixa.value;
 back = calculadora.caixa.value.length - 1;
 calculadora.caixa.value = caixa.substring(0,back);
}