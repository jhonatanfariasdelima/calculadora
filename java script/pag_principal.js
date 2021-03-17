var total = [0, 0, 0];
operacao = '';
$(document).ready(function () {

	operacao_click();
	escreve_num_click();

});


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

function dig_teclado(e) {
	/*
	função que bloqueia a digitação do alfabeto pelo teclado, 
	e permite o uso do teclado alfanumérico (de 0 a 9) e as operações 
	aritiméticas suportadas pela calculadora (/ + * -) para digitação 
	do usuário com o teclado
	*/

	const char = String.fromCharCode(e.keyCode);
	const padrao = '[0-9]'; /*permite o uso do teclado alfanumérico (de 0 a 9)*/

	/*permite as operações aritiméticas suportadas pela calculadora (/ + * -) */
	if (e.keyCode == 44) { /*virgula*/ 
		return true;

	} else if (char.match(padrao)) {
		return true;

	}else if(e.keyCode == 45){ /*subtração*/
	
		if (document.getElementById('resultados').value == '') {

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		} else {
			total[0] = document.getElementById('resultados').value /*adiciona o primeiro numero a lista na possição 0*/

			document.getElementById('subtrair').style.backgroundColor = "cyan"; /*muda a cor do botão para 
																	identificar a operação atual para o usuario*/

			document.getElementById('resultados').value = '';

			operacao = 's';  /*operação de subtracao*/
			
		}
	}else if(e.keyCode == 43){ /*soma*/
	
		if (document.getElementById('resultados').value == '') {

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		} else {
			total[0] = document.getElementById('resultados').value 

			document.getElementById('adicao').style.backgroundColor = "cyan"; 

			document.getElementById('resultados').value = '';

			operacao = 'a';  /*operação de soma*/
			
		}
	}else if(e.keyCode == 47){ /*divisão*/
	
		if (document.getElementById('resultados').value == '') {

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		} else {
			total[0] = document.getElementById('resultados').value 

			document.getElementById('dividir').style.backgroundColor = "cyan"; 

			document.getElementById('resultados').value = '';

			operacao = 'd';  
			
		}
	}else if(e.keyCode == 42){  /*multiplicação*/ 
	
		if (document.getElementById('resultados').value == '') {

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		} else {
			total[0] = document.getElementById('resultados').value 

			document.getElementById('multiplicar').style.backgroundColor = "cyan"; 

			document.getElementById('resultados').value = '';

			operacao = 'm';  
			
		}
	}else if(e.keyCode == 13){  /*enter*/
		calculo();
		
	}
};

function verif_operacao(){
	/*função que verifica o andamento de operações*/
}

function operacao_click() {

	$("#subtrair").click(function () {
		if (document.getElementById('resultados').value == '') {

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		}else {
			total[0] = document.getElementById('resultados').value /*adiciona o primeiro numero a lista*/

			document.getElementById('subtrair').style.backgroundColor = "cyan"; /*muda a cor do botão para 
																	identificar a operação atual para o usuario*/

			document.getElementById('resultados').value = '';

			operacao = 's';  /*operação de subtracao*/
		}
	});

	$("#adicao").click(function () {
		if (document.getElementById('resultados').value == '') {

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		} else {
			total[0] = document.getElementById('resultados').value /*adiciona o primeiro numero a lista*/

			document.getElementById('adicao').style.backgroundColor = "cyan"; /*muda a cor do botão para 
																	identificar a operação atual para o usuario*/

			document.getElementById('resultados').value = '';

			operacao = 'a';  /*operação de adição*/
		}
	});

	$("#multiplicar").click(function () {
		if (document.getElementById('resultados').value == '') {

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		} else {
			total[0] = document.getElementById('resultados').value /*adiciona o primeiro numero a lista*/

			document.getElementById('multiplicar').style.backgroundColor = "cyan"; /*muda a cor do botão para 
																	identificar a operação atual para o usuario*/

			document.getElementById('resultados').value = '';

			operacao = 'm';  /*operação de multiplicação*/
		}
	});

	$("#dividir").click(function () {
		if (document.getElementById('resultados').value == '') {

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		} else {
			total[0] = document.getElementById('resultados').value /*adiciona o primeiro numero a lista*/

			document.getElementById('dividir').style.backgroundColor = "cyan"; /*muda a cor do botão para 
																	identificar a operação atual para o usuario*/

			document.getElementById('resultados').value = '';

			operacao = 'd';  /*operação de divisão*/
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

	if (operacao == 'd') { /*operação de divisão*/
		total[2] = total[0] / total[1];
		document.getElementById('resultados').value = total[2]; /*adiciona a resultado da equação a posição 2 da lista*/
		document.getElementById('dividir').style.backgroundColor = "";
		operacao = '';

	} else if (operacao == 'a') {  /*operação de adição*/
		total[2] = parseInt(total[0]) + parseInt(total[1]);
		document.getElementById('resultados').value = total[2];
		document.getElementById('adicao').style.backgroundColor = "";
		operacao = '';

	} else if (operacao == 's') {  /*operação de subtração*/
		total[2] = parseInt(total[0]) - parseInt(total[1]);
		document.getElementById('resultados').value = total[2];
		document.getElementById('subtrair').style.backgroundColor = "";
		operacao = '';

	} else if (operacao == 'm') {  /*operação de multiplicação*/
		total[2] = parseInt(total[0]) * parseInt(total[1]);
		document.getElementById('resultados').value = total[2];
		document.getElementById('multiplicar').style.backgroundColor = "";
		operacao = '';
	}
};