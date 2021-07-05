function trocar(caminho,titulo,legenda){
	document.getElementById('imagem-principal').src = caminho;
	document.getElementById('titulo').value = titulo;
	document.getElementById('legenda').value = legenda;
}