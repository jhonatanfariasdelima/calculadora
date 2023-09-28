// Função para testar igualdade entre valores e exibir mensagens de erro
function test(descricao, valorEsperado, valorObtido) {
  if (valorEsperado === valorObtido) {
    console.log(`✅ [Passou] ${descricao}`);
  } else {
    console.error(`❌ [Falhou] ${descricao}`);
    console.error(`  Valor esperado: ${valorEsperado}`);
    console.error(`  Valor obtido: ${valorObtido}`);
  }
}

// Inicialize variáveis globais para teste
var total = [0, 0, 0];
var operacao = '';

// Função de teste para a função mostrador_calculo
function testMostradorCalculo() {
  total = [5, 0, 0];
  operacao = '+';

  mostrador_calculo();

  test('deve definir o mostrador de cálculo corretamente', '5+0', document.getElementById('mostrador_calculo').value);
}

// Função de teste para a função dig_teclado
function testDigTeclado() {
  var e = { keyCode: 65 }; // Tecla "A"

  var resultado = dig_teclado(e);

  test('deve bloquear letras ao digitar', false, resultado);

  e = { keyCode: 50 }; // Tecla "2"
  resultado = dig_teclado(e);

  test('deve permitir números ao digitar', true, resultado);
}

// Função de teste para a função calculo
function testCalculo() {
  total = [5, 2, 0]; // Total = 5+2

  calculo();

  test('deve realizar uma adição correta', '7', document.getElementById('resultados').value);
}

// Execute os testes
testMostradorCalculo();
testDigTeclado();
testCalculo();
