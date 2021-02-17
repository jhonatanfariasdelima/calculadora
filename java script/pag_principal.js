var total = [0, 0, 0];
operacao = '';
$(document).ready(function(){

	escreve_num();
	escreve_sinal();
	calculo();
});


function escreve_num() {
	$("#00").click(function(){
		document.getElementById('resultados').value = document.getElementById('resultados').value + '00';
	})

	$("#0").click(function(){
		document.getElementById('resultados').value = document.getElementById('resultados').value + '0';
	})

	$("#1").click(function(){
		document.getElementById('resultados').value = document.getElementById('resultados').value + '1';
	})

	$("#2").click(function(){
		document.getElementById('resultados').value = document.getElementById('resultados').value + '2';
	})

	$("#3").click(function(){
		document.getElementById('resultados').value = document.getElementById('resultados').value + '3';
	})

	$("#4").click(function(){
		document.getElementById('resultados').value = document.getElementById('resultados').value + '4';
	})

	$("#5").click(function(){
		document.getElementById('resultados').value = document.getElementById('resultados').value + '5';
	})

	$("#6").click(function(){
		document.getElementById('resultados').value = document.getElementById('resultados').value + '6';
	})

	$("#7").click(function(){
		document.getElementById('resultados').value = document.getElementById('resultados').value + '7';
	})

	$("#8").click(function(){
		document.getElementById('resultados').value = document.getElementById('resultados').value + '8';
	})

	$("#9").click(function(){
		document.getElementById('resultados').value = document.getElementById('resultados').value + '9';
	})

	$("#clear").click(function(){
		document.getElementById('resultados').value = '';
	})}


function escreve_sinal() {

	$("#subtrair").click(function(){
		if(document.getElementById('resultados').value ==  ''){

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		}else{
			total[0] = document.getElementById('resultados').value /*adiciona o primeiro numero a lista*/

			document.getElementById('subtrair').style.backgroundColor = "cyan"; /*muda a cor do botão para 
																	identificar a operação atual para o usuario*/

			document.getElementById('resultados').value = '';
			
			operacao = 's';  /*operação de subtracao*/
		}
	})

	$("#adicao").click(function(){
		if(document.getElementById('resultados').value ==  ''){

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		}else{
			total[0] = document.getElementById('resultados').value /*adiciona o primeiro numero a lista*/

			document.getElementById('adicao').style.backgroundColor = "cyan"; /*muda a cor do botão para 
																	identificar a operação atual para o usuario*/

			document.getElementById('resultados').value = '';
			
			operacao = 'a';  /*operação de adição*/
		}
	})

	$("#multiplicar").click(function(){
		if(document.getElementById('resultados').value ==  ''){

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		}else{
			total[0] = document.getElementById('resultados').value /*adiciona o primeiro numero a lista*/

			document.getElementById('multiplicar').style.backgroundColor = "cyan"; /*muda a cor do botão para 
																	identificar a operação atual para o usuario*/

			document.getElementById('resultados').value = '';
			
			operacao = 'm';  /*operação de multiplicação*/
		}
	})

	$("#dividir").click(function(){
		if(document.getElementById('resultados').value ==  ''){

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		}else{
			total[0] = document.getElementById('resultados').value /*adiciona o primeiro numero a lista*/

			document.getElementById('dividir').style.backgroundColor = "cyan"; /*muda a cor do botão para 
																	identificar a operação atual para o usuario*/

			document.getElementById('resultados').value = '';
			
			operacao = 'd';  /*operação de divisão*/
		}
	})


	$("#virgula").click(function(){

		if(document.getElementById('resultados').value ==  ''){

			document.getElementById('resultados').value = document.getElementById('resultados').value + '0,';

		}else if(document.getElementById('resultados').value.indexOf(',') == -1){
			document.getElementById('resultados').value = document.getElementById('resultados').value + ',';
		
		}
	})
}

function calculo() {
	$("#igual").click(function(){
		total[1] = document.getElementById('resultados').value /*adiciona o segundo numero a lista*/
		
		if(operacao == 'd'){
			total[2] = total[0] / total[1];
			document.getElementById('resultados').value = total[2];
			document.getElementById('dividir').style.backgroundColor = "";
			operacao = '';

		}else if(operacao == 'a'){
			total[2] = parseInt(total[0]) + parseInt(total[1]);
			document.getElementById('resultados').value = total[2];
			document.getElementById('adicao').style.backgroundColor = "";
			operacao = '';

		}else if(operacao == 's'){
			total[2] = parseInt(total[0]) - parseInt(total[1]);
			document.getElementById('resultados').value = total[2];
			document.getElementById('subtrair').style.backgroundColor = "";
			operacao = '';

		}else if(operacao == 'm'){
			total[2] = parseInt(total[0]) * parseInt(total[1]);
			document.getElementById('resultados').value = total[2];
			document.getElementById('multiplicar').style.backgroundColor = "";
			operacao = '';
		}

		console.log(total);
	})
}



