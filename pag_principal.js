var total = [0, 0, 0];
var operacao = '';

$(document).ready(function () {

	operacao_click();
	escreve_num_click();
	mostrador_calculo();
	

});


function mostrador_calculo(){
	if (total[0] != 0) {
		document.getElementById('mostrador_calculo').value = total[0];
		if (operacao != '') {
			document.getElementById('mostrador_calculo').value = total[0], operacao;
			if(total[1] != 0){
				document.getElementById('mostrador_calculo').value = total[0], operacao, total[1];
			}else{
				alert("a");
			}
		}else{
			alert("a");
		}
	}
	
};

document.addEventListener("keypress", function (e) {
	if (!dig_teclado(e)) {
		e.preventDefault();

	} else if (e.keyCode == 44) {
		if (document.getElementById('resultados').value == '') {

			document.getElementById('resultados').value = document.getElementById('resultados').value + '0';

		} else if (document.getElementById('resultados').value.indexOf(',') > 0) {

			e.preventDefault();
		}
	}

});


function verifica_operaca_em_andamento(){
	/*função que verifica o andamento de operações*/
	if(operacao == ''){
		return true;
	}else{
		document.getElementById('resultados').value = '';
		total = [0, 0, 0];
		operacao = "";
		document.getElementById('dividir').style.backgroundColor = "";
		document.getElementById('adicao').style.backgroundColor = "";
		document.getElementById('multiplicar').style.backgroundColor = "";
		document.getElementById('subtrair').style.backgroundColor = "";
		alert("por favor realize uma operação por vez");
		return false;
	}
};

function dig_teclado(e) {
	/*
	função que bloqueia a digitação do alfabeto pelo teclado, 
	e permite o uso do teclado alfanumérico (de 0 a 9) e as operações 
	aritiméticas suportadas pela calculadora (/ + * -) para digitação 
	do usuário com o teclado
	*/
	mostrador_calculo(total[0], operacao, total[1]);
	const char = String.fromCharCode(e.keyCode);
	const padrao = '[0-9]'; /*permite o uso do teclado alfanumérico (de 0 a 9)*/

	/*permite as operações aritiméticas suportadas pela calculadora (/ + * -) */
	if (e.keyCode == 44) { /*virgula*/ 
		return true;

	} else if (char.match(padrao)) {
		return true;

	}else if(e.keyCode == 45){ /*subtração*/
		if(verifica_operaca_em_andamento()){

			if (document.getElementById('resultados').value == '') {

				document.getElementById('resultados').value = document.getElementById('resultados').value;

			} else {
				total[0] = document.getElementById('resultados').value /*adiciona o primeiro numero a lista na possição 0*/

				document.getElementById('subtrair').style.backgroundColor = "cyan"; /*muda a cor do botão para 
																		identificar a operação atual para o usuario*/

				document.getElementById('resultados').value = '';

				operacao = '-';  /*operação de subtracao*/
				mostrador_calculo();
				console.log(total[0], operacao, total[1]);
				
			}
		};
	}else if(e.keyCode == 43){ /*soma*/
		if(verifica_operaca_em_andamento()){
			
			if (document.getElementById('resultados').value == '') {

				document.getElementById('resultados').value = document.getElementById('resultados').value;

			} else {
				total[0] = document.getElementById('resultados').value 

				document.getElementById('adicao').style.backgroundColor = "cyan"; 

				document.getElementById('resultados').value = '';

				operacao = '+';  /*operação de soma*/
				
			}
		};
	}else if(e.keyCode == 47){ /*divisão*/
		if(verifica_operaca_em_andamento()){
			if (document.getElementById('resultados').value == '') {

				document.getElementById('resultados').value = document.getElementById('resultados').value;

			} else {
				total[0] = document.getElementById('resultados').value 

				document.getElementById('dividir').style.backgroundColor = "cyan"; 

				document.getElementById('resultados').value = '';

				operacao = '÷';  
			}
		}
	}else if(e.keyCode == 42){  /*multiplicação*/ 
		if(verifica_operaca_em_andamento_em_andamento()){
			if (document.getElementById('resultados').value == '') {

				document.getElementById('resultados').value = document.getElementById('resultados').value;

			} else {
				total[0] = document.getElementById('resultados').value 

				document.getElementById('multiplicar').style.backgroundColor = "cyan"; 

				document.getElementById('resultados').value = '';

				operacao = 'x';  
				
			}
		}
	}else if(e.keyCode == 13){  /*enter*/
		calculo();
		
	}
};


function operacao_click() {
	
	$("#subtrair").click(function () {
		if(verifica_operaca_em_andamento()){
			if (document.getElementById('resultados').value == '') {

				document.getElementById('resultados').value = document.getElementById('resultados').value;

			}else {
				total[0] = document.getElementById('resultados').value /*adiciona o primeiro numero a lista*/

				document.getElementById('subtrair').style.backgroundColor = "cyan"; /*muda a cor do botão para 
																		identificar a operação atual para o usuario*/

				document.getElementById('resultados').value = '';

				operacao = '-';  /*operação de subtracao*/
			}
		}
	});

	$("#adicao").click(function () {
		if(verifica_operaca_em_andamento()){
			if (document.getElementById('resultados').value == '') {

				document.getElementById('resultados').value = document.getElementById('resultados').value;

			} else {
				total[0] = document.getElementById('resultados').value /*adiciona o primeiro numero a lista*/

				document.getElementById('adicao').style.backgroundColor = "cyan"; /*muda a cor do botão para 
																		identificar a operação atual para o usuario*/

				document.getElementById('resultados').value = '';

				operacao = '+';  /*operação de adição*/
			}
		}
	});

	$("#multiplicar").click(function () {
		if(verifica_operaca_em_andamento()){
			if (document.getElementById('resultados').value == '') {

				document.getElementById('resultados').value = document.getElementById('resultados').value;

			} else {
				total[0] = document.getElementById('resultados').value /*adiciona o primeiro numero a lista*/

				document.getElementById('multiplicar').style.backgroundColor = "cyan"; /*muda a cor do botão para 
																		identificar a operação atual para o usuario*/

				document.getElementById('resultados').value = '';

				operacao = 'x';  /*operação de multiplicação*/
			}
		}
	});

	$("#dividir").click(function () {
		if(verifica_operaca_em_andamento_em_andamento()){
			if (document.getElementById('resultados').value == '') {

				document.getElementById('resultados').value = document.getElementById('resultados').value;

			} else {
				total[0] = document.getElementById('resultados').value /*adiciona o primeiro numero a lista*/

				document.getElementById('dividir').style.backgroundColor = "cyan"; /*muda a cor do botão para 
																		identificar a operação atual para o usuario*/

				document.getElementById('resultados').value = '';

				operacao = '÷';  /*operação de divisão*/
			}
		}
	});

	$("#igual").click(function () {
		calculo();
	});

}

function escreve_num_click() {
	$("#00").click(function () {
		document.getElementById('resultados').value = document.getElementById('resultados').value + '00';
	});

	$("#0").click(function () {
		document.getElementById('resultados').value = document.getElementById('resultados').value + '0';
	});

	$("#1").click(function () {
		document.getElementById('resultados').value = document.getElementById('resultados').value + '1';
	});

	$("#2").click(function () {
		document.getElementById('resultados').value = document.getElementById('resultados').value + '2';
	});

	$("#3").click(function () {
		document.getElementById('resultados').value = document.getElementById('resultados').value + '3';
	});

	$("#4").click(function () {
		document.getElementById('resultados').value = document.getElementById('resultados').value + '4';
	});

	$("#5").click(function () {
		document.getElementById('resultados').value = document.getElementById('resultados').value + '5';
	});

	$("#6").click(function () {
		document.getElementById('resultados').value = document.getElementById('resultados').value + '6';
	});

	$("#7").click(function () {
		document.getElementById('resultados').value = document.getElementById('resultados').value + '7';
	});

	$("#8").click(function () {
		document.getElementById('resultados').value = document.getElementById('resultados').value + '8';
	});

	$("#9").click(function () {
		document.getElementById('resultados').value = document.getElementById('resultados').value + '9';
	});

	$("#clear").click(function () { /*retorna as cores dos botões a inicial*/

		document.getElementById('resultados').value = '';
		document.getElementById('dividir').style.backgroundColor = "";
		document.getElementById('adicao').style.backgroundColor = "";
		document.getElementById('multiplicar').style.backgroundColor = "";
		document.getElementById('subtrair').style.backgroundColor = "";

	});

	$("#virgula").click(function () {

		if (document.getElementById('resultados').value == '') {

			document.getElementById('resultados').value = document.getElementById('resultados').value + '0,';

		} else if (document.getElementById('resultados').value.indexOf(',') == -1) {
			document.getElementById('resultados').value = document.getElementById('resultados').value + ',';

		}
	});

};


function calculo() {
	
	total[1] = document.getElementById('resultados').value /*adiciona o segundo numero a lista na posição 1*/

	if (operacao == '÷') { /*operação de divisão*/
		total[2] = total[0] / total[1];
		document.getElementById('resultados').value = total[2]; /*adiciona a resultado da equação a posição 2 da lista*/
		document.getElementById('dividir').style.backgroundColor = "";
		operacao = '';

	} else if (operacao == '+') {  /*operação de adição*/
		total[2] = parseInt(total[0]) + parseInt(total[1]);
		document.getElementById('resultados').value = total[2];
		document.getElementById('adicao').style.backgroundColor = "";
		operacao = '';

	} else if (operacao == '-') {  /*operação de subtração*/
		total[2] = parseInt(total[0]) - parseInt(total[1]);
		document.getElementById('resultados').value = total[2];
		document.getElementById('subtrair').style.backgroundColor = "";
		operacao = '';

	} else if (operacao == 'x') {  /*operação de multiplicação*/
		total[2] = parseInt(total[0]) * parseInt(total[1]);
		document.getElementById('resultados').value = total[2];
		document.getElementById('multiplicar').style.backgroundColor = "";
		operacao = '';
	}else{
		document.getElementById('resultados').value = "";
	}
};
