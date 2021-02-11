$(document).ready(function(){

	escreve_num();
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
	})


	$("#menos").click(function(){
		if(document.getElementById('resultados').value ==  ''){

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		}else{
			document.getElementById('resultados').value = document.getElementById('resultados').value + '-';
		}
	})

	$("#mais").click(function(){
		if(document.getElementById('resultados').value ==  ''){

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		}else{
			document.getElementById('resultados').value = document.getElementById('resultados').value + '+';
		}
	})

	$("#multiplicar").click(function(){
		if(document.getElementById('resultados').value ==  ''){

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		}else{
			document.getElementById('resultados').value = document.getElementById('resultados').value + 'x';
		}
	})

	$("#dividir").click(function(){
		if(document.getElementById('resultados').value ==  ''){

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		}else{
			document.getElementById('resultados').value = document.getElementById('resultados').value + '÷';
		}
	})

	$("#ponto").click(function(){

		if(document.getElementById('resultados').value ==  ''){

			document.getElementById('resultados').value = document.getElementById('resultados').value;

		}else{
			document.getElementById('resultados').value = document.getElementById('resultados').value + '.';
		}
	})

}



