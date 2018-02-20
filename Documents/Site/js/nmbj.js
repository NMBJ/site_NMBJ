this.suiteNote = [];
this.score = 0;
var play = false;
function afficher(asElement,asImg)
{
	//Modification de l'image
	$(asElement).attr("src","images/"+asImg + ".jpg");
	
}

function changeText(asElement,event){
	var texte = "";
	var nom = "Who?";
	var citation = "";
	var image;
	var option;
	var son;

	if(asElement == "#jb_pres"){
		texte = "Cet amateur de galette saucisse est le grand batteur du groupe. Entre Kir breton et cidre doux, son expérience fait avancer le groupe vers un succès assuré! Jean-Baptiste le jour, et Didier Touchard la nuit, cet énergumène s'improvise DRH d'un claquement de doigt. ";
		nom = "JB";
		citation = '"Moins de gaz, y\'a plus de bulles dans le jacuzzi..."';
		image = "batterie";
		option = "qsf";
		son = "sol";
	}
	if(asElement == "#adrien_pres") {
		texte = "Ce grand charmeur ....";
		nom = "Adrilll";
		citation = '"ça va gros malin?"';
		image = "basse";
		option = "agi";
		son = "la";
	}
	if(asElement == "#coco_pres") {
		texte = "Il a tartiné, il a pilé";
		nom = "CoCo";
		citation = '"..."';
		image = "guitare_micro";
		option = "mis";
		son = "si";
	}
	if(asElement == "#fefe_pres") {
		texte = "Ce tchatcheur en puissance...";
		nom = "Feyfey";
		citation = '"Une salle, une ambiance, une sale ambiance!"';
		image = "guitare";
		option = "agi";
	}
	if(asElement == "#pierre_pres") {
		texte = "Le bel aviateur avec sa moustache bien taillée";
		nom = "Pierro";
		citation = '"..."';
		image = "guitare_elec";
		option = "qsf";
	}

	//On ajoute la classe à l'option sélectionnée
	if(option == "agi"){ $(".agi").addClass("option-selectioned"); $(".agi").removeClass("option-not-selectioned");}
	if(option == "qsf"){ $(".qsf").addClass("option-selectioned"); $(".qsf").removeClass("option-not-selectioned");}
	if(option == "mis"){ $(".mis").addClass("option-selectioned"); $(".mis").removeClass("option-not-selectioned");}


	if(event == "mouseout"){
		texte = "Glissez votre souris sur les photos des membres du groupe, afin d'afficher leur biographie.";
		nom = "Who?";
		citation = "";
		image = "micro";

		//On enlève la classe sélection à chaque option
		$(".agi").removeClass("option-selectioned"); $(".agi").addClass("option-not-selectioned");
		$(".qsf").removeClass("option-selectioned"); $(".qsf").addClass("option-not-selectioned");
		$(".mis").removeClass("option-selectioned"); $(".mis").addClass("option-not-selectioned");

		//Animation : Photo qui tourne dans le sens inverse des aiguilles d'une montre
		$(asElement).addClass("artist-not-selectionned");
		$(asElement).removeClass("artist-selectionned");

	}else{
		//Animation : Photo qui tourne dans le sens des aiguilles d'une montre
		$(asElement).addClass("artist-selectionned");
		$(asElement).removeClass("artist-not-selectionned");
	}	

	$("#texte_pres").text(texte);
	//Nom de la personne sélectionnée
	$("#prenom_pres").text(nom);
	//Citation de la personne sélectionnée
	$("#citation_pres").text(citation);
	//Fond d'écran
	$("#gtco-features").css('background-image', 'url(images/'+image+'.png)');
	

}

//Lancer le son de la page web
function playSound(son){
	//On change le son 
	$("#sound").attr("src", "sound/"+son+".mp3");
	//On joue le son
	document.querySelector('#sound').play();
}
function playMusique(son){
	//On change de musique 
	$("#sound").attr("src", "sound/"+son+".mp3");
	if(play==false)
	{
		//On joue le son
		document.querySelector('#sound').play();
		//Animation : Photo qui tourne dans le sens inverse des aiguilles d'une montre
		$("#Vinyl").addClass("play-vinyl");
		play = true;
	}
	else
	{
		//on arrete le son
		document.querySelector('#sound').pause();
		play = false;
		$("#Vinyl").removeClass("play-vinyl");
	}	
}

function gameSound(note){
	//On ajoute la note au tableau
	this.suiteNote.push(note);

	//C'est gagné
	if(this.suiteNote.join() == "sol,sol,sol,la,si,la,sol,si,la,la,sol"){

		//On affiche la vidéo
		document.getElementById("overlay").style.display = "block";

		//On joue la vidéo
		document.querySelector('#video_palmashow').play();
	}
	
 	//A chaque clic, on annule le timeout
	clearTimeout(this.timeOut);

	//Au bout de 2 secondes, on réinitialise le tableau
	this.timeOut = setTimeout(function(){
		this.suiteNote = [];
	},2000);
}

$(document).ready(function()
{
	$("#jb_pres").mouseover(function() { afficher("#jb_pres","jb"); changeText("#jb_pres","mouseover");});
	$("#jb_pres").mouseout(function() { afficher("#jb_pres","jb_nb"); changeText("#jb_pres","mouseout");});

	$("#adrien_pres").mouseover(function() { afficher("#adrien_pres","adrien"); changeText("#adrien_pres", "mouseover");});
	$("#adrien_pres").mouseout(function() { afficher("#adrien_pres","adrien_nb"); changeText("#adrien_pres", "mouseout");});

	$("#coco_pres").mouseover(function() { afficher("#coco_pres","corentin"); changeText("#coco_pres", "mouseover");});
	$("#coco_pres").mouseout(function() { afficher("#coco_pres","corentin_nb"); changeText("#coco_pres", "mouseout");});

	$("#fefe_pres").mouseover(function() { afficher("#fefe_pres","felix"); changeText("#fefe_pres", "mouseover");});
	$("#fefe_pres").mouseout(function() { afficher("#fefe_pres","felix_nb"); changeText("#fefe_pres", "mouseout");});

	$("#pierre_pres").mouseover(function() { afficher("#pierre_pres","pierre"); changeText("#pierre_pres","mouseover");});
	$("#pierre_pres").mouseout(function() { afficher("#pierre_pres","pierre_nb"); changeText("#pierre_pres", "mouseout");});

	$("#jb_pres").click(function(){		
		son = "sol";
		playSound(son);
		gameSound(son);
	});

	$("#adrien_pres").click(function(){
		son = "la";
		playSound(son);
		gameSound(son);
	});

	$("#coco_pres").click(function(){
		son = "si";
		playSound(son);
		gameSound(son);
	});
	$("#sentinelle").click(function(){
		son = "Sentinelle";
		playMusique(son);
	});

	//Quitter la vidéo du jeu
	$("#overlay").click(function(){
		document.getElementById("overlay").style.display = "none";
		
		//On stop la vidéo
		document.querySelector('#video_palmashow').pause();
		document.querySelector('#video_palmashow').currentTime = 0;
	});


	for(var i=0; i<10; i++){
		
		var image = new Image();
		image.src = "images/bulle.png";	
		image.height = (Math.random())*20+50;
		image.style = "animation-delay:"+10*Math.random()+"s;left:"+(Math.random())*1400+"px; position:absolute; z-index:2;";
		image.id = "bubble"+i;
		$("#containerBubble").append(image);
		$('#bubble'+i).attr('class', 'animation-bubbles'); 
		$('#bubble'+i).click(function(){

			//On supprime la bulle
			this.remove();
			//On actualise le score
			setScore(getScore()+1);
			//On affiche le score
			$('#score').text(getScore());
		}); 
	}	
} );

function setScore(score){
	this.score = score;
}

function getScore(){
	return this.score;
}