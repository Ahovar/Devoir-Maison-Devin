let button = document.getElementById('button');
let form = document.getElementById('form')
let message = document.getElementById('message')
let link = document.getElementById('link')

const NombreSecret = Math.floor(Math.random() * 100); //génère un nombre secret entre 1 et 100
let attempts = 5; //le joueur a en vérité 6 tentatives car la première tentative ne décrémente pas

button.onclick = function(){
	const input = document.getElementById("input");
	if(input.value != ""){

		// 2 cas: indique si le nombre fourni est plus grand ou plus petit que le nombre secret ainsi que le nombbre de tentatives restantes
		if(input.value < NombreSecret){
			message.innerText = 'le nombre est plus grand que ' + input.value +' et il vous reste '+ attempts +' tentatives';
			// message.innerText = 'le nombre secret est ' + NombreSecret +'!'; //ligne de test
			message.style.color = "#999"
		}else if(input.value > NombreSecret){
			message.innerText = 'le nombre est plus petit que ' + input.value +' et il vous reste '+ attempts +' tentatives';
			// message.innerText = 'le nombre secret est ' + NombreSecret +'!'; //ligne de test
			message.style.color = "#999"
		}
		
		//arrête le jeu et affiche un message quand toute les tentatives sont épuisées
		if(attempts == 0){
			message.innerText = 'Vous avez perdu, il fallait trouver ' + NombreSecret +'!';
			message.style.color = "red";
			form.style.display = 'none';
			form.style.display = 'flex';
			return;
		}
		attempts --; //décrémente les tentatives après chaque saisie valide

		// affiche un message si le joueur arrive à deviner le nombre secret et arrête le jeu
		if(input.value == NombreSecret){
			message.innerText = 'Félicitations, Vouz avez pu deviner le nombre et cest ' + NombreSecret +'!';
			message.style.color = "green";
			form.style.display = 'none';
			form.style.display = 'flex';
			return;
		}

		// affiche un message d'erreur en cas de champ vide ou de saisie d'une lettre
		}else{
			message.innerText = "ce champ est vide !";
			message.style.color= "red";
		}
	}