alert('Olá, tudo bom? Bora jogar um quiz!')
gender = prompt('Você é um menino? ou uma menina?');
name = prompt('Qual seu nome?');
alert('Então seu nome é ' + name)
document.write('Gênero: ' + gender); 
document.write("Nome:" + name);

resp = confirm("Você gostaria de jogar esse quiz?");
if(resp) {
   			alert('Vamos começar o quiz');
escolha = prompt("Qual tema de quiz você gostaria de jogar? 1- jogos \n 2- desenhos");
  			 if (escolha == 1) {
   					jogos();
  					 			}
   	else if (escolha == 2){
   		desenhos();
  						 }
    else{
    	alert('Opção invalida');
    	}

		     }
	else{
		alert('que pena, você iria gostar...');
		alert("até a proxima.")
		window.close();
		}

    function jogos(){
      alert('Bem-vindo ao quiz de jogos!');
      alert('Bora começar');

      alert('Pergunta I');
      game = prompt("Qual jogo de mundo aberto tem o maior mapa? 1- The elder scrolls: Daggerfall \n 2- The crew");

      if (game == 1) {
        alert('Você acertou');
      }

      else if (game == 2) {
        alert('Você errou');
        jogos();
      }

      else{
        alert("Opção invalida");
        jogos();
      }

      alert('Pergunta II');
      game2 = prompt("Qual jogo ganhou o game of the year? \n 1-Red dead Redemption 2 \n 2-God of war");

      if (game2 == 1) {
        alert('Você errou');
        jogos();
      }

      else if (game2 == 2) {
        alert('Você acertou');
      }

      else{
        alert('Opção invalida');
        jogos();
      }

      alert('Pergunta III');
      game3 = prompt('Qual é o videogame mais vendido? \n 1-Playstation 2 \n 2- Xbox one');

      if (game3 == 1) {
        alert("Você acertou");
        alert('Você ganhou o quiz, Você é um verdadeiro Gamer!');
        window.close();
      }

      else if (game3 == 2) {
        alert('Você errou');
        jogos();
      }

      else{
        alert('Opção invalida');
        jogos();
      }
                         }

    function desenhos() {
     alert('Bem-vindo ao quiz de desenhos!');
      alert('Bora começar');

      alert('Pergunta I');
      des = prompt('Qual Animação ganhou o Oscar? 1- Homem-Aranha no Aranhaverso \n 2- Wifi Ralph');

      if (des == 1) {
        alert('Você acertou');
      }

      else if (des == 2) {
        alert('Você errou');
        desenhos();
      }

      else{
        alert('Opção invalida');
        desenhos();
      }

      alert('Pergunta II');
      des2 = prompt('Qual foi a primeira animação da pixar? 1-Carros \n 2-Toy Story');

      if (des2 == 1) {
        alert('Você errou');
        desenhos();
      }

      else if (des2 == 2) {
        alert('Você acertou');
      }

      else{
        alert("Opção invalida");
        desenhos();
      }

      alert('Pergunta III');
      des3 = prompt('Qual a animação mais lucrativa do mundo? 1-Frozen \n 2-Shrek');

      if (des3 == 1) {
        alert('Você acertou');
        alert('Parabens você acertou tudo!');
        window.close();
      }

      else if (des3 == 2) {
        alert('Você errou');
        desenhos();
      }

      else{
        alert('Opção invalida');
        desenhos();
      }
                             }