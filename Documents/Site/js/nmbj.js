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
	if(asElement == "#jb_pres"){
		texte = "Cet amateur de galette saucisse est le grand batteur du groupe. Entre Kir breton et cidre doux, son expérience fait avancer le groupe vers un succès assuré! Jean-Baptiste le jour, et Didier Touchard la nuit, cet énergumène s'improvise DRH d'un claquement de doigt. ";
		nom = "JB";
		citation = '"Moins de gaz, il n\'y a plus de bulles dans le jacuzzi..."';
		image = "batterie";
		option = "qsf";
	}
	if(asElement == "#adrien_pres") {
		texte = "Ce grand charmeur ....";
		nom = "Adrilll";
		image = "basse";
		option = "agi";
	}
	if(asElement == "#coco_pres") {
		texte = "Il a tartiné, il a pilé";
		nom = "CoCo";
		image = "guitare_micro";
		option = "mis";
	}
	if(asElement == "#fefe_pres") {
		texte = "Ce tchatcheur en puissance...";
		nom = "Feyfey";
		image = "guitare";
		option = "agi";
	}
	if(asElement == "#pierre_pres") {
		texte = "Le bel aviateur avec sa moustache bien taillée";
		nom = "Pierro";
		image = "guitare_elec";
		option = "qsf";
	}

	if(option == "agi") $(".agi").css('color', '#008B8B');


	if(event == "mouseout"){
		texte = "Glissez votre souris sur les photos des membres du groupe, afin d'afficher leur biographie.";
		nom = "Who?";
		citation = "";
		image = "micro";
	}
	$("#texte_pres").text(texte);
	$("#prenom_pres").text(nom);
	$("#citation_pres").text(citation);
	$("#gtco-features").css('background-image', 'url(images/'+image+'.png)');
	
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
} );